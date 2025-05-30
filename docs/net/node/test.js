const fs = require("fs");
const path = require("path");

const mdFile = fs.readFileSync(path.join(__dirname, '01_node.md'), 'utf8');
console.log(mdFile);

fs.writeFileSync(path.join(__dirname, '01_node_copy.html'), mdFile, 'utf8');