export const siteConfig = {
  name: "Damn Agent",
  cnName: "智能体工程文档",
  description:
    "面向开发者的 AI Agent 技术学习文档站，系统梳理概念、工程实践、框架工具和案例拆解。",
};

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { title: "概念", href: "/docs/concepts" },
  { title: "实践", href: "/docs/practices" },
  { title: "框架", href: "/docs/frameworks" },
  { title: "案例", href: "/docs/cases" },
  { title: "资源", href: "/docs/resources" },
  { title: "更新", href: "/docs/changelog" },
];
