// ==UserScript==
// @name         接口记录
// @namespace    http://tampermonkey.net/
// @version      2025-07-18
// @description  try to take over the world!
// @author       You
// @include      *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=82.22
// @connect      *
// @grant        GM_xmlhttpRequest
// @run-at       context-menu
// ==/UserScript==

(function () {
  'use strict';
  // 记录
  let list = []
  //拦截请求
  const open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    // 保存原始send方法
    const originalSend = this.send;
    const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
    // 存储请求头的Map
    XMLHttpRequest.prototype._requestHeaders = new Map();
    let headerObj = {}
    // 重写setRequestHeader方法，捕获所有设置的请求头
    XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
      headerObj[header] = value
      this._requestHeaders.set(header, value);
      return originalSetRequestHeader.apply(this, arguments);
    };
    // 重写send方法，在发送前修改参数
    this.send = function (data) {
      // 解析URL参数
      const urlObj = new URL(url, window.location.href);
      let row = {
        createTime: new Date(),
        method,
        url,
        data,
        href: urlObj.href,
        header: { ...headerObj }
      }

      //排除部分接口
      if (url.indexOf('getCurrentUser') == -1 && url.indexOf('getRouters') == -1) {
        list.push(row)
        addData(row)
      }


      // 调用原始send方法
      originalSend.call(this, data);
    };

    // 调用原始open方法
    return open.call(this, method, url, async, user, password);
  };

  // 创建列表
  function createList() {
    // 创建列表容器
    const listContainer = document.createElement('div');
    listContainer.style.position = 'fixed';
    listContainer.style.top = '20px';
    listContainer.style.right = '20px';
    listContainer.style.width = '800px';
    listContainer.style.border = '1px solid #ccc';
    listContainer.style.backgroundColor = '#fff';
    listContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    listContainer.style.zIndex = '10000';
    listContainer.style.fontFamily = 'Arial, sans-serif';
    listContainer.style.overflow = 'hidden';

    // 创建标题栏
    const titleBar = document.createElement('div');
    titleBar.style.display = 'flex';
    titleBar.style.alignItems = 'center';
    titleBar.style.justifyContent = 'space-between';
    titleBar.style.padding = '8px 12px';
    titleBar.style.backgroundColor = '#f0f0f0';
    titleBar.style.cursor = 'pointer';
    titleBar.style.userSelect = 'none';

    // 标题文本
    const titleText = document.createElement('span');
    titleText.textContent = '接口记录';
    titleText.style.fontWeight = 'bold';

    // 展开/收起按钮
    const toggleBtn = document.createElement('span');
    toggleBtn.textContent = '收起';

    titleBar.appendChild(titleText);
    titleBar.appendChild(toggleBtn);

    // 创建内容容器
    const contentContainer = document.createElement('div');
    contentContainer.style.maxHeight = '300px';
    contentContainer.style.overflowY = 'auto';

    // 创建表格元素
    const tableElement = document.createElement('table');
    tableElement.style.width = '100%';
    tableElement.style.borderCollapse = 'collapse';

    // 创建表头
    const tableHeader = document.createElement('thead');
    tableHeader.style.backgroundColor = '#f0f0f0';
    tableHeader.style.position = 'sticky';
    tableHeader.style.top = '0';
    tableHeader.style.zIndex = '1001';

    const headerRow = document.createElement('tr');
    const headers = ['Method', 'URL', 'Create Time', 'Data', 'Opt'];
    const widths = ['10%', '30%', '25%', '30%', '5%'];

    headers.forEach((header, index) => {
      const th = document.createElement('th');
      th.textContent = header;
      th.style.padding = '8px 12px';
      th.style.borderBottom = '2px solid #ddd';
      th.style.textAlign = 'left';
      th.style.width = widths[index];
      headerRow.appendChild(th);
    });

    tableHeader.appendChild(headerRow);
    tableElement.appendChild(tableHeader);

    // 创建表格主体
    const tableBody = document.createElement('tbody');
    tableBody.id = 'apiTableBody'


    tableElement.appendChild(tableBody);
    contentContainer.appendChild(tableElement);

    // 将所有元素添加到容器
    listContainer.appendChild(titleBar);
    listContainer.appendChild(contentContainer);

    // 添加展开/收起功能
    let isExpanded = true;
    titleBar.addEventListener('click', () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        contentContainer.style.display = 'block';
        toggleBtn.textContent = '收起';
        listContainer.style.width = '800px';
        titleText.style.display = 'block'
      } else {
        contentContainer.style.display = 'none';
        titleText.style.display = 'none'
        listContainer.style.width = '60px';
        toggleBtn.textContent = '展开';
      }
    });

    // 将容器添加到页面
    document.body.appendChild(listContainer);
  }
  function addData(row) {
    // 添加示例数据行
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid #eee';
    tr.style.transition = 'background-color 0.2s';

    // 添加鼠标悬停效果
    tr.addEventListener('mouseover', () => {
      tr.style.backgroundColor = '#f5f5f5';
    });

    tr.addEventListener('mouseout', () => {
      tr.style.backgroundColor = 'transparent';
    });

    // Method 单元格
    const tdMethod = document.createElement('td');
    tdMethod.textContent = row.method;
    tdMethod.style.padding = '8px 12px';
    tr.appendChild(tdMethod);

    // URL 单元格
    const tdUrl = document.createElement('td');
    tdUrl.textContent = row.url;
    tdUrl.style.padding = '8px 12px';
    tdUrl.style.wordBreak = 'break-all';
    tr.appendChild(tdUrl);

    // Create Time 单元格
    const tdTime = document.createElement('td');
    const now = new Date().getTime() + 8 * 60 * 60 * 1000;
    tdTime.textContent = new Date(now).toISOString().replace('T', ' ').substring(0, 19);
    tdTime.style.padding = '8px 12px';
    tr.appendChild(tdTime);
    var textarea = null
    // Data 单元格
    if (row.data) {
      const tdData = document.createElement('td');
      tdData.style.padding = '4px 8px';

      textarea = document.createElement('textarea');
      textarea.value = row.data;
      textarea.style.width = '100%';
      textarea.style.minHeight = '60px';
      textarea.style.resize = 'vertical';
      textarea.style.border = '1px solid #ddd';
      textarea.style.borderRadius = '3px';
      textarea.style.padding = '6px';
      textarea.style.fontFamily = 'Arial, sans-serif';
      textarea.style.fontSize = '14px';

      // 添加焦点和失焦效果
      textarea.addEventListener('focus', () => {
        textarea.style.borderColor = '#66afe9';
        textarea.style.boxShadow = 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)';
      });

      textarea.addEventListener('blur', () => {
        textarea.style.borderColor = '#ddd';
        textarea.style.boxShadow = 'none';
      });

      tdData.appendChild(textarea);
      tr.appendChild(tdData);
    } else {
      const tdData = document.createElement('td');
      tr.appendChild(tdData);
    }
    // 重新发送操作
    const tdAction = document.createElement('td');
    tdAction.style.padding = '8px 12px';
    tdAction.style.textAlign = 'center';

    const actionBtn = document.createElement('button');
    actionBtn.textContent = '重播';
    actionBtn.style.padding = '6px 12px';
    actionBtn.style.backgroundColor = '#4CAF50';
    actionBtn.style.color = 'white';
    actionBtn.style.border = 'none';
    actionBtn.style.borderRadius = '3px';
    actionBtn.style.cursor = 'pointer';
    actionBtn.style.fontSize = '14px';
    actionBtn.style.transition = 'background-color 0.2s';

    // 添加鼠标悬停效果
    actionBtn.addEventListener('mouseover', () => {
      actionBtn.style.backgroundColor = '#45a049';
    });

    actionBtn.addEventListener('mouseout', () => {
      actionBtn.style.backgroundColor = '#4CAF50';
    });

    // 绑定点击事件
    actionBtn.addEventListener('click', function () {

      // 获取当前行的数据
      const method = tdMethod.textContent;
      const url = row.href;
      const header = row.header;
      const createTime = tdTime.textContent;
      const data = textarea ? textarea.value : '';

      //重新发送
      reSend(method, url, createTime, data, header)
    });

    tdAction.appendChild(actionBtn);
    tr.appendChild(tdAction);

    document.getElementById('apiTableBody').appendChild(tr);
  }
  //重新发送请求
  function reSend(method, url, createTime, data, header) {
    // 打印数据（实际应用中可以替换为其他操作）
    console.log('点击了操作按钮：');
    console.log('Method:', method);
    console.log('URL:', url);
    console.log('Create Time:', createTime);
    console.log('Data:', data);
    if (method == 'GET') {
      GM_xmlhttpRequest({
        method: 'GET',
        url: url,
        headers: header,
        onload: function (res) {
          alert('成功：' + res.responseText)
        },
        onerror: function (res) { alert("错误码:", res.status) }
      });
    } else if (method == 'POST') {
      GM_xmlhttpRequest({
        method: "POST",
        url: url,
        headers: header,
        data: data,
        onload: function (res) {
          alert('成功：' + res.responseText)
        },
        onerror: function (res) { alert("错误码:", res.status) }
      });
    }
  }
  createList()
  // Your code here...
})();
