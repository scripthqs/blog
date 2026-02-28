# AI Agent

1. AI 调用的所有“工具”（跳转、弹窗、填表、绘图）全是前端定义的函数。所以前端必然会去写Agent 逻辑，只有前端端能拿到浏览器的 DOM 或 Router 状态，实现“所言即所得”的闭环
2. 交互范式的革命：用户适应系统会变成页面适应意图
3. “前端”定义被扩充：一半时用 Vue/React 写基础组件，但是这些活儿 ai可以干了大半，另一半时间编写 Tools 描述、调试 Prompt、处理 Agent 逻辑流、优化 Token 成本

关键词

- AI Engineer Roadmap (AI 工程师路线图)
- Generative UI (生成式 UI)
- Vercel AI SDK Tutorial
- LLM App Development with JavaScript

## 核心概念

### Vercel AI SDK

- 流式传输（Streaming）：实现打字机效果
- 多框架支持：完美适配 Vue3、React
- 统一接口：无论什么大模型，都是一样的写法
- 重点：streamText 函数、onFinish 回调、以及如何处理 Tool Calls

### Zod

- AI 的输出是不可预测的字符串
- Function Calling 需要极其精确的参数
- 用 Zod 定义一个 Schema（比如：姓名必须是字符串，年龄必须是数字），Vercel AI SDK 会把这个 Schema 喂给 AI。AI 就会被“强迫”输出符合这个结构的 JSON
- 重点：如何定义 z.object() 并在 AI 调用中作为 parameters 传入

### LangChain.js

- 记忆力管理：对话太长了，它帮你自动总结旧内容，腾出空间给新内容。
- 多步链路（Chains）：先查数据 -> 再写代码 -> 最后绘图。这种复杂的“串联”逻辑，它写起来最快。
- 重点：BufferMemory（记忆管理）、RunnableSequence（链式调用）。

## 学习

模型有“上下文窗口限制”和“幻觉”这两个特性

向量数据库：把你的文档（如公司规章）变成一串数字（向量），存进特殊数据库，方便 AI 检索。

RAG（检索增强生成）：先去数据库搜资料，再喂给 AI 回答

提示词工程：通过写技巧（如“你是一个专家”、“一步步思考”）让 AI 变聪明，减少AI乱说话

函数调用 (Function Calling / Tool Use)：让 AI 操作你的代码（跳转、查数据库、发邮件）

### 从"调接口"到"调工具"

放弃fetch ，使用ai zod

### 实现"生成式UI"

不止让AI返回文字，让AI返回组件

- 学习如何根据 AI 返回的 toolCall 结果，在前端动态渲染不同的 Vue 组件。

### 本地知识库(RAG)

让 AI 读懂你的项目文档。

- 学习使用 Orama（一个纯 JS 的前端搜索引擎库）做简单的向量检索。

### LangChain理念

- Model I/O (模型输入输出)：怎么写好 Prompt，怎么把 AI 返回的乱七八糟的字符串变成你想要的 JSON。
- Retrieval (检索)：就是 RAG。知道怎么去数据库里翻资料喂给 AI
- Agents (智能体)：就是你已经跑通的 Function Calling
- Chains (链)：就是“套娃”。第一步的结果给第二步，第二步给第三步

### 优先级

- Prompt Engineering（提示词工程）：学会 Few-shot（给示例）和结构化输出。
- Vercel AI SDK（实战利器）:处理流式输出和工具调用，这比 LangChain 快得多，代码量少 70%。
- 向量数据库基础（数据感知）:理解 Embedding（嵌入）是怎么回事
- LangChain: 业务逻辑极其复杂（比如有几十个 Agent 互相打架），现有的简单库 Hold 不住了，再去翻 LangChain 的文档找灵感
