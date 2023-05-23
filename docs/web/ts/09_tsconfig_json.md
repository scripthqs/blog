# tsconfig.json

- 当目录中出现了 tsconfig.json 文件，则说明该目录是 TypeScript 项目的根目录
- tsconfig.json 文件指定了编译项目所需的根目录下的文件以及编译选项

两个作用：

1. 知道如何去编译 TypeScript 代码和进行类型检测

   - 是否允许不明确的 this 选项，是否允许隐式的 any 类型
   - 将 TypeScript 代码编译成什么版本的 JavaScript 代码

2. 让编辑器（比如 VSCode）可以按照正确的方式识别 TypeScript 代码
   - 对于哪些语法进行提示、类型错误检测等等

JavaScript 项目可以使用 jsconfig.json 文件，它的作用与 tsconfig.json 基本相同，只是默认启用了一些 JavaScript 相关的编译选项。

## 自动编译

自动编译文件

- 编译文件时，使用 -w 指令后，TS 编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。

```bash
tsc xxx.ts -w
```

自动编译整个项目

- 如果直接使用 tsc 指令，则可以自动将当前项目下的所有 ts 文件编译为 js 文件。
- 但是能直接使用 tsc 命令的前提是，要先在项目根目录下创建一个 ts 的配置文件 tsconfig.json
- tsconfig.json 是一个 JSON 文件，添加配置文件后，只需 tsc 命令即可完成对整个项目的编译

## 配置选项

新建 tsconfig.json 文件，tsconfig.json 是 ts 编译器的配置文件，ts 编译器可以根据它的信息来对代码进行编译。
里面包括的选项非常多，比较重要和常见的配置如下

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "commonjs",

    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "skipLibCheck": true,
    // jsx的处理方法
    "jsx": "preserve",
    //路径映射，类似webpack的alias别名
    "path": {
      "@/*": ["src/*"]
    }
  },
  "files": [],
  "include": ["./src/**/*.ts", "./types/*.d.ts"],
  "exclude": ["node_modules"]
}
```

### include

"include" 用来指定哪些 ts 文件需要被编译

- `/**`表示任意目录
- `/*` 表示任意文件

```json
// 所有src目录和tests目录下的文件都会被编译
"include": [
  "./src/**/*",
  "tests/**/*"
],
```

### exclude

"exclude" 不需要被编译的文件目录

- 默认值：["node_modules", "bower_components", "jspm_packages"]

```json
// src下hello目录下的文件都不会被编译
"exclude": ["./src/hello/**/*"]
```

### extends

定义被继承的配置文件

```json
// 当前配置文件中会自动包含config目录下base.json中的所有配置信息
"extends": "./configs/base"
```

### files

指定被编译文件的列表，只有需要编译的文件少时才会用到

```json
// 列表中的文件都会被TS编译器所编译
"files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
```

### compilerOptions

编译选项是配置文件中非常重要也比较复杂的配置选项

- 在 compilerOptions 中**包含多个子选项**，用来完成对编译的配置

#### target

设置 ts 代码编译的目标版本

- 可选值：ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext

```json
// 编写的ts代码将会被编译为ES6版本的js代码
"compilerOptions": {
    "target": "ES6"
}
```

#### lib

指定代码运行时所包含的库（宿主环境），在前端开发时一般不用动

- 可选值：ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

```json
"compilerOptions": {
    "target": "ES6",
    "lib": ["ES6", "DOM"],
}
```

#### module

设置编译后代码使用的模块化系统

- 可选值：CommonJS、UMD、AMD、System、ES2020、ESNext、None

```json
"compilerOptions": {
    "module": "CommonJS"
}
```

#### outDir

编译后文件的所在目录

- 默认情况下，编译后的 js 文件会和 ts 文件位于相同的目录，设置 outDir 后可以改变编译后文件的位置

```json
// 设置后编译后的js文件将会生成到dist目录
"compilerOptions": {
    "outDir": "dist"
}
```

#### outFile

将所有的文件编译为一个 js 文件

- 默认会将所有的编写在全局作用域中的代码合并为一个 js 文件，如果 module 制定了 None、System 或 AMD 则会将模块一起合并到文件之中

```json
"compilerOptions": {
    "outFile": "dist/app.js"
}
```

#### rootDir

指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过 rootDir 可以手动指定根目录

```json
"compilerOptions": {
    "rootDir": "./src"
}
```

#### allowJs

是否对 js 文件编译

```json
"compilerOptions": {
    "allowJs": true,
    "checkJs": true
}
```

#### checkJs

是否对 js 文件进行检查

```json
"compilerOptions": {
    "allowJs": true,
    "checkJs": true
}
```

#### removeComments

是否删除注释，默认值：false

```json
"compilerOptions": {
  removeComments:false
}
```

#### noEmit

不对代码进行编译，默认值：false

#### sourceMap

是否生成 sourceMap，默认值：false

#### 严格检查

- strict
  - 启用所有的严格检查，默认值为 true，设置后相当于开启了所有的严格检查
- alwaysStrict
  - 总是以严格模式对代码进行编译
- noImplicitAny
  - 禁止隐式的 any 类型
- noImplicitThis
  - 禁止类型不明确的 this
- strictBindCallApply
  - 严格检查 bind、call 和 apply 的参数列表
- strictFunctionTypes
  - 严格检查函数的类型
- strictNullChecks
  - 严格的空值检查
- strictPropertyInitialization
  - 严格检查属性是否初始化

#### 额外检查

- noFallthroughCasesInSwitch
  - 检查 switch 语句包含正确的 break
- noImplicitReturns
  - 检查函数没有隐式的返回值
- noUnusedLocals
  - 检查未使用的局部变量
- noUnusedParameters
  - 检查未使用的参数

#### allowUnreachableCode

检查不可达代码

- 可选值：
  - true，忽略不可达代码
  - false，不可达代码将引起错误

#### noEmitOnError

有错误的情况下不进行编译，默认值：false
