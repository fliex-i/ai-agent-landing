import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "智枢AI · 企业 AI Agent 定制专家 | 行业 Skill 市场",
  description:
    "智枢AI 专注企业级 AI Agent 定制开发，提供覆盖多行业的通用 Skill 售卖、分享与定制服务，让 AI Agent 成为企业的下一位核心员工。",
  keywords: [
    "AI Agent 定制",
    "企业 AI",
    "AI Skill 市场",
    "智能体开发",
    "AI 数字员工",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
