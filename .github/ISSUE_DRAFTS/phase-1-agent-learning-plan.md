# [Phase 1] Damn Agent 文章目录共建 Todo 与双协作者认领

线上 issue：https://github.com/iammm0/damn-agent/issues/1

## 目标

本 issue 用于组织 Damn Agent 第一期内容共建。Todo 按当前网站 `content/docs` 的文章目录生成，每个页面对应一个 todo，协作者围绕该页面补齐正文、示例、检查清单、引用来源和站内链接。

## 12 位协作者

01. @iammm0
02. @alicesainta
03. @chagumu-01
04. @JackWinston-coder
05. @ormasia
06. @p20061
07. @Riverzen
08. @Sorwcyra
09. @TerryLiang9
10. @violet5564
11. @WHUdonic77
12. @yftx293

## 认领规则

- 每个 todo 固定 2 个协作者名额；认领时把名额后的 `待认领` 改成自己的 GitHub ID，并勾选对应选择框。
- 每位协作者可以认领多个 todo，但同一个 todo 只能有 2 位协作者，两个名额满后不要再追加第三个名额。
- 如果需要转让、替换或增加协作者，请在 issue 评论区说明原因，由排期者调整。
- 页面交付不只写简介，至少补齐：定义与边界、工程流程、关键例子、常见坑、检查清单、延伸阅读或来源链接。
- 完成后在对应 todo 下补充 PR、commit、文档链接或可复核说明。

## 认领格式说明

每个 todo 后都有两个选择框：

```md
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
```

认领示例：

```md
- [x] 协作者 1：@your-github-id
- [ ] 协作者 2：待认领
```

## Todo 总览

当前共 60 个页面级 todo：站点公共页 3 个，内容分组 9 个。

## P1-00 站点公共页

### P1-00-01 站点公共页 / 欢迎来到 Damn Agent

- 页面：`/docs`
- 文件：`content/docs/index.mdx`
- 目标：Damn Agent 的阅读方式、内容边界和核心入口。当前为 Beta 版本，目录与正文仍在持续完善。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-00-02 站点公共页 / 维护者

- 页面：`/docs/maintainers`
- 文件：`content/docs/maintainers.mdx`
- 目标：Damn Agent 的维护者名单、GitHub ID 和远端协作权限来源。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-00-03 站点公共页 / 更新记录

- 页面：`/docs/changelog`
- 文件：`content/docs/changelog.mdx`
- 目标：Damn Agent 内容与工程更新记录。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-01 模型基础知识

### P1-01-01 模型基础知识 / 模型基础知识

- 页面：`/docs/model-basics`
- 文件：`content/docs/model-basics/index.mdx`
- 目标：面向 Agent 工程的 LLM 基础：Transformer、Token、上下文窗口、推理参数、提示词与结构化输出。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-01-02 模型基础知识 / LLM 概览

- 页面：`/docs/model-basics/llm-overview`
- 文件：`content/docs/model-basics/llm-overview.mdx`
- 目标：大语言模型的能力边界、典型局限，以及它与 Agent 系统的分工关系。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-01-03 模型基础知识 / Transformer 基础

- 页面：`/docs/model-basics/transformer-basics`
- 文件：`content/docs/model-basics/transformer-basics.mdx`
- 目标：工程师视角的 Transformer 要点：注意力、位置编码、预训练范式与对 Agent 接口的影响。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-01-04 模型基础知识 / Token 与上下文窗口

- 页面：`/docs/model-basics/tokens-and-context`
- 文件：`content/docs/model-basics/tokens-and-context.mdx`
- 目标：Token 计量、上下文窗口、成本估算，以及 Agent 系统中的压缩与预算策略。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-01-05 模型基础知识 / 推理参数与提示词基础

- 页面：`/docs/model-basics/inference-and-prompting`
- 文件：`content/docs/model-basics/inference-and-prompting.mdx`
- 目标：温度、Top-p、最大输出、停止条件、系统提示和常见提示技术的工程化使用。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-01-06 模型基础知识 / 结构化输出与工具调用

- 页面：`/docs/model-basics/structured-output`
- 文件：`content/docs/model-basics/structured-output.mdx`
- 目标：JSON Mode、函数调用、工具 schema 与编排层校验：模型意图如何变成可执行接口。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-01-07 模型基础知识 / 模型选型与能力边界

- 页面：`/docs/model-basics/model-selection`
- 文件：`content/docs/model-basics/model-selection.mdx`
- 目标：按任务类型、上下文长度、延迟、成本、工具能力和多模态需求选择模型。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-02 核心概念

### P1-02-01 核心概念 / 核心概念

- 页面：`/docs/concepts`
- 文件：`content/docs/concepts/index.mdx`
- 目标：AI Agent 核心概念索引：Agent Loop、工具调用、记忆与状态、多 Agent 协作。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-02-02 核心概念 / 智能体基础

