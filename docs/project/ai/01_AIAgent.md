# AI Agent

1. AI 调用的所有“工具”（跳转、弹窗、填表、绘图）全是前端定义的函数。所以前端必然会去写Agent 逻辑，只有前端端能拿到浏览器的 DOM 或 Router 状态，实现“所言即所得”的闭环
2. 交互范式的革命：用户适应系统会变成页面适应意图
3. “前端”定义被扩充：一半时用 Vue/React 写基础组件，但是这些活儿 ai可以干了大半，另一半时间编写 Tools 描述、调试 Prompt、处理 Agent 逻辑流、优化 Token 成本

关键词

- AI Engineer Roadmap (AI 工程师路线图)
- Generative UI (生成式 UI)
- Vercel AI SDK Tutorial
- LLM App Development with JavaScript

## Vercel AI SDK

- 流式传输（Streaming）：实现打字机效果
- 多框架支持：完美适配 Vue3、React
- 统一接口：无论什么大模型，都是一样的写法
- 重点：streamText 函数、onFinish 回调、以及如何处理 Tool Calls

## Zod

- AI 的输出是不可预测的字符串
- Function Calling 需要极其精确的参数
- 用 Zod 定义一个 Schema（比如：姓名必须是字符串，年龄必须是数字），Vercel AI SDK 会把这个 Schema 喂给 AI。AI 就会被“强迫”输出符合这个结构的 JSON
- 重点：如何定义 z.object() 并在 AI 调用中作为 parameters 传入

## LangChain.js

- 记忆力管理：对话太长了，它帮你自动总结旧内容，腾出空间给新内容。
- 多步链路（Chains）：先查数据 -> 再写代码 -> 最后绘图。这种复杂的“串联”逻辑，它写起来最快。
- 重点：BufferMemory（记忆管理）、RunnableSequence（链式调用）。
