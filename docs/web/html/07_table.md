# 表格标签

`<table>`表示表格标签，一个表格`<table>`是由每行`<tr>`组成的，每行是由每个单元格`<td>`组成的，而不是行和列组成的。如果是第一行，可以用`<th>`代替`<td>`

## 表格属性

`<table>`标签的属性：

- border：边框，单位为像素。属性值`1`或`""`
- `style="border-collapse:collapse;"`：单元格的线和表格的边框线合并。（表格的两边框合并为一条）
- `width、height`:宽度、高度，单位像素。
- `border-color`：表格的边框颜色。
- `align`：表格的水平对齐方式。left right center

`<tr>`标签的属性：

- `align="center"`：一行的内容水平居中显示，取值：left、center、right
- `valign="center"`：一行的内容垂直居中，取值：top、middle、bottom

`<td>`标签的属性：

- `align="center"`：单元格水平居中显示，取值：left、center、right
- `valign="center"`：单元格内容垂直居中，取值：top、middle、bottom

```html
<table border="1">
  <tr>
    <th>第一行</th>
  </tr>
  <tr>
    <td>第一列</td>
  </tr>
</table>
```

说明：**最后都会使用 css 来解决居中问题，了解一下即可。**

## 表格结构标签

表格的`<thead>`标签、`<tbody>`标签、`<tfoot>`标签，看名字就知道大概什么意思了。

1. `<thead>`：用于定义表格的头部，`<thead>`内部必须有`<tr>`标签。一般位于第一行
2. `<tbody>`:用于定义表格的主体，主要用于放数据结构
3. `<tfoot>`：表格的结尾

三者顺序错误并不会影响表格的结构。

**以上的标签都需要放在`<table>`中**

```html
<table border="1">
  <thead>
    <tr>
      <th>序号</th>
      <th>合计</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <th>100￥</th>
    </tr>
    <tr>
      <th>2</th>
      <th>50￥</th>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>合计</th>
      <th>150￥</th>
    </tr>
  </tfoot>
</table>
```

表格布局的原理：可以通过`display:table-cell`设置父元素，然后利用`vertical-align:middle`让子元素水平居中。不过这种方式已经过时。

## 单元格的合并

合并写在`td`或者`th`上

- `colspan`：横向合并。例如`colspan="2"`表示当前单元格在水平方向上要占据两个单元格的位置。
- `rowspan`：纵向合并。例如`rowspan="2"`表示当前单元格在垂直方向上要占据两个单元格的位置。

合并后需要删除多余的单元格（td）