- 页面：`/docs/concepts/agentic-basics`
- 文件：`content/docs/concepts/agentic-basics.mdx`
- 目标：从 LLM 到 Agent：工具、记忆、规划、反思、多 Agent、MCP 与安全边界的基础知识梳理。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-02-03 核心概念 / Agent Loop

- 页面：`/docs/concepts/agent-loop`
- 文件：`content/docs/concepts/agent-loop.mdx`
- 目标：Agent Loop 是智能体系统最核心的控制结构。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-02-04 核心概念 / 工具调用与记忆

- 页面：`/docs/concepts/tools-and-memory`
- 文件：`content/docs/concepts/tools-and-memory.mdx`
- 目标：工具和记忆决定了智能体能否可靠接触外部世界并保留状态。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-02-05 核心概念 / 规划、反思与任务分解

- 页面：`/docs/concepts/planning-and-reflection`
- 文件：`content/docs/concepts/planning-and-reflection.mdx`
- 目标：长任务 Agent 中的规划、执行、反思、停止条件和人工接管边界。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-02-06 核心概念 / 多 Agent 协作

- 页面：`/docs/concepts/multi-agent`
- 文件：`content/docs/concepts/multi-agent.mdx`
- 目标：多 Agent 系统中的角色划分、通信、编排、冲突处理和适用边界。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-03 编程语言基础

### P1-03-01 编程语言基础 / 编程语言基础

- 页面：`/docs/programming-languages`
- 文件：`content/docs/programming-languages/index.mdx`
- 目标：面向 AI Agent 工程的语言知识储备：TypeScript 优先，Python 其次，Go 和 Rust 面向 AI infra。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-03-02 编程语言基础 / 语言选型方法

- 页面：`/docs/programming-languages/language-selection`
- 文件：`content/docs/programming-languages/language-selection.mdx`
- 目标：按 Agent 产品、模型实验、工具服务、运行时和 AI infra 判断 TypeScript、Python、Go、Rust 的适用边界。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-03-03 编程语言基础 / TypeScript

- 页面：`/docs/programming-languages/typescript`
- 文件：`content/docs/programming-languages/typescript.mdx`
- 目标：TypeScript 是智能体工程第一编程语言，重点用于产品化 Agent、工具调用、UI、SDK 集成和全栈应用。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-03-04 编程语言基础 / Python

- 页面：`/docs/programming-languages/python`
- 文件：`content/docs/programming-languages/python.mdx`
- 目标：Python 是智能体工程第二编程语言，重点用于模型实验、RAG、数据处理、评测和研究原型。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-03-05 编程语言基础 / Go

- 页面：`/docs/programming-languages/go`
- 文件：`content/docs/programming-languages/go.mdx`
- 目标：Go 是 AI infra 推荐语言之一，重点用于服务端、调度、队列、节点控制面、网关和高并发工具服务。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-03-06 编程语言基础 / Rust

- 页面：`/docs/programming-languages/rust`
- 文件：`content/docs/programming-languages/rust.mdx`
- 目标：Rust 是 AI infra 推荐语言之一，重点用于 sandbox、runtime、CLI、解析器、安全边界和高性能底层组件。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-04 工程实践

### P1-04-01 工程实践 / 工程实践

- 页面：`/docs/practices`
- 文件：`content/docs/practices/index.mdx`
- 目标：AI Agent 工程化实践索引：上下文工程、Harness 构件、评测回归和安全边界。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-04-02 工程实践 / Harness 工程构件

- 页面：`/docs/practices/harness-engineering`
- 文件：`content/docs/practices/harness-engineering.mdx`
- 目标：以 Session、Harness、Sandbox 为主线，梳理可恢复、可扩展、可审计的 Agent 工程架构。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-04-03 工程实践 / 上下文工程

- 页面：`/docs/practices/context-engineering`
- 文件：`content/docs/practices/context-engineering.mdx`
- 目标：上下文工程关注如何组织任务信息，让模型在有限窗口内稳定完成工作。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-04-04 工程实践 / RAG 与知识系统

- 页面：`/docs/practices/rag-and-knowledge`
- 文件：`content/docs/practices/rag-and-knowledge.mdx`
- 目标：Agent 使用外部知识时的采集、切分、索引、召回、重排、引用和更新机制。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-04-05 工程实践 / 可观测性与轨迹回放

- 页面：`/docs/practices/observability`
- 文件：`content/docs/practices/observability.mdx`
- 目标：Agent 系统中的 trace、日志、指标、成本、错误聚合和轨迹回放。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-04-06 工程实践 / 评测与回归

- 页面：`/docs/practices/evaluation`
- 文件：`content/docs/practices/evaluation.mdx`
- 目标：Agent 评测用于判断系统在多步骤任务中的真实质量变化。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-04-07 工程实践 / 安全、权限与人类接管

