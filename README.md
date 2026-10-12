# 智枢AI · 企业 AI Agent 宣传落地页

Next.js 16（App Router + Tailwind CSS v4）静态导出的单页宣传站，主营业务：企业 AI Agent 定制开发、通用行业 Skill 售卖/分享/定制。

## 本地开发

```bash
npm install
npm run dev        # 开发模式 http://localhost:3000
npm run build      # 静态导出到 out/
npx serve out      # 本地预览构建产物
```

构建产物为纯静态文件（`out/`），可部署到任意静态托管渠道。

## 部署渠道（2026-10 调研结论）

| 渠道 | 免费 | 国内免翻墙直连 | 免备案 | 结论 |
|---|---|---|---|---|
| **腾讯云 EdgeOne Pages** | ✅ 长期免费版 | ✅ `*.edgeone.app` 可直连 | ✅ | **推荐，国内访问首选** |
| GitHub Pages | ✅ | ⚠️ 时好时坏 | ✅ | 备用/海外访问 |
| Gitee Pages | — | — | — | 已下线 |
| Cloudflare Pages / Vercel | ✅ | ❌ 默认域名被墙 | — | 不推荐 |
| 阿里 OSS / 腾讯 COS + CDN | ❌ 低成本付费 | ✅ 最快 | ❌ 需备案域名 | 有备案域名时的上限方案 |

### 一、GitHub Pages（已配置，推送即自动部署）

`.github/workflows/deploy.yml` 已就绪：推送到 `main` 分支后 Actions 自动构建（注入 `NEXT_PUBLIC_BASE_PATH=/ai-agent-landing` 适配子路径）并发布到 GitHub Pages。

### 二、EdgeOne Pages（国内免翻墙，推荐）

1. 注册/登录腾讯云，访问 EdgeOne Pages 控制台：<https://pages.edgeone.ai/>（国际站）或腾讯云国内站搜索「EdgeOne Pages」。
2. 「创建项目」→「导入 Git 仓库」→ 授权 GitHub 并选择本仓库。
3. 构建配置：
   - 框架预设：**Next.js**（或手动设置）
   - 构建命令：`npm run build`
   - 输出目录：`out`
   - 环境变量：**不要**设置 `NEXT_PUBLIC_BASE_PATH`（EdgeOne 部署在域名根路径）
4. 部署完成后获得 `https://<项目名>.edgeone.app` 链接，国内可直连、无需备案。
5. 可选：绑定已 ICP 备案的自定义域名，可切换国内 CDN 节点，访问速度更佳。

> EdgeOne 也支持不绑 Git、直接上传 `out/` 目录（控制台「直接上传」或 `npm i -g edgeone && edgeone pages deploy ./out`）。

## 品牌与文案

品牌名「智枢AI」、统计数字（50+ Skill、100+ 客户等）、Skill 价格、联系方式（邮箱/微信）均为占位示例，正式上线前请替换为真实信息。
