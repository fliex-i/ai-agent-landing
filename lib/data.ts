export const services = [
  {
    icon: "bot",
    title: "企业 AI Agent 定制开发",
    desc: "深入业务场景，为企业量身打造可落地的 AI 数字员工：智能客服、销售助理、知识问答、流程自动化等，支持私有化部署与现有系统集成。",
    points: ["业务流程深度建模", "对接 OA / CRM / ERP", "私有化 & 数据安全合规"],
  },
  {
    icon: "store",
    title: "通用行业 Skill 售卖",
    desc: "沉淀各行业高频场景的通用 Skill 能力包，开箱即用、按需购买，让企业以最低成本快速获得成熟的 AI 能力。",
    points: ["50+ 行业场景 Skill", "按需订阅，开箱即用", "持续迭代更新"],
  },
  {
    icon: "share",
    title: "Skill 分享与定制",
    desc: "开放 Skill 分享社区，优质能力免费共享；同时提供 Skill 级别的轻量定制服务，在通用能力之上快速适配企业个性化需求。",
    points: ["免费 Skill 分享社区", "轻量定制 1 周交付", "专家一对一支持"],
  },
] as const;

export const skills = [
  { tag: "客服", name: "智能客服应答", desc: "多轮对话、工单流转、情绪识别，7×24 小时在线客服能力包。", price: "¥1,999/年", hot: true },
  { tag: "财务", name: "票据对账助手", desc: "发票识别、自动对账、异常标记，财务流程效率提升 80%。", price: "¥2,999/年", hot: true },
  { tag: "法务", name: "合同审查 Skill", desc: "风险条款识别、合规比对、修订建议，分钟级完成合同初审。", price: "¥3,999/年", hot: false },
  { tag: "营销", name: "内容创作引擎", desc: "多平台文案、图文策划、SEO 优化，一键生成营销内容矩阵。", price: "¥1,499/年", hot: false },
  { tag: "人事", name: "简历筛选助手", desc: "JD 智能匹配、人才画像、面试问题生成，招聘效率翻倍。", price: "免费分享", hot: false },
  { tag: "数据", name: "经营报表分析", desc: "自然语言查数、自动周报月报、异常波动归因分析。", price: "¥2,499/年", hot: true },
] as const;

export const industries = [
  { icon: "cart", name: "零售电商", desc: "导购推荐 · 售后客服 · 评价分析" },
  { icon: "bank", name: "金融保险", desc: "智能投顾 · 风控审核 · 保单助手" },
  { icon: "factory", name: "智能制造", desc: "设备知识库 · 工单调度 · 质检报告" },
  { icon: "health", name: "医疗健康", desc: "导诊咨询 · 病历摘要 · 随访管理" },
  { icon: "edu", name: "教育培训", desc: "答疑助教 · 课程推荐 · 学情分析" },
  { icon: "gov", name: "政企服务", desc: "政策问答 · 公文辅助 · 民生热线" },
] as const;

export const steps = [
  { no: "01", title: "需求诊断", desc: "免费业务调研，识别高价值 AI 落地场景，输出可行性评估。" },
  { no: "02", title: "方案设计", desc: "定制 Agent 架构与 Skill 组合方案，明确交付边界与验收标准。" },
  { no: "03", title: "开发交付", desc: "敏捷迭代开发，平均 3 周上线，全程可视化进度同步。" },
  { no: "04", title: "持续运营", desc: "效果监控、模型调优、Skill 持续升级，伴随业务共同成长。" },
] as const;

export const advantages = [
  { title: "场景落地优先", desc: "不卖概念，只做可量化 ROI 的落地场景，先诊断后立项。" },
  { title: "通用 + 定制双轮", desc: "成熟 Skill 复用降低成本，定制开发满足个性化，交付快且省。" },
  { title: "数据安全合规", desc: "支持私有化部署与国产大模型适配，企业数据不出域。" },
  { title: "长期陪跑服务", desc: "交付不是终点，持续运营调优确保 AI 能力随业务进化。" },
] as const;

export const faqs = [
  {
    q: "定制一个企业 AI Agent 需要多长时间、费用大概多少？",
    a: "标准场景（如智能客服、知识问答）基于成熟 Skill 组装，1-3 周即可上线；复杂流程类 Agent 通常 4-8 周。费用根据场景复杂度评估，首次需求诊断免费，评估后提供明确报价。",
  },
  {
    q: "购买的行业 Skill 可以直接用在我们现有系统里吗？",
    a: "可以。所有 Skill 提供标准 API 与主流平台插件（企业微信、钉钉、飞书等），也支持嵌入自有 App / 网站，技术团队协助完成接入。",
  },
  {
    q: "企业数据安全如何保障？",
    a: "支持全栈私有化部署，模型与数据均可部署在企业内网；SaaS 模式下数据加密存储、严格隔离，并可签署数据安全协议，满足等保合规要求。",
  },
  {
    q: "免费分享的 Skill 和付费 Skill 有什么区别？",
    a: "免费 Skill 来自社区共建，覆盖通用轻量场景，自助接入使用；付费 Skill 由官方团队维护，提供 SLA 保障、持续更新与专属技术支持。",
  },
] as const;