- 页面：`/docs/practices/safety-and-governance`
- 文件：`content/docs/practices/safety-and-governance.mdx`
- 目标：Agent 工具权限、敏感数据、Prompt Injection、人工确认和事故处理。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-05 框架工具

### P1-05-01 框架工具 / 框架工具

- 页面：`/docs/frameworks`
- 文件：`content/docs/frameworks/index.mdx`
- 目标：AI Agent 框架工具索引与工程选型入口。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-05-02 框架工具 / 框架选型总览

- 页面：`/docs/frameworks/framework-selection`
- 文件：`content/docs/frameworks/framework-selection.mdx`
- 目标：按状态、工具、工作流、多 Agent、持久化、评测和部署比较 Agent 框架。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-05-03 框架工具 / LangGraph

- 页面：`/docs/frameworks/langgraph`
- 文件：`content/docs/frameworks/langgraph.mdx`
- 目标：LangGraph 适合用图和状态机构建可控的 Agent 工作流。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-05-04 框架工具 / Mastra

- 页面：`/docs/frameworks/mastra`
- 文件：`content/docs/frameworks/mastra.mdx`
- 目标：Mastra 面向 TypeScript 应用的 Agent 与 workflow 开发体验。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-05-05 框架工具 / AutoGen

- 页面：`/docs/frameworks/autogen`
- 文件：`content/docs/frameworks/autogen.mdx`
- 目标：AutoGen 的多 Agent 对话、角色协作、工具执行和适用边界。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-05-06 框架工具 / CrewAI

- 页面：`/docs/frameworks/crewai`
- 文件：`content/docs/frameworks/crewai.mdx`
- 目标：CrewAI 的 role、task、crew、process 抽象和任务组织方式。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-05-07 框架工具 / OpenAI Agents SDK

- 页面：`/docs/frameworks/openai-agents-sdk`
- 文件：`content/docs/frameworks/openai-agents-sdk.mdx`
- 目标：OpenAI Agents SDK 的 agent、tool、handoff、guardrail 和 trace 抽象。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-05-08 框架工具 / Vercel AI SDK

- 页面：`/docs/frameworks/vercel-ai-sdk`
- 文件：`content/docs/frameworks/vercel-ai-sdk.mdx`
- 目标：Vercel AI SDK 在 streaming、tool calling、结构化输出和前端集成中的使用方式。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-06 开源智能体

### P1-06-01 开源智能体 / 开源智能体

- 页面：`/docs/open-source-agents`
- 文件：`content/docs/open-source-agents/index.mdx`
- 目标：社区开源智能体具体项目的工程拆解入口。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-02 开源智能体 / OpenHands

- 页面：`/docs/open-source-agents/openhands`
- 文件：`content/docs/open-source-agents/openhands.mdx`
- 目标：OpenHands 作为开源软件工程 Agent 平台的 sandbox、终端、浏览器、代码修改和 SDK 拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-03 开源智能体 / SWE-agent

- 页面：`/docs/open-source-agents/swe-agent`
- 文件：`content/docs/open-source-agents/swe-agent.mdx`
- 目标：SWE-agent 作为真实 GitHub issue 修复 Agent 的工具接口、配置、评测和仓库修改流程拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-04 开源智能体 / aider

- 页面：`/docs/open-source-agents/aider`
- 文件：`content/docs/open-source-agents/aider.mdx`
- 目标：aider 作为终端 AI pair programming 工具的 repo map、git 集成、多文件编辑和交互体验拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-05 开源智能体 / Open SWE

- 页面：`/docs/open-source-agents/open-swe`
- 文件：`content/docs/open-source-agents/open-swe.mdx`
- 目标：Open SWE 作为异步云端 coding agent 的 GitHub issue、计划、测试、PR 和人类审核链路拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-06 开源智能体 / Plandex

- 页面：`/docs/open-source-agents/plandex`
- 文件：`content/docs/open-source-agents/plandex.mdx`
- 目标：Plandex 作为面向大项目和长任务的终端代码智能体的计划、上下文和跨文件修改拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-07 开源智能体 / GPT Researcher

- 页面：`/docs/open-source-agents/gpt-researcher`
- 文件：`content/docs/open-source-agents/gpt-researcher.mdx`
- 目标：GPT Researcher 作为开源 deep research agent 的多来源检索、引用、报告生成和研究流程拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-08 开源智能体 / Browser Use

- 页面：`/docs/open-source-agents/browser-use`
- 文件：`content/docs/open-source-agents/browser-use.mdx`
- 目标：Browser Use 作为开源浏览器 Agent harness 的动作空间、持久工具、恢复循环和网页任务拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-09 开源智能体 / Open Interpreter

