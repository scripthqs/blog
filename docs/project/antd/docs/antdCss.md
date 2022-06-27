# 自定义 antd 样式

```scss
/*  在vue文件中使用这种方法引入（分号不能省略）分号不能省略*/

/* @import '~@/assets/css/hqs-user.scss';  */
// 定位
.top-fixed {
  position: fixed;
  top: 124px;
  right: 20px;
}

/* 按钮相关 */
.center {
  text-align: center;
}
.ml {
  margin-left: 10px;
}
.mr {
  margin-right: 10px;
}
.mt {
  margin-top: 50px;
}
//蓝色按钮140px// type="primary"
.user-btn1 {
  width: 140px;
  height: 40px;
  background: #6671fa;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  color: #ffffff;
  opacity: 1;
}
.disabled-btn {
  width: 140px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  opacity: 1;
}
//白色按钮140px
.user-btn2 {
  width: 140px;
  height: 40px;
  border: 1px solid #6671fa;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  color: #6671fa;
  opacity: 1;
}
//蓝色按钮90px type="primary"
.submit-btn {
  width: 90px;
  height: 40px;
  background: #6671fa;
  opacity: 1;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  color: #ffffff;
  opacity: 1;
}
//白色按钮90px
.reset-btn {
  width: 90px;
  height: 40px;
  border: 1px solid #6671fa;
  opacity: 1;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  color: #6671fa;
  opacity: 1;
}
//蓝色按钮50px type="primary"
.edit-btn { 
  // width: 50px;
  // height: 26px;
  background: #6671fa;
  opacity: 1;
  border-radius: 5px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #ffffff;
}
//白色按钮50px
.del-btn {
  // width: 50px;
  // height: 26px;
  border: 1px solid #6671fa;
  opacity: 1;
  border-radius: 5px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #6671fa;
}

/* 搜索栏相关 */

:deep(.search-form .ant-form-item-label label) {
  height: 44px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #263948;
  opacity: 1;
}
:deep(.search-form .ant-form-item-control-input) {
  height: 44px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #263948;
  opacity: 1;
}

:deep(.search-form .ant-form-item .ant-input) {
  height: 44px;
  background: #ffffff;
  // border: 1px solid #e5e5ea;
  opacity: 1;
  border-radius: 4px;
}

:deep(.search-form .ant-form-item .ant-picker) {
  width: 200px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e5e5ea;
  opacity: 1;
  border-radius: 4px;
}

:deep(.search-form .ant-form-item .ant-select-selector) {
  width: 200px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e5e5ea;
  opacity: 1;
  border-radius: 4px;
}

:deep(.search-form .ant-form-item .ant-select-selection-placeholder) {
  line-height: 44px;
}

:deep(.search-form .ant-form-item .ant-select-selection-item) {
  line-height: 44px;
}

/* 表格相关 */

:global(.user-table .ant-table-thead > tr > th) {
  /* width: 1500px; */
  height: 50px;
  background: #f7f7f7;
  opacity: 1;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  color: #263238;
}

:global(.user-table .ant-table-container) {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 23px;
  color: #5a686f;
  opacity: 1;
}

/* 弹窗相关 */

.user-modal {
  :deep(.ant-modal-header) {
    height: 60px;
    border-radius: 10px;
  }
  :deep(.ant-modal-title) {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #263948;
    opacity: 1;
  }
  :deep(.ant-modal-content) {
    border-radius: 10px;
  }
}
/* tabs切换栏相关 */

:deep(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #6671fa;
}
:deep(.ant-tabs-tab-btn) {
  // width: 160px;
  height: 28px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 600;
  opacity: 1;
}
.tab-tip {
  position: absolute;
  top: 10px;
  right: -10px;
  background-color: #d00;
  color: #fff;
  font-size: 12px;
  height: 15px;
  border-radius: 7px;
  padding: 0 2px;
  line-height: 16px;
  text-align: center;
}

```
