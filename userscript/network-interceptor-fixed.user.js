// ==UserScript==
// @name         网络请求拦截器 (修复版)
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  劫持网站的网络请求，修改入参和参数数据 - 修复DOM操作错误
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
      logLevel: 'info'
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

      if (this.logs.length > config.logging.maxLogs) {
        this.logs = this.logs.slice(0, config.logging.maxLogs);
      }

      this.saveLogs();

      // 控制台输出
      if (console[level]) {
        console[level](`[网络拦截器] ${message}`, data);
      } else {
        console.log(`[网络拦截器] ${message}`, data);
      }
    }

    debug(message, data) { this.log('debug', message, data); }
    info(message, data) { this.log('info', message, data); }
    warn(message, data) { this.log('warn', message, data); }
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
      if (parent && child && parent.appendChild) {
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
      if (parent && child && parent.contains && parent.contains(child)) {
        parent.removeChild(child);
        return true;
      }
      return false;
    } catch (e) {
      logger.error('DOM移除失败', e);
      return false;
    }
  }

  function waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }

      const observer = new MutationObserver((mutations, obs) => {
        const element = document.querySelector(selector);
        if (element) {
          obs.disconnect();
          resolve(element);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
      }, timeout);
    });
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

          if (modifiedRequest.url && modifiedRequest.url !== xhrData.url) {
            self.originalXHROpen.call(this, xhrData.method, modifiedRequest.url, xhrData.async, xhrData.user, xhrData.password);
          }

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

        if (!this.matchesPattern(url, rule.urlPattern)) continue;
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

      if (rule.modifyRequest && rule.requestModifications.headers) {
        Object.keys(rule.requestModifications.headers).forEach(key => {
          if (rule.requestModifications.headers[key] !== '') {
            newInit.headers = newInit.headers || {};
            newInit.headers[key] = rule.requestModifications.headers[key];
            modified = true;
          }
        });
      }

      if (rule.modifyRequest && rule.requestModifications.body) {
        try {
          newInit.body = rule.requestModifications.body;
          modified = true;
        } catch (e) {
          logger.error('修改请求体失败', e);
        }
      }

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

  // 简化的用户界面
  class SimpleUI {
    constructor() {
      this.init();
    }

    async init() {
      try {
        // 等待body元素存在
        await waitForElement('body');

        // 延迟一点时间确保页面稳定
        setTimeout(() => {
          this.createUI();
        }, 1000);
      } catch (e) {
        logger.error('UI初始化失败', e);
      }
    }

    createUI() {
      if (!document.body) {
        logger.error('document.body不存在，无法创建UI');
        return;
      }

      // 检查是否已经创建过UI元素
      if (document.getElementById('network-interceptor-btn')) {
        logger.info('UI元素已存在，跳过创建');
        return;
      }

      this.createButton();
      this.createPanel();
    }

    createButton() {
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
      }
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
      const enabledCheckbox = document.getElementById('interceptor-enabled');
      if (enabledCheckbox) {
        enabledCheckbox.addEventListener('change', (e) => {
          const config = configManager.getConfig();
          config.enabled = e.target.checked;
          configManager.saveConfig(config);
          logger.info('拦截器状态已更改', { enabled: config.enabled });
        });
      }

      // 添加规则按钮
      const addRuleBtn = document.getElementById('add-rule-btn');
      if (addRuleBtn) {
        addRuleBtn.addEventListener('click', () => {
          this.showSimpleRuleDialog();
        });
      }

      // 查看日志按钮
      const viewLogsBtn = document.getElementById('view-logs-btn');
      if (viewLogsBtn) {
        viewLogsBtn.addEventListener('click', () => {
          this.showSimpleLogsDialog();
        });
      }
    }

    togglePanel() {
      if (this.panel) {
        this.panel.style.display = this.panel.style.display === 'none' ? 'block' : 'none';
        if (this.panel.style.display === 'block') {
          this.loadConfig();
        }
      }
    }

    loadConfig() {
      const config = configManager.getConfig();
      const enabledCheckbox = document.getElementById('interceptor-enabled');
      if (enabledCheckbox) {
        enabledCheckbox.checked = config.enabled;
      }
      this.renderRules(config.interceptRules);
    }

    renderRules(rules) {
      const container = document.getElementById('rules-container');
      if (!container) return;

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
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <label style="display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" class="rule-enabled" data-rule-id="${rule.id}" ${rule.enabled ? 'checked' : ''}>
                            <strong>${rule.name}</strong>
                        </label>
                        <div>
                          <button class="edit-rule-btn" data-rule-id="${rule.id}" style="background: #ffc107; color: #333; border: none; border-radius: 3px; padding: 4px 8px; cursor: pointer; font-size: 12px; margin-right: 6px;">编辑</button>
                          <button class="delete-rule-btn" data-rule-id="${rule.id}" style="background: #dc3545; color: white; border: none; border-radius: 3px; padding: 4px 8px; cursor: pointer; font-size: 12px;">删除</button>
                        </div>
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

      container.querySelectorAll('.edit-rule-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const ruleId = e.target.dataset.ruleId;
          const config = configManager.getConfig();
          const rule = config.interceptRules.find(r => r.id === ruleId);
          if (rule) {
            this.showSimpleRuleDialog(rule);
          }
          e.stopPropagation();
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
          e.stopPropagation();
        });
      });
    }

    /**
     * 弹窗：添加或编辑规则
     * @param {Object} [editRule] 传入则为编辑，否则为新增
     */
    showSimpleRuleDialog(editRule) {
      // 如果已存在弹窗，先移除
      const old = document.getElementById('network-interceptor-rule-modal');
      if (old) old.remove();

      // 创建遮罩
      const mask = document.createElement('div');
      mask.id = 'network-interceptor-rule-modal';
      mask.style.cssText = `
        position: fixed; left: 0; top: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.3); z-index: 10010; display: flex; align-items: center; justify-content: center;
      `;

      // 创建弹窗
      const modal = document.createElement('div');
      modal.style.cssText = `
        background: #fff; border-radius: 8px; box-shadow: 0 2px 16px rgba(0,0,0,0.2);
        padding: 24px 20px 16px 20px; min-width: 340px; max-width: 90vw; position: relative;
      `;

      modal.innerHTML = `
        <div style="font-size:18px;font-weight:bold;margin-bottom:12px;">${editRule ? '编辑' : '添加'}拦截规则</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label>规则名称：<input id="rule-name" style="width:90%;" maxlength="50"></label>
          <label>URL模式(正则)：<input id="rule-url" style="width:90%;" value=".*"></label>
          <label>HTTP方法：
            <select id="rule-method" style="width:95px;">
              <option>ALL</option><option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option>
            </select>
          </label>
          <label>修改URL(可选)：<input id="rule-modify-url" style="width:90%;" placeholder="留空不修改"></label>
          <label>修改请求体(可选)：<textarea id="rule-modify-body" style="width:90%;" rows="2" placeholder="留空不修改"></textarea></label>
        </div>
        <div style="margin-top:18px;text-align:right;">
          <button id="rule-cancel" style="margin-right:12px;padding:6px 18px;">取消</button>
          <button id="rule-ok" style="background:#28a745;color:#fff;padding:6px 18px;border:none;border-radius:3px;cursor:pointer;">${editRule ? '保存' : '添加'}</button>
        </div>
        <button id="rule-close" style="position:absolute;right:10px;top:8px;background:none;border:none;font-size:18px;cursor:pointer;">×</button>
      `;

      mask.appendChild(modal);
      safeAppendChild(document.body, mask);

      // 回显数据
      if (editRule) {
        modal.querySelector('#rule-name').value = editRule.name || '';
        modal.querySelector('#rule-url').value = editRule.urlPattern || '';
        modal.querySelector('#rule-method').value = editRule.method || 'ALL';
        modal.querySelector('#rule-modify-url').value = (editRule.requestModifications && editRule.requestModifications.url) || '';
        modal.querySelector('#rule-modify-body').value = (editRule.requestModifications && editRule.requestModifications.body) || '';
      }

      // 关闭弹窗
      function closeModal() {
        safeRemoveChild(document.body, mask);
      }
      modal.querySelector('#rule-close').onclick = closeModal;
      modal.querySelector('#rule-cancel').onclick = closeModal;
      mask.onclick = e => { if (e.target === mask) closeModal(); };

      // 添加/保存规则
      modal.querySelector('#rule-ok').onclick = () => {
        const name = modal.querySelector('#rule-name').value.trim();
        const urlPattern = modal.querySelector('#rule-url').value.trim();
        const method = modal.querySelector('#rule-method').value.trim().toUpperCase();
        const modifyUrl = modal.querySelector('#rule-modify-url').value.trim();
        const modifyBody = modal.querySelector('#rule-modify-body').value.trim();

        if (!name) { alert('规则名称不能为空'); return; }
        if (!urlPattern) { alert('URL模式不能为空'); return; }

        const rule = {
          name,
          enabled: true,
          urlPattern,
          method,
          modifyRequest: true,
          modifyResponse: false,
          requestModifications: {
            headers: {},
            body: modifyBody || null,
            url: modifyUrl || null
          },
          responseModifications: {
            headers: {},
            body: null
          }
        };

        if (editRule) {
          // 保留原id和enabled状态
          rule.id = editRule.id;
          rule.enabled = editRule.enabled;
          if (configManager.updateRule(editRule.id, rule)) {
            this.loadConfig();
            logger.info('规则已更新', rule);
            alert('规则已保存！');
            closeModal();
          } else {
            alert('保存规则失败');
          }
        } else {
          if (configManager.addRule(rule)) {
            this.loadConfig();
            logger.info('新规则已添加', rule);
            alert('规则添加成功！');
            closeModal();
          } else {
            alert('添加规则失败');
          }
        }
      };
    }

    showSimpleLogsDialog() {
      const logs = logger.logs;
      const logsText = logs.slice(0, 20).map(log =>
        `[${log.timestamp}] [${log.level.toUpperCase()}] ${log.message}`
      ).join('\n');

      if (logsText) {
        alert('最近的日志记录:\n\n' + logsText);
      } else {
        alert('暂无日志记录');
      }
    }
  }

  // 初始化
  function init() {
    logger.info('网络请求拦截器启动');

    // 立即初始化请求拦截器
    new RequestInterceptor();

    // 延迟初始化UI，确保DOM完全加载
    setTimeout(() => {
      new SimpleUI();
    }, 2000);
  }

  // 启动
  init();

})();