- 页面：`/docs/open-source-agents/open-interpreter`
- 文件：`content/docs/open-source-agents/open-interpreter.mdx`
- 目标：Open Interpreter 作为本地 computer use 和 code execution agent 的 harness、Shell、浏览器和权限边界拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-10 开源智能体 / OpenClaw

- 页面：`/docs/open-source-agents/openclaw`
- 文件：`content/docs/open-source-agents/openclaw.mdx`
- 目标：OpenClaw 作为本地优先个人 AI 助理的 Gateway、渠道、安全和运行方式拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-06-11 开源智能体 / Hermes Agent

- 页面：`/docs/open-source-agents/hermes-agent`
- 文件：`content/docs/open-source-agents/hermes-agent.mdx`
- 目标：Hermes Agent 作为自改进通用 Agent 的技能、记忆、消息网关、cron 和运行后端拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-07 编码 Agent

### P1-07-01 编码 Agent / 编码 Agent

- 页面：`/docs/coding-agents`
- 文件：`content/docs/coding-agents/index.mdx`
- 目标：主流编码 Agent 产品介绍：Claude Code、Codex、Cursor 等产品的定位、交互形态与工程特点。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-07-02 编码 Agent / Claude Code

- 页面：`/docs/coding-agents/claude-code`
- 文件：`content/docs/coding-agents/claude-code.mdx`
- 目标：Anthropic 终端编码 Agent 的产品定位、工具系统、扩展机制与工程特点。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-07-03 编码 Agent / Codex

- 页面：`/docs/coding-agents/codex`
- 文件：`content/docs/coding-agents/codex.mdx`
- 目标：OpenAI 编码 Agent 的产品定位、CLI/IDE/云端形态与工程特点。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-07-04 编码 Agent / Cursor

- 页面：`/docs/coding-agents/cursor`
- 文件：`content/docs/coding-agents/cursor.mdx`
- 目标：AI 原生 IDE 的产品定位、Agent/Composer 模式与代码库上下文工程。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-08 案例拆解

### P1-08-01 案例拆解 / 案例拆解

- 页面：`/docs/cases`
- 文件：`content/docs/cases/index.mdx`
- 目标：AI Agent 案例拆解入口：研究、代码和工具型智能体场景。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-08-02 案例拆解 / Claude Code 源码解析

- 页面：`/docs/cases/claude-code-source-analysis`
- 文件：`content/docs/cases/claude-code-source-analysis.mdx`
- 目标：从查询引擎、工具系统、权限安全、Hook、MCP 与多智能体协作拆解 Claude Code 的工程设计。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-08-03 案例拆解 / 研究型 Agent 案例

- 页面：`/docs/cases/research-agent`
- 文件：`content/docs/cases/research-agent.mdx`
- 目标：研究型 Agent 从问题澄清、检索、证据整理到结论输出的链路拆解。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-08-04 案例拆解 / Coding Agent 工程案例

- 页面：`/docs/cases/coding-agent`
- 文件：`content/docs/cases/coding-agent.mdx`
- 目标：从仓库理解、搜索、编辑、测试、diff、commit 到 PR 的代码代理工作流。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## P1-09 资源清单

### P1-09-01 资源清单 / 资源总览

- 页面：`/docs/resources/overview`
- 文件：`content/docs/resources/overview.mdx`
- 目标：资料类型、维护原则、书目索引和本站引用规则。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-09-02 资源清单 / 《智能体设计模式》

- 页面：`/docs/resources/agentic-design-patterns`
- 文件：`content/docs/resources/agentic-design-patterns.mdx`
- 目标：梳理工具使用、规划、多 Agent、记忆、MCP、Guardrails 与评估等 Agent 基础模式。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-09-03 资源清单 / 《Claude Code Harness Engineering》

- 页面：`/docs/resources/harness-engineering-book`
- 文件：`content/docs/resources/harness-engineering-book.mdx`
- 目标：梳理 Harness 三组件、Managed Agents、Session、Sandbox、上下文压缩、记忆、多 Agent 与生产化。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

### P1-09-04 资源清单 / 《Demystifying Claude Code v1.8》

- 页面：`/docs/resources/demystifying-claude-code`
- 文件：`content/docs/resources/demystifying-claude-code.mdx`
- 目标：拆解 Claude Code 查询引擎、工具系统、Bash 安全、Agent 工具、Hook、MCP 与扩展设计。
- [ ] 协作者 1：待认领
- [ ] 协作者 2：待认领
- 交付证据：待补充

## 排期者维护事项

- [x] 发布本 issue 后，把 issue 链接同步到 `CHANGESLOG.md`：https://github.com/iammm0/damn-agent/issues/1
- [ ] 每轮认领后汇总 todo 编号、协作者、状态和证据链接。
- [ ] 发现目录变化时，新增或删除对应 todo，并在评论区说明变更原因。
- [ ] 每次发版前检查未认领、阻塞、延期和待评审页面。
