import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Compass,
  Database,
  FlaskConical,
  Hammer,
  Library,
  Map,
  Network,
  Route,
  ScrollText,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const siteConfig = {
  name: "Agent Atlas",
  cnName: "智能体学习地图",
  description:
    "面向开发者的 AI Agent 技术学习文档站，系统梳理路线、概念、工程实践、框架工具和案例拆解。",
};

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export const mainNav: NavItem[] = [
  { title: "路线", href: "/roadmap", icon: Route },
  { title: "概念", href: "/concepts", icon: BrainCircuit },
  { title: "实践", href: "/practices", icon: Hammer },
  { title: "框架", href: "/frameworks", icon: Blocks },
  { title: "案例", href: "/cases", icon: FlaskConical },
  { title: "资源", href: "/resources", icon: Library },
  { title: "文档", href: "/docs", icon: BookOpen },
];

export const pageNav: NavItem[] = [
  {
    title: "学习路线",
    href: "/roadmap",
    description: "按阶段建立 Agent 知识地图和实作顺序。",
    icon: Map,
  },
  {
    title: "核心概念",
    href: "/concepts",
    description: "理解 loop、tool、memory、planning、context 等基础概念。",
    icon: BrainCircuit,
  },
  {
    title: "工程实践",
    href: "/practices",
    description: "把 Agent 从 demo 推进到可调试、可评测、可维护的系统。",
    icon: Hammer,
  },
  {
    title: "框架工具",
    href: "/frameworks",
    description: "比较 LangGraph、Mastra、AutoGen、CrewAI 等工具边界。",
    icon: Blocks,
  },
  {
    title: "案例拆解",
    href: "/cases",
    description: "从研究助理、代码审查、数据分析等场景看设计取舍。",
    icon: FlaskConical,
  },
  {
    title: "资源清单",
    href: "/resources",
    description: "整理论文、课程、仓库、评测和部署资料。",
    icon: Library,
  },
  {
    title: "更新记录",
    href: "/changelog",
    description: "跟踪内容补充、结构调整和后续扩展。",
    icon: ScrollText,
  },
];

export type Difficulty = "入门" | "进阶" | "工程" | "综合";

export type LearningStep = {
  phase: string;
  title: string;
  goal: string;
  difficulty: Difficulty;
  href: string;
  outputs: string[];
  topics: string[];
};

export const learningPath: LearningStep[] = [
  {
    phase: "01",
    title: "建立 Agent 心智模型",
    goal: "先把智能体看成可观察的工程循环，而不是魔法黑盒。",
    difficulty: "入门",
    href: "/docs/roadmap",
    outputs: ["能画出 observe-plan-act-reflect 循环", "能解释工具调用为什么需要约束"],
    topics: ["Agent Loop", "任务分解", "工具接口"],
  },
  {
    phase: "02",
    title: "掌握上下文与记忆",
    goal: "理解短上下文、长期记忆、检索、状态和人工反馈的边界。",
    difficulty: "进阶",
    href: "/docs/concepts/tools-and-memory",
    outputs: ["能设计 memory schema", "能区分上下文工程和提示词技巧"],
    topics: ["Context Engineering", "Memory", "RAG"],
  },
  {
    phase: "03",
    title: "进入工程化实践",
    goal: "补齐评测、日志、回放、权限、失败恢复和成本控制。",
    difficulty: "工程",
    href: "/docs/practices/evaluation",
    outputs: ["能定义评测集", "能复现一次失败轨迹", "能设置工具权限边界"],
    topics: ["Eval", "Tracing", "Guardrails"],
  },
  {
    phase: "04",
    title: "选择框架和运行时",
    goal: "按状态机、工作流、协作模式和部署要求选择工具。",
    difficulty: "工程",
    href: "/frameworks",
    outputs: ["能比较 LangGraph 与 Mastra", "能判断是否需要多 Agent"],
    topics: ["LangGraph", "Mastra", "Workflow"],
  },
  {
    phase: "05",
    title: "拆解真实案例",
    goal: "从研究、代码、数据和运维场景里学习可复用架构。",
    difficulty: "综合",
    href: "/cases",
    outputs: ["能写出任务边界", "能识别高风险工具", "能设计人工接管点"],
    topics: ["Research Agent", "Code Agent", "Ops Agent"],
  },
];

export type Concept = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  difficulty: Difficulty;
  tags: string[];
};

export const concepts: Concept[] = [
  {
    title: "Agent Loop",
    description: "智能体的观察、规划、执行、检查循环，是理解所有框架的共同语言。",
    href: "/docs/concepts/agent-loop",
    icon: Workflow,
    difficulty: "入门",
    tags: ["loop", "state", "control"],
  },
  {
    title: "工具调用",
    description: "把外部能力包装成可验证接口，明确输入、输出、权限和失败语义。",
    href: "/docs/concepts/tools-and-memory",
    icon: Code2,
    difficulty: "入门",
    tags: ["tools", "schema", "permissions"],
  },
  {
    title: "记忆与状态",
    description: "区分会话上下文、长期记忆、任务状态和可审计的执行轨迹。",
    href: "/docs/concepts/tools-and-memory",
    icon: Database,
    difficulty: "进阶",
    tags: ["memory", "state", "retrieval"],
  },
  {
    title: "多 Agent 协作",
    description: "用角色、协议和共享状态管理协作，不把多个模型调用误认为组织结构。",
    href: "/concepts",
    icon: Network,
    difficulty: "综合",
    tags: ["multi-agent", "handoff", "roles"],
  },
];

export type Practice = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  checks: string[];
};

