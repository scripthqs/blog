//侧边栏

import fs from "fs";
import path from "path";
export function getChildren(path, sort = true) {
  let root = [];
  readDirSync(path, root);
  //排序
  if (sort) {
    let sortList = [];
    let nosortList = [];
    root.forEach((item) => {
      if (Number(item.replace(".md", "").match(/[^-]*$/))) {
        sortList.push(item);
      } else {
        nosortList.push(item);
      }
    });
    root = sortList
      .sort(function (a, b) {
        return a.replace(".md", "").match(/[^-]*$/) - b.replace(".md", "").match(/[^-]*$/);
      })
      .concat(nosortList);
  }


  return root;
}
function readDirSync(path, root) {
  var pa = fs.readdirSync(path);
  pa.forEach(function (ele, index) {
    var info = fs.statSync(path + "/" + ele);
    if (info.isDirectory()) {
      readDirSync(path + ele, root);
    } else {
      if (checkFileType(ele)) {
        root.push(prefixPath(path, ele));
      }
    }
  });
}
function checkFileType(path) {
  return path.includes(".md");
}
function prefixPath(basePath, dirPath) {
  let index = basePath.indexOf("/");
  // 去除一级目录地址
  basePath = basePath.slice(index, path.length);
  // replace用于处理windows电脑的路径用\表示的问题
  return path.join(basePath, dirPath).replace(/\\/g, "/");
}
// module.exports = { getChildren: getChildren };
