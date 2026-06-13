# CHANGESLOG.md

本文件是 Damn Agent 项目的总进度与版本更新记录。每次发布新版本时，由项目排期者更新协作者进度、内容更新、工程更新、风险阻塞和下一步计划。

> 文件名按当前项目约定使用 `CHANGESLOG.md`。如后续统一为通用拼写 `CHANGELOG.md`，需要同步更新 README、站内链接和代理约定。

## 维护规则

- 每次发新版本前更新一次本文件。
- 每条版本记录都需要包含发布日期、发布负责人、协作者进度、内容更新、工程更新、风险阻塞、下个版本计划。
- 协作者信息至少包含 GitHub ID、微信号、负责板块、todo 编号、状态和证据链接。
- 状态建议统一为：`未开始`、`进行中`、`待评审`、`已合并`、`已发布`、`阻塞`、`延期`。
- 不把没有证据的口头进展写成已完成；至少链接到 issue comment、PR、commit、文档页面或截图说明。

## 版本记录模板

```md
## vYYYY.MM.DD.N - YYYY-MM-DD

发布负责人：
发布范围：
关联 issue：

### 协作者进度

| 协作者 | GitHub ID | 微信号 | 负责板块 | Todo 编号 | 状态 | 本次更新 | 证据 |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | @ |  |  |  |  |  |  |

### 内容更新

- 

### 工程更新

- 

### 风险与阻塞

- 

### 下个版本计划

- 
```

## Unreleased

发布负责人：@iammm0（微信号待补充）
发布范围：第一期 Agent 技术学习目录评估与骨架铺设
关联 issue：已撤回，暂不创建 GitHub issue

### 协作者进度

| 协作者 | GitHub ID | 微信号 | 负责板块 | Todo 编号 | 状态 | 本次更新 | 证据 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 排期者 | @iammm0 | 待补充 | 第一期目录评估与骨架铺设 | 待重新规划 | 进行中 | 撤回第一期 GitHub issue 草稿，先铺设网站文档目录，再进入排期和分工 | `content/docs/roadmap/phase-1-directory.mdx` |

### 内容更新

- 第一版 12 人协作 issue 草稿已撤回，暂不进入 GitHub issue 发布流程。
- 后续第一期板块拆分、知识范围、交付物和 todo 编号需要重新确认后再发布。
- 新增第一期目录评估页，用于先判断网站目录是否能承载协作内容。
- 补齐编程语言基础、规划反思、多 Agent、RAG、可观测性、安全治理、框架选型、开源智能体、Coding Agent、运维/浏览器 Agent 等目录入口。

### 工程更新

- 新增根目录 `AGENTS.md`，明确编码代理和编程助手的项目协作约定。
- 新增根目录 `CHANGESLOG.md`，作为后续版本发布和协作者进度的总记录。
- 删除 `.github/ISSUE_DRAFTS/phase-1-agent-learning-plan.md`，撤回待审核的 GitHub issue 正文。
- 新增 `content/docs/roadmap/` 分组，承载目录评估和后续共建路线。
- 新增 `content/docs/programming-languages/` 分组，承载 TypeScript、Python、Go、Rust 的 Agent 工程语言基础。
- 新增 `content/docs/open-source-agents/` 分组，单独承载社区开源智能体项目的评估方法、项目池和分类拆解。
- 更新 `content/docs/*/meta.json` 和各分组首页，让新增主题进入站内导航。

### 风险与阻塞

- GitHub issue 未创建，第一版 issue 草稿已从仓库撤回。
- 12 位协作者的 GitHub ID、微信号、实际认领板块和排期方式需要重新确认。
- 当前新增页面多为目录骨架，尚未进入完整正文写作阶段。
- 开源智能体项目清单尚未逐项验源，暂不写具体项目质量结论。
- 编程语言板块已确定优先级，但各语言页仍需补充示例代码、学习路径和项目阅读材料。

### 下个版本计划

- 重新确认第一期协作方式和是否继续使用 GitHub issue 承载排期。
- 重新确认是否公开收集微信号，或改用私下汇总后只在 issue 中记录 GitHub ID。
- 先审核 `content/docs/roadmap/phase-1-directory.mdx` 的目录映射。
- 审核 TypeScript、Python、Go、Rust 的优先级和正文深度边界。
- 确认开源智能体板块先按分类维护，还是为每个重点项目单独建页。
- 新排期确认后再更新 `CHANGESLOG.md` 的协作者进度表。
