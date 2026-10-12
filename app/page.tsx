import Nav from "@/components/Nav";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { services, skills, industries, steps, advantages, faqs } from "@/lib/data";

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-medium tracking-widest text-brand-2">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-snug md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 leading-relaxed text-mist">{desc}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <div id="top">
      <Nav />

      {/* Hero */}
      <section className="hero-glow relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="grid-mask absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 text-center">
          <Reveal>
            <span className="chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-mist">
              <Icon name="spark" className="h-4 w-4 text-amber" />
              企业级 AI Agent 服务商 · 行业 Skill 开放市场
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mx-auto mt-7 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
              让 <span className="text-gradient">AI Agent</span> 成为
              <br className="hidden md:block" />
              企业的下一位核心员工
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-mist md:text-lg">
              从智能客服到流程自动化，智枢AI 为企业定制可落地的 AI 数字员工；
              50+ 行业通用 Skill 开箱即用，售卖、分享、定制，一站式满足。
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3 font-medium text-white transition-opacity hover:opacity-90"
              >
                预约免费需求诊断
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#skills"
                className="chip rounded-full px-7 py-3 font-medium text-snow transition-colors hover:border-brand/50"
              >
                浏览 Skill 市场
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["50+", "行业通用 Skill"],
                ["100+", "服务企业客户"],
                ["3 周", "平均交付周期"],
                ["7×24", "持续运营保障"],
              ].map(([num, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-gradient text-3xl font-bold md:text-4xl">{num}</dd>
                  <dd className="mt-1 text-sm text-mist">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 核心服务 */}
      <section id="services" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="CORE SERVICES"
            title="三大核心服务"
            desc="定制开发、通用售卖、开放分享——按企业所处阶段与预算，灵活组合最合适的 AI 落地路径。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="card h-full rounded-2xl p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/25 to-brand-2/25 text-brand-2">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-mist">{s.desc}</p>
                  <ul className="space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-snow/90">
                        <Icon name="check" className="h-4 w-4 shrink-0 text-brand-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skill 市场 */}
      <section id="skills" className="scroll-mt-20 bg-ink-2 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="SKILL MARKET"
            title="行业 Skill 市场精选"
            desc="高频场景能力包持续上新，付费 Skill 享 SLA 保障，社区 Skill 免费分享。"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 100}>
                <div className="card h-full rounded-2xl p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="chip rounded-full px-3 py-1 text-xs text-brand-2">
                      {s.tag}
                    </span>
                    {s.hot && (
                      <span className="rounded-full bg-amber/15 px-3 py-1 text-xs font-medium text-amber">
                        热门
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{s.name}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-mist">{s.desc}</p>
                  <div className="flex items-center justify-between border-t border-line pt-4">
                    <span
                      className={`font-semibold ${s.price === "免费分享" ? "text-brand-2" : "text-snow"}`}
                    >
                      {s.price}
                    </span>
                    <a href="#contact" className="text-sm text-brand transition-colors hover:text-brand-2">
                      了解详情 →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <a
              href="#contact"
              className="chip inline-block rounded-full px-7 py-3 text-sm font-medium transition-colors hover:border-brand/50"
            >
              查看全部 50+ Skill
            </a>
          </Reveal>
        </div>
      </section>

      {/* 行业方案 */}
      <section id="industries" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="INDUSTRIES"
            title="深耕六大行业场景"
            desc="每个行业都有沉淀成熟的 Agent 模板与 Skill 组合，复用经验、缩短落地周期。"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((it, i) => (
              <Reveal key={it.name} delay={(i % 3) * 100}>
                <div className="card flex items-center gap-5 rounded-2xl p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/25 to-brand-2/25 text-brand-2">
                    <Icon name={it.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{it.name}</h3>
                    <p className="mt-1 text-sm text-mist">{it.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section id="process" className="scroll-mt-20 bg-ink-2 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="PROCESS"
            title="四步走完 AI 落地全程"
            desc="从免费诊断到长期陪跑，每一步都有明确交付物与验收标准。"
          />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((st, i) => (
              <Reveal key={st.no} delay={i * 120}>
                <div className="relative h-full rounded-2xl border border-line p-6">
                  <span className="text-gradient text-4xl font-bold">{st.no}</span>
                  <h3 className="mb-2 mt-4 text-lg font-semibold">{st.title}</h3>
                  <p className="text-sm leading-relaxed text-mist">{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 优势 */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow="WHY US" title="为什么选择智枢AI" />
          <div className="grid gap-6 sm:grid-cols-2">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 120}>
                <div className="card flex gap-5 rounded-2xl p-7">
                  <Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-brand-2" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{a.title}</h3>
                    <p className="text-sm leading-relaxed text-mist">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-ink-2 py-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHead eyebrow="FAQ" title="常见问题" />
          <div className="space-y-4">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group rounded-2xl border border-line bg-ink-3/60 px-6 py-5 open:border-brand/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-xl text-mist transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-mist">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="hero-glow relative overflow-hidden rounded-3xl border border-line px-6 py-16 text-center md:py-20">
              <div className="grid-mask absolute inset-0" />
              <div className="relative">
                <h2 className="mx-auto max-w-xl text-3xl font-bold leading-snug md:text-4xl">
                  现在预约，获取<span className="text-gradient">免费需求诊断</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-mist">
                  一次 30 分钟的深度沟通，帮你找到企业内最值得 AI 化的场景，并给出可落地的方案建议。
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="mailto:liyu.global2021@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3 font-medium text-white transition-opacity hover:opacity-90"
                  >
                    邮件联系我们
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <span className="chip rounded-full px-7 py-3 text-sm text-mist">
                    微信：zhishu_agent（备注"官网咨询"）
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-mist md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-xs font-bold text-white">
              枢
            </span>
            <span>智枢AI · 让每个企业拥有自己的 AI 数字员工</span>
          </div>
          <p>© 2026 智枢AI 保留所有权利</p>
        </div>
      </footer>
    </div>
  );
}
