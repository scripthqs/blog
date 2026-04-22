# ai agent

智能体架构设计开发

- 规划（Planning）能力构建：设计任务拆解逻辑，将复杂目标拆解成可执行的子任务
- 记忆（Memory）管理：开发短期记忆（如对话上下文）和长期记忆系统（利用向量数据库如 Pinecone/Milvus 或知识图谱），确保 Agent 在长周期任务中不“断片”
- 多智能体协作（Multi-Agent Orchestration）：设计多个 Agent 之间的通信协议和协作流（例如：一个负责检索，一个负责编写，一个负责审核）

工具集成与外部连接

- API 扩展（Tool Use）：编写代码将 LLM 连接到现实世界，使 Agent 能够调用天气接口、操作 Excel、访问公司数据库或执行 Python 脚本
- RAG 管道构建：开发检索增强生成（RAG）流程，将企业内部文档或实时互联网信息喂给 Agent，确保其回答有据可查

模型调优与提示工程

- 高级提示词工程（Prompt Engineering）：设计复杂的系统提示词（System Prompts），通过 CoT（思维链）或 ReAct 等框架引导 Agent 的推理行为。
- 微调与评估：在特定领域（如医疗或金融）对模型进行微调，并建立评估框架（Evals）来测试 Agent 在边缘情况下的可靠性

工程化落地与运维

- 可靠性与安全性（Guardrails）：设置内容安全护栏，防止 Agent 产生幻觉或执行未授权的敏感操作（如误删数据库）。
- 性能监控：监控 Agent 的响应延迟、Token 消耗成本以及任务成功率，并进行持续优化

跨部门协作

- 业务转化：与产品经理（PM）沟通，将复杂的业务流程（如自动化财务审批）转化为 Agent 可理解的逻辑工作流

核心技能

- Python/TypeScript，熟悉 LangChain、LangGraph 或 AutoGPT 等框架。 LangGraph，用于处理复杂的循环逻辑和状态管理。
- CrewAI / AutoGen：实现“多智能体协作”
- LlamaIndex：Agent 处理大量企业私有文档（RAG 场景）
- AI理解：LLM局限性（幻觉，上下文窗口限制）、transformer原理
- 向量数据库
