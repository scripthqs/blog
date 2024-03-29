# 表单标签

在 HTML 中，一个完整的表单通常由**表单域**、**表单控件**、**提示信息**三个部分组成

## 表单域

表单域是一个包含表单元素的区域，用`<form>`标签定义表单域。

`form`表单标签让用户填写和选择，收集用户信息，用于服务器交换。属性：

- `name/id`：表单的名称，用于 js 来操作或控制表单时使用。name 可以重复，id 是唯一的。
- `action`：指定表单数据的处理程序，一般是 PHP，如：`action="login.php"`这个属性将表示，表单将提交到哪里。
- `method`：表单数据的提交方式，一般取值：get(默认)和 post，这个属性表示用什么 http 方法提交，有 get 和 post 两种。
- `Enctype`：表单数据的编码方式（加密），Enctype 只能在 POST 方式下使用。取值可以是：
  - Application/x-www-form-urlencoded：默认加密方式，除了上传文件之外的数据都可以
  - Multipart/form-data：上传附件时，必须使用这种编码方式。
  - text/plain： 窗体数据以纯文本形式进行编码，其中不含任何控件或格式字符。空格转换为 "+" 加号，但不对特殊字符编码

get 提交和 post 提交的区别：

- get 方式将表单的数据，以`name=value`的形式追加到 action 后面指定的处理程序后面，两者间使用`？`隔开，每个表单的`name=value`间使用`&`隔开。
- get 的特点：只适合提交少量信息，并且不太安全，不要提交敏感信息，提交的数据类型仅限于 ASCII 字符。
- post 方式将表单数据直接发送（隐藏）到 action 后面的指定的处理程序，post 发送的数据不可见。
- post 的特点：可以提交海量信息，相对更加安全，提交的数据格式多样（word、excel、rar、img）

## 表单控件

### input 输入表单元素

`input`输入标签（文本框），用于接收用户输入。

- `<input type="text" />`

属性值:

- `type`：文本类型，属性值可以是：
  - text：文本。
  - password：密码。
  - radio：单选按钮，名字相同的按钮作为一组进行单选，像收音机，按下去一个按钮，其他的就抬起来了，所以叫做 radio。
  - checkbox：多选按钮，name 属性值相同的按钮作为一组进行选择。
  - hidden：隐藏框，在表单中包含不希望用户看见的信息。
  - button：普通按钮，结合 js 代码进行使用。
  - submit：提交按钮，传送当前表单的数据给服务器或其他程序处理。这个按钮不需要写 value 自动就会有“提交”文字。这个按钮真的有提交功能。点击按钮后，这个表单就会被提交到 form 标签的 action 属性中指定的那个页面中去。
  - reset：重置按钮，清空当前表单的内容，并设置为最初的默认值.
  - image：图片按钮，和提交按钮的功能完全一致，只不过图片按钮可以显示图片。
  - file：文件选择框。 提示：如果要限制上传文件的类型，需要配合 JS 来实现验证。对上传文件的安全检查：一是扩展名的检查，二是文件数据内容的检查。
- `name`：定义 input 元素的名称，单选框和复选框要有相同的 name 值
- `value="内容"`：文本框里的默认内容（已经被填好了的）.
- `readonly`：文本框只读，不能编辑。属性值可以不写。
- `disabled`：文本框只读，不能编辑，光标点不进去。属性值可以不写。
- `checked`：属性值也是 checked，规定此 input 元素首次加载也能够当被选中，主要针对单选框和复选框。
- `maxlength`：属性值是正整数，规定输入字段的最大字符数

### `<input>和<label>`

`<label>` 标签为 input 元素定义标注。

将一个 `<label>` 和一个 `<input>` 元素匹配在一起，你需要给 `<input>` 一个 `id` 属性。而 `<label>` 需要一个 `for` 属性，其值和 `<input>` 的 `id` 一样

```html
<div class="preference">
  <label for="cheese">Do you like cheese?</label>
  <input type="checkbox" name="cheese" id="cheese" />
</div>
```

你也可以将 `<input>` 直接放在 `<label>` 里，此时则不需要 `for` 和 `id` 属性，因为关联已隐含存在：

```html
<label
  >Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

**目的：扩大了元素的可点击区域，让包括使用触屏设备在内的用户更容易激活这个元素。**

### select 下拉表单元素

可以使用`<select>`标签控件定义下拉列表

```js
<form>
  <select>
    <option>选项1</option>
    <option>选项2</option>
    <option>选项3</option>
    ...
  </select>
</form>
```

- 在 select 中至少包含一对 option
- 在 option 中定义 selected= “selected"时，当前项即为默认选中项

### textarea 文本域元素

当用户输入内容较多的情况下，我们就不能使用文本框表单，此时我们可以使用`<textarea>`标签

在表单元素中，`<textarea>`是定义多行文本输入的控件，留言板，评论等

```js
<form>
  <textarea>请输入内容</textarea>
</form>
```

属性：

- cols="每行中的字符数"
- rows="显示的行数"

但是**我们在实际开发中不会使用，都是用 css 来改变大小**
