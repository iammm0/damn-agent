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

## v0.2.0-beta - 2026-06-13

发布负责人：@iammm0（微信号待补充）
发布范围：Beta 版本发布、文档目录扩充、协作者名单同步
关联 issue：暂无

### 协作者进度

| 协作者 | GitHub ID | 微信号 | 负责板块 | Todo 编号 | 状态 | 本次更新 | 证据 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 排期者 | @iammm0 | 待补充 | 项目排期与发布 | - | 已发布 | 发布 Beta，同步协作者名单 | `content/docs/maintainers.mdx` |
| 协作者 | @chagumu-01 | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/chagumu-01) |
| 协作者 | @JackWinston-coder | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/JackWinston-coder) |
| 协作者 | @ormasia | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/ormasia) |
| 协作者 | @p20061 | 待补充 | 待认领 | - | 未开始 | 新增远端仓库协作者 | [GitHub](https://github.com/p20061) |
| 协作者 | @Riverzen | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/Riverzen) |
| 协作者 | @Sorwcyra | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/Sorwcyra) |
| 协作者 | @TerryLiang9 | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/TerryLiang9) |
| 协作者 | @violet5564 | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/violet5564) |
| 协作者 | @WHUdonic | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/WHUdonic) |
| 协作者 | @WHUdonic77 | 待补充 | 待认领 | - | 未开始 | 已加入远端仓库协作者 | [GitHub](https://github.com/WHUdonic77) |

### 内容更新

- 项目进入 Beta（`0.2.0-beta`），首页与更新记录同步标注 Beta 状态。
- 新增模型基础知识、编码 Agent（Claude Code、Codex、Cursor）、资源清单（资源总览 + 分册）等一级目录。
- 精简开源智能体板块，移除评估方法、项目池和分类页，仅保留具体项目页。
- 暂时下线运维与浏览器 Agent 案例。
- 重新同步维护者名单，新增协作者 `p20061`、`Sorwcyra`、`WHUdonic`。

### 工程更新

- `lib/site.ts`、`package.json` 版本号更新为 `0.2.0-beta`。
- 站点品牌组件增加 Beta 标识。
- 维护者页从 GitHub collaborators 接口重新同步。

### 风险与阻塞

- 协作者负责板块、todo 编号和微信号仍未分配。
- 多数页面仍为目录骨架，正文深度不足。
- Beta 期间目录结构可能继续调整，需控制破坏性改动范围。

### 下个版本计划

- 为协作者分配负责板块和 todo 编号。
- 按板块补齐正文、示例和交叉链接。
- 评估是否发布 `0.2.0` 正式版或继续 Beta 迭代。

## Unreleased

发布负责人：@iammm0（微信号待补充）
发布范围：第一期 Agent 技术学习目录评估与骨架铺设
关联 issue：已撤回，暂不创建 GitHub issue

### 协作者进度

| 协作者 | GitHub ID | 微信号 | 负责板块 | Todo 编号 | 状态 | 本次更新 | 证据 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 排期者 | @iammm0 | 待补充 | 第一期目录评估与骨架铺设 | 待重新规划 | 进行中 | 撤回第一期 GitHub issue 草稿，先铺设网站文档目录，再进入排期和分工 | `content/docs/index.mdx` |

### 内容更新

- 第一版 12 人协作 issue 草稿已撤回，暂不进入 GitHub issue 发布流程。
- 后续第一期板块拆分、知识范围、交付物和 todo 编号需要重新确认后再发布。
- 补齐编程语言基础、规划反思、多 Agent、RAG、可观测性、安全治理、框架选型、开源智能体、Coding Agent、运维/浏览器 Agent 等目录入口。

### 工程更新

- 新增根目录 `AGENTS.md`，明确编码代理和编程助手的项目协作约定。
- 新增根目录 `CHANGESLOG.md`，作为后续版本发布和协作者进度的总记录。
- 删除 `.github/ISSUE_DRAFTS/phase-1-agent-learning-plan.md`，撤回待审核的 GitHub issue 正文。
- 新增 `content/docs/programming-languages/` 分组，承载 TypeScript、Python、Go、Rust 的 Agent 工程语言基础。
- 新增 `content/docs/open-source-agents/` 分组，单独承载社区开源智能体项目的评估方法、项目池、分类拆解和具体项目页。
- 补充 OpenHands、SWE-agent、aider、Open SWE、Plandex、GPT Researcher、Browser Use、Open Interpreter、OpenClaw、Hermes Agent 等具体开源智能体入口。
- 更新 `content/docs/*/meta.json` 和各分组首页，让新增主题进入站内导航。

### 风险与阻塞

- GitHub issue 未创建，第一版 issue 草稿已从仓库撤回。
- 12 位协作者的 GitHub ID、微信号、实际认领板块和排期方式需要重新确认。
- 当前新增页面多为目录骨架，尚未进入完整正文写作阶段。
- 开源智能体项目已进入具体项目页阶段，但仍需对每个项目继续补充许可证、运行路径、仓库结构和可复现实验。
- 编程语言板块已确定优先级，但各语言页仍需补充示例代码、学习路径和项目阅读材料。

### 下个版本计划

- 重新确认第一期协作方式和是否继续使用 GitHub issue 承载排期。
- 重新确认是否公开收集微信号，或改用私下汇总后只在 issue 中记录 GitHub ID。
- 先审核当前文档站顶层目录是否覆盖第一期学习范围。
- 审核 TypeScript、Python、Go、Rust 的优先级和正文深度边界。
- 按项目继续扩充开源智能体页，优先补齐许可证核验、最小运行路径、架构图和可借鉴点。
- 新排期确认后再更新 `CHANGESLOG.md` 的协作者进度表。
