// ==UserScript==
// @name         网络请求拦截器
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  劫持网站的网络请求，修改入参和参数数据
// @author       You
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  // 配置存储键名
  const CONFIG_KEY = 'network_interceptor_config';
  const LOG_KEY = 'network_interceptor_logs';

  // 默认配置
  const defaultConfig = {
    enabled: true,
    interceptRules: [
      {
        id: 'example_rule',
        name: '示例规则',
        enabled: false,
        urlPattern: '.*',
        method: 'ALL',
        modifyRequest: true,
        modifyResponse: false,
        requestModifications: {
          headers: {},
          body: null,
          url: null
        },
        responseModifications: {
          headers: {},
          body: null
        }
      }
    ],
    logging: {
      enabled: true,
      maxLogs: 1000,
      logLevel: 'info' // debug, info, warn, error
    }
  };

  // 日志系统
  class Logger {
    constructor() {
      this.logs = this.loadLogs();
    }

    loadLogs() {
      try {
        return JSON.parse(GM_getValue(LOG_KEY, '[]'));
      } catch (e) {
        return [];
      }
    }

    saveLogs() {
      GM_setValue(LOG_KEY, JSON.stringify(this.logs));
    }

    log(level, message, data = null) {
      const config = this.getConfig();
      if (!config.logging.enabled) return;

      const logEntry = {
        timestamp: new Date().toISOString(),
        level,
        message,
        data: data ? JSON.parse(JSON.stringify(data)) : null
      };

      this.logs.unshift(logEntry);

      // 限制日志数量
      if (this.logs.length > config.logging.maxLogs) {
        this.logs = this.logs.slice(0, config.logging.maxLogs);
      }

      this.saveLogs();

      // 控制台输出
      console[level] ? console[level](`[网络拦截器] ${message}`, data) : console.log(`[网络拦截器] ${message}`, data);
    }

    debug(message, data) { this.log('debug', message, data); }
    info(message, data) { this.log('info', message, data); }
    warn(message, message, data) { this.log('warn', message, data); }
    error(message, data) { this.log('error', message, data); }

    getConfig() {
      try {
        return JSON.parse(GM_getValue(CONFIG_KEY, JSON.stringify(defaultConfig)));
      } catch (e) {
        return defaultConfig;
      }
    }
  }

  const logger = new Logger();

  // DOM操作工具函数
  function safeAppendChild(parent, child) {
    try {
      if (parent && child) {
        parent.appendChild(child);
        return true;
      }
      return false;
    } catch (e) {
      logger.error('DOM操作失败', e);
      return false;
    }
  }

  function safeRemoveChild(parent, child) {
    try {
      if (parent && child && parent.contains(child)) {
        parent.removeChild(child);
        return true;
      }
      return false;
    } catch (e) {
      logger.error('DOM移除失败', e);
      return false;
    }
  }

  // 配置管理
  class ConfigManager {
    getConfig() {
      try {
        return JSON.parse(GM_getValue(CONFIG_KEY, JSON.stringify(defaultConfig)));
      } catch (e) {
        logger.error('配置加载失败，使用默认配置', e);
        return defaultConfig;
      }
    }

    saveConfig(config) {
      try {
        GM_setValue(CONFIG_KEY, JSON.stringify(config));
        logger.info('配置已保存');
        return true;
      } catch (e) {
        logger.error('配置保存失败', e);
        return false;
      }
    }

    addRule(rule) {
      const config = this.getConfig();
      rule.id = 'rule_' + Date.now();
      config.interceptRules.push(rule);
      return this.saveConfig(config);
    }

    updateRule(ruleId, updates) {
      const config = this.getConfig();
      const ruleIndex = config.interceptRules.findIndex(rule => rule.id === ruleId);
      if (ruleIndex !== -1) {
        config.interceptRules[ruleIndex] = { ...config.interceptRules[ruleIndex], ...updates };
        return this.saveConfig(config);
      }
      return false;
    }

    deleteRule(ruleId) {
      const config = this.getConfig();
      config.interceptRules = config.interceptRules.filter(rule => rule.id !== ruleId);
      return this.saveConfig(config);
    }
  }

  const configManager = new ConfigManager();

  // 请求拦截器
  class RequestInterceptor {
    constructor() {
      this.originalFetch = window.fetch;
      this.originalXHROpen = XMLHttpRequest.prototype.open;
      this.originalXHRSend = XMLHttpRequest.prototype.send;
      this.init();
    }

    init() {
      this.interceptFetch();
      this.interceptXHR();
      logger.info('网络请求拦截器已初始化');
    }

    // 拦截 Fetch API
    interceptFetch() {
      const self = this;
      window.fetch = function (input, init = {}) {
        const url = typeof input === 'string' ? input : input.url;
        const method = init.method || 'GET';

        logger.debug('拦截到 Fetch 请求', { url, method, init });

        const modifiedRequest = self.processRequest(url, method, init);

        if (modifiedRequest.modified) {
          logger.info('Fetch 请求已被修改', modifiedRequest);
          return self.originalFetch.call(this, modifiedRequest.url || input, modifiedRequest.init);
        }

        return self.originalFetch.call(this, input, init);
      };
    }

    // 拦截 XMLHttpRequest
    interceptXHR() {
      const self = this;
      let xhrData = {};

      XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
        xhrData = { method, url, async, user, password };
        logger.debug('拦截到 XHR open', xhrData);
        return self.originalXHROpen.call(this, method, url, async, user, password);
      };

      XMLHttpRequest.prototype.send = function (data) {
        logger.debug('拦截到 XHR send', { ...xhrData, data });

        const modifiedRequest = self.processRequest(xhrData.url, xhrData.method, {
          body: data,
          headers: this.getAllResponseHeaders ? this.getAllResponseHeaders() : {}
        });

        if (modifiedRequest.modified) {
          logger.info('XHR 请求已被修改', modifiedRequest);

          // 重新打开连接（如果需要修改URL）
          if (modifiedRequest.url && modifiedRequest.url !== xhrData.url) {
            self.originalXHROpen.call(this, xhrData.method, modifiedRequest.url, xhrData.async, xhrData.user, xhrData.password);
          }

          // 修改请求头
          if (modifiedRequest.init && modifiedRequest.init.headers) {
            Object.keys(modifiedRequest.init.headers).forEach(key => {
              this.setRequestHeader(key, modifiedRequest.init.headers[key]);
            });
          }

          data = modifiedRequest.init && modifiedRequest.init.body ? modifiedRequest.init.body : data;
        }

        return self.originalXHRSend.call(this, data);
      };
    }

    // 处理请求修改
    processRequest(url, method, init) {
      const config = configManager.getConfig();
      if (!config.enabled) {
        return { modified: false };
      }

      for (const rule of config.interceptRules) {
        if (!rule.enabled) continue;

        // 检查URL模式匹配
        if (!this.matchesPattern(url, rule.urlPattern)) continue;

        // 检查方法匹配
        if (rule.method !== 'ALL' && rule.method !== method) continue;

        logger.info(`规则匹配: ${rule.name}`, { url, method, rule });

        const modifiedRequest = this.applyRuleModifications(url, method, init, rule);
        if (modifiedRequest.modified) {
          return modifiedRequest;
        }
      }

      return { modified: false };
    }

    // 应用规则修改
    applyRuleModifications(url, method, init, rule) {
      let modified = false;
      const newInit = { ...init };

      // 修改请求头
      if (rule.modifyRequest && rule.requestModifications.headers) {
        Object.keys(rule.requestModifications.headers).forEach(key => {
          if (rule.requestModifications.headers[key] !== '') {
            newInit.headers = newInit.headers || {};
            newInit.headers[key] = rule.requestModifications.headers[key];
            modified = true;
          }
        });
      }

      // 修改请求体
      if (rule.modifyRequest && rule.requestModifications.body) {
        try {
          newInit.body = rule.requestModifications.body;
          modified = true;
        } catch (e) {
          logger.error('修改请求体失败', e);
        }
      }

      // 修改URL
      let newUrl = url;
      if (rule.modifyRequest && rule.requestModifications.url) {
        newUrl = rule.requestModifications.url;
        modified = true;
      }

      return {
        modified,
        url: newUrl,
        init: newInit
      };
    }

    // URL模式匹配
    matchesPattern(url, pattern) {
      try {
        const regex = new RegExp(pattern);
        return regex.test(url);
      } catch (e) {
        logger.error('URL模式匹配失败', { pattern, error: e });
        return false;
      }
    }
  }

  // 用户界面
  class UI {
    constructor() {
      this.createUI();
    }

    createUI() {
      // 确保document.body存在
      if (!document.body) {
        logger.error('document.body不存在，无法创建UI');
        return;
      }

      // 检查是否已经创建过UI元素
      if (document.getElementById('network-interceptor-btn')) {
        logger.info('UI元素已存在，跳过创建');
        return;
      }

      // 创建浮动按钮
      const button = document.createElement('div');
      button.id = 'network-interceptor-btn';
      button.innerHTML = '🔧';
      button.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #007bff;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 20px;
        z-index: 10000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
      `;

      button.addEventListener('click', () => this.togglePanel());
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });

      if (safeAppendChild(document.body, button)) {
        logger.info('浮动按钮已创建');
      } else {
        logger.error('创建浮动按钮失败');
        return;
      }

      // 创建控制面板
      this.createPanel();
    }

    createPanel() {
      const panel = document.createElement('div');
      panel.id = 'network-interceptor-panel';
      panel.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        width: 400px;
        max-height: 600px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10001;
        display: none;
        overflow: hidden;
      `;

      panel.innerHTML = `
        <div style="padding: 15px; border-bottom: 1px solid #eee;">
          <h3 style="margin: 0; color: #333;">网络请求拦截器</h3>
          <div style="margin-top: 10px;">
            <label style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="interceptor-enabled" style="margin: 0;">
              <span>启用拦截器</span>
            </label>
          </div>
        </div>
        <div style="padding: 15px; max-height: 500px; overflow-y: auto;">
          <div id="rules-container"></div>
          <button id="add-rule-btn" style="width: 100%; padding: 10px; margin-top: 10px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">添加规则</button>
        </div>
        <div style="padding: 15px; border-top: 1px solid #eee; background: #f8f9fa;">
          <button id="view-logs-btn" style="width: 100%; padding: 8px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">查看日志</button>
        </div>
      `;

      if (safeAppendChild(document.body, panel)) {
        this.panel = panel;
        this.bindEvents();
        this.loadConfig();
        logger.info('控制面板已创建');
      } else {
        logger.error('创建控制面板失败');
      }
    }

    bindEvents() {
      // 启用/禁用切换
      document.getElementById('interceptor-enabled').addEventListener('change', (e) => {
        const config = configManager.getConfig();
        config.enabled = e.target.checked;
        configManager.saveConfig(config);
        logger.info('拦截器状态已更改', { enabled: config.enabled });
      });

      // 添加规则按钮
      document.getElementById('add-rule-btn').addEventListener('click', () => {
        this.showAddRuleDialog();
      });

      // 查看日志按钮
      document.getElementById('view-logs-btn').addEventListener('click', () => {
        this.showLogsDialog();
      });
    }

    togglePanel() {
      const panel = this.panel;
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
      if (panel.style.display === 'block') {
        this.loadConfig();
      }
    }

    loadConfig() {
      const config = configManager.getConfig();
      document.getElementById('interceptor-enabled').checked = config.enabled;
      this.renderRules(config.interceptRules);
    }

    renderRules(rules) {
      const container = document.getElementById('rules-container');
      container.innerHTML = '';

      rules.forEach(rule => {
        const ruleElement = document.createElement('div');
        ruleElement.style.cssText = `
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 10px;
                    margin-bottom: 10px;
                    background: #f8f9fa;
                `;

        ruleElement.innerHTML = `
                    <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 8px;">
                        <label style="display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" class="rule-enabled" data-rule-id="${rule.id}" ${rule.enabled ? 'checked' : ''}>
                            <strong>${rule.name}</strong>
                        </label>
                        <button class="delete-rule-btn" data-rule-id="${rule.id}" style="background: #dc3545; color: white; border: none; border-radius: 3px; padding: 4px 8px; cursor: pointer; font-size: 12px;">删除</button>
                    </div>
                    <div style="font-size: 12px; color: #666;">
                        <div>URL模式: ${rule.urlPattern}</div>
                        <div>方法: ${rule.method}</div>
                        <div>修改请求: ${rule.modifyRequest ? '是' : '否'}</div>
                    </div>
                `;

        container.appendChild(ruleElement);
      });

      // 绑定事件
      container.querySelectorAll('.rule-enabled').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
          const ruleId = e.target.dataset.ruleId;
          configManager.updateRule(ruleId, { enabled: e.target.checked });
          logger.info('规则状态已更改', { ruleId, enabled: e.target.checked });
        });
      });

      container.querySelectorAll('.delete-rule-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const ruleId = e.target.dataset.ruleId;
          if (confirm('确定要删除这个规则吗？')) {
            configManager.deleteRule(ruleId);
            this.loadConfig();
            logger.info('规则已删除', { ruleId });
          }
        });
      });
    }

    showAddRuleDialog() {
      // 检查是否已经存在对话框
      if (document.getElementById('add-rule-dialog')) {
        logger.warn('添加规则对话框已存在');
        return;
      }

      const dialog = document.createElement('div');
      dialog.id = 'add-rule-dialog';
      dialog.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 10002;
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      dialog.innerHTML = `
                <div style="background: white; padding: 20px; border-radius: 8px; width: 500px; max-height: 80vh; overflow-y: auto;">
                    <h3 style="margin-top: 0;">添加拦截规则</h3>
                    <form id="add-rule-form">
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px;">规则名称:</label>
                            <input type="text" id="rule-name" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" required>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px;">URL模式 (正则表达式):</label>
                            <input type="text" id="rule-url-pattern" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" placeholder=".*" required>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px;">HTTP方法:</label>
                            <select id="rule-method" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                                <option value="ALL">全部</option>
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                                <option value="PUT">PUT</option>
                                <option value="DELETE">DELETE</option>
                                <option value="PATCH">PATCH</option>
                            </select>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="rule-modify-request">
                                <span>修改请求</span>
                            </label>
                        </div>
                        <div id="request-modifications" style="margin-bottom: 15px; display: none;">
                            <h4>请求修改</h4>
                            <div style="margin-bottom: 10px;">
                                <label style="display: block; margin-bottom: 5px;">修改URL:</label>
                                <input type="text" id="rule-modify-url" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" placeholder="留空表示不修改">
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label style="display: block; margin-bottom: 5px;">修改请求体:</label>
                                <textarea id="rule-modify-body" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; height: 60px;" placeholder="留空表示不修改"></textarea>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 5px;">添加/修改请求头:</label>
                                <div id="headers-container"></div>
                                <button type="button" id="add-header-btn" style="margin-top: 5px; padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">添加请求头</button>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; justify-content: flex-end;">
                            <button type="button" id="cancel-add-rule" style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">取消</button>
                            <button type="submit" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">添加</button>
                        </div>
                    </form>
                </div>
            `;

      if (safeAppendChild(document.body, dialog)) {
        logger.info('添加规则对话框已创建');
      } else {
        logger.error('创建添加规则对话框失败');
        return;
      }

      // 绑定事件
      document.getElementById('rule-modify-request').addEventListener('change', (e) => {
        const modifications = document.getElementById('request-modifications');
        modifications.style.display = e.target.checked ? 'block' : 'none';
      });

      document.getElementById('add-header-btn').addEventListener('click', () => {
        this.addHeaderField();
      });

      document.getElementById('add-rule-form').addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleAddRule();
        safeRemoveChild(document.body, dialog);
      });

      document.getElementById('cancel-add-rule').addEventListener('click', () => {
        safeRemoveChild(document.body, dialog);
      });
    }

    addHeaderField() {
      const container = document.getElementById('headers-container');
      const headerDiv = document.createElement('div');
      headerDiv.style.cssText = 'display: flex; gap: 5px; margin-bottom: 5px;';
      headerDiv.innerHTML = `
                <input type="text" placeholder="Header名称" class="header-name" style="flex: 1; padding: 5px; border: 1px solid #ddd; border-radius: 3px;">
                <input type="text" placeholder="Header值" class="header-value" style="flex: 1; padding: 5px; border: 1px solid #ddd; border-radius: 3px;">
                <button type="button" class="remove-header-btn" style="padding: 5px 8px; background: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer;">删除</button>
            `;

      headerDiv.querySelector('.remove-header-btn').addEventListener('click', () => {
        container.removeChild(headerDiv);
      });

      container.appendChild(headerDiv);
    }

    handleAddRule() {
      const name = document.getElementById('rule-name').value;
      const urlPattern = document.getElementById('rule-url-pattern').value;
      const method = document.getElementById('rule-method').value;
      const modifyRequest = document.getElementById('rule-modify-request').checked;
      const modifyUrl = document.getElementById('rule-modify-url').value;
      const modifyBody = document.getElementById('rule-modify-body').value;

      // 收集请求头
      const headers = {};
      document.querySelectorAll('.header-name').forEach((nameInput, index) => {
        const valueInput = document.querySelectorAll('.header-value')[index];
        if (nameInput.value && valueInput.value) {
          headers[nameInput.value] = valueInput.value;
        }
      });

      const rule = {
        name,
        enabled: true,
        urlPattern,
        method,
        modifyRequest,
        modifyResponse: false,
        requestModifications: {
          headers,
          body: modifyBody || null,
          url: modifyUrl || null
        },
        responseModifications: {
          headers: {},
          body: null
        }
      };

      if (configManager.addRule(rule)) {
        this.loadConfig();
        logger.info('新规则已添加', rule);
      } else {
        alert('添加规则失败');
      }
    }

    showLogsDialog() {
      // 检查是否已经存在对话框
      if (document.getElementById('logs-dialog')) {
        logger.warn('日志对话框已存在');
        return;
      }

      const logs = logger.logs;
      const dialog = document.createElement('div');
      dialog.id = 'logs-dialog';
      dialog.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 10002;
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      const logsHtml = logs.slice(0, 50).map(log => `
                <div style="padding: 8px; border-bottom: 1px solid #eee; font-size: 12px;">
                    <div style="color: #666;">${log.timestamp}</div>
                    <div style="color: ${this.getLogColor(log.level)};">[${log.level.toUpperCase()}] ${log.message}</div>
                    ${log.data ? `<div style="color: #999; margin-top: 4px;">${JSON.stringify(log.data, null, 2)}</div>` : ''}
                </div>
            `).join('');

      dialog.innerHTML = `
                <div style="background: white; padding: 20px; border-radius: 8px; width: 600px; max-height: 80vh; overflow-y: auto;">
                    <h3 style="margin-top: 0;">拦截日志</h3>
                    <div style="max-height: 500px; overflow-y: auto; border: 1px solid #ddd; border-radius: 4px;">
                        ${logsHtml || '<div style="padding: 20px; text-align: center; color: #666;">暂无日志</div>'}
                    </div>
                    <div style="margin-top: 15px; text-align: right;">
                        <button id="clear-logs-btn" style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">清空日志</button>
                        <button id="close-logs-btn" style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">关闭</button>
                    </div>
                </div>
            `;

      if (safeAppendChild(document.body, dialog)) {
        logger.info('日志对话框已创建');
      } else {
        logger.error('创建日志对话框失败');
        return;
      }

      document.getElementById('clear-logs-btn').addEventListener('click', () => {
        logger.logs = [];
        logger.saveLogs();
        safeRemoveChild(document.body, dialog);
        logger.info('日志已清空');
      });

      document.getElementById('close-logs-btn').addEventListener('click', () => {
        safeRemoveChild(document.body, dialog);
      });
    }

    getLogColor(level) {
      const colors = {
        debug: '#6c757d',
        info: '#007bff',
        warn: '#ffc107',
        error: '#dc3545'
      };
      return colors[level] || '#333';
    }
  }

  // 初始化
  function init() {
    logger.info('网络请求拦截器启动');

    // 立即初始化请求拦截器
    new RequestInterceptor();

    // 等待DOM加载完成后再创建UI
    function initUI() {
      if (document.body) {
        new UI();
      } else {
        // 如果body还不存在，继续等待
        setTimeout(initUI, 100);
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initUI);
    } else {
      initUI();
    }
  }

  // 启动
  init();

})();