export const practices: Practice[] = [
  {
    title: "上下文工程",
    description: "把任务背景、约束、工具结果和历史状态组织成稳定输入。",
    href: "/docs/practices/context-engineering",
    icon: Compass,
    checks: ["上下文分层", "引用来源", "窗口预算"],
  },
  {
    title: "评测与回归",
    description: "用样例集、轨迹回放和指标看住 Agent 的质量变化。",
    href: "/docs/practices/evaluation",
    icon: CheckCircle2,
    checks: ["离线评测", "失败归因", "回归阈值"],
  },
  {
    title: "安全边界",
    description: "为工具权限、文件系统、网络和人工审批设置明确护栏。",
    href: "/practices",
    icon: ShieldCheck,
    checks: ["最小权限", "高危动作确认", "审计日志"],
  },
];

export type Framework = {
  name: string;
  description: string;
  href: string;
  bestFor: string;
  maturity: string;
  tags: string[];
};

export const frameworks: Framework[] = [
  {
    name: "LangGraph",
    description: "以图和状态机组织 Agent 工作流，适合可控分支、循环和人工接管。",
    href: "/docs/frameworks/langgraph",
    bestFor: "状态机、多步骤工作流、可恢复执行",
    maturity: "高",
    tags: ["graph", "state", "workflow"],
  },
  {
    name: "Mastra",
    description: "面向 TypeScript 应用的 Agent 与 workflow 框架，适合 Web 产品集成。",
    href: "/docs/frameworks/mastra",
    bestFor: "TypeScript、产品集成、工具编排",
    maturity: "中高",
    tags: ["typescript", "workflow", "tools"],
  },
  {
    name: "AutoGen",
    description: "强调多 Agent 对话与协作，适合研究多角色交互和实验型系统。",
    href: "/frameworks",
    bestFor: "多角色协作、实验原型",
    maturity: "中",
    tags: ["multi-agent", "conversation"],
  },
  {
    name: "CrewAI",
    description: "用角色、任务和流程描述团队式 Agent，适合快速演示业务协作。",
    href: "/frameworks",
    bestFor: "角色任务建模、业务流程 demo",
    maturity: "中",
    tags: ["roles", "tasks", "crew"],
  },
];

export type CaseStudy = {
  title: string;
  description: string;
  href: string;
  scenario: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "研究型 Agent",
    description: "从问题澄清、资料检索、证据整理到结论输出的完整链路。",
    href: "/docs/cases/research-agent",
    scenario: "资料密集型研究",
    stack: ["Search", "RAG", "Citation", "Review"],
  },
  {
    title: "代码审查 Agent",
    description: "围绕 diff、测试、风险分级和可执行建议设计开发者工作流。",
    href: "/cases",
    scenario: "研发质量保障",
    stack: ["Git", "Static Analysis", "Eval"],
  },
  {
    title: "运维排障 Agent",
    description: "串联日志、指标、命令执行和人工审批，定位真实系统故障。",
    href: "/cases",
    scenario: "服务稳定性",
    stack: ["Logs", "Metrics", "Runbook"],
  },
];

export type Resource = {
  title: string;
  description: string;
  href: string;
  type: "论文" | "课程" | "仓库" | "文档" | "工具";
};

export type RelatedProject = {
  name: string;
  description: string;
  href: string;
  homepage?: string;
  language: string;
  note: string;
  tags: string[];
};

export const resources: Resource[] = [
  {
    title: "Agent 工程阅读清单",
    description: "论文、博客和系统设计资料，按学习阶段归类。",
    href: "/docs/resources",
    type: "文档",
  },
  {
    title: "评测样例模板",
    description: "用于构建任务集、期望输出和失败分析记录。",
    href: "/resources",
    type: "工具",
  },
  {
    title: "框架对比矩阵",
    description: "从状态管理、工具调用、部署、观测和生态比较主流框架。",
    href: "/frameworks",
    type: "文档",
  },
];

export const relatedProjects: RelatedProject[] = [
  {
    name: "secbot",
    description:
      "授权安全测试工作台，v2 是 TypeScript 终端产品，聚焦安全自动化和授权测试流程。",
    href: "https://github.com/iammm0/secbot",
    homepage: "https://secbot.site",
    language: "TypeScript",
    note: "不属于 Agent 学习路线主线，可作为安全自动化场景的延伸观察。",
    tags: ["authorized-testing", "security-automation", "terminal-ui", "mcp"],
  },
  {
    name: "execgo",
    description:
      "把上层 agent 的决策可靠、安全、可观测地映射到真实工具与运行环境的执行层项目。",
    href: "https://github.com/iammm0/execgo",
    homepage: "https://execgo.site",
    language: "Go",
    note: "不作为入门必学框架，可作为 Agent 运行时与工具执行边界的旁路参考。",
    tags: ["go", "runtime", "tool-execution", "observability"],
  },
];

export const agentFlowChart = `flowchart LR
  user[开发者需求] --> clarify[澄清任务边界]
  clarify --> plan[规划步骤]
  plan --> tools[调用工具与检索]
  tools --> observe[观察结果]
  observe --> decide{是否完成}
  decide -- 否 --> plan
  decide -- 是 --> answer[输出可验证结果]
  observe --> memory[记录状态与证据]
  memory --> plan`;

export const changelog = [
  {
    date: "2026-06-12",
    title: "创建 Agent Atlas 初版",
    items: ["搭建 Next.js + Fumadocs 文档站", "生成第一批中文 MDX 草稿", "加入学习路线与框架案例入口"],
  },
];
