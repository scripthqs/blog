# 颜色单位

## 英文单词

在 css 中，可以直接使用颜色名来设置各种颜色。

- red，orange，yellow，blue，green，black

## RGB 值

### RGB 的写法

RGB 通过三种颜色的不同浓度来调配出不同的颜色。

- R：red（红色）
- G：green（绿色）
- B：blue（蓝色）

每个颜色在 0~255（0%-100%）之间

语法：

```css
background-color: rgb(0, 0, 0); /*黑色*/
background-color: rgb(255, 255, 255); /*白色*/
```

原理是光的三原色，000 黑色，255 表示白光

### RGBA 值

在 RGB 的基础上增加一个 A 不透明度，需要 4 个值

前三个一样，第四个值表示不透明度

- 1 表示完全不透明
- 0 表示完全透明
- 0.5 表示半透明

```css
background-color: rgba(255, 0, 0, 0.5);
```

## 十六进制

语法：#红色绿色蓝色，颜色浓度通过 00~ff 表示

- #ff0000 红色

如果颜色两位两位的重复可以进行简写

```css
background-color: #000; /*黑色*/
background-color: #fff; /*白色*/
```

## HSL 值

### HSL 的写法

- H：色相（0 - 360）0 或 360 表示红色、120 表示绿色、240 表示蓝色。
- S：饱和度，颜色浓度（0% - 100%）0 表示灰色，值越大，越鲜艳。
- L：亮度，颜色的亮度（0% - 100%）0 表示黑色

```css
background-color: hsl(0, 100%, 100%); /*红色*/
background-color: hsl(0, 100%, 0%); /*黑色*/
```

### HSLA 值

增加一个 A 不透明度

- 1 表示完全不透明
- 0 表示完全透明

```css
background-color: hsla(240, 50%, 50%, 0.4);
```
