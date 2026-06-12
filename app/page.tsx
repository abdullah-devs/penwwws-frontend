import Link from "next/link";

import LandingPageNavbar from "@/components/features/landing/LandingPageNavbar";
import Hero from "@/components/features/landing/Hero";
import Features from "@/components/features/landing/Features";
import FAQ from "@/components/features/landing/FAQ";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <LandingPageNavbar />
      <Hero />

      <section id="results" className="-mt-10 px-6 md:px-16 lg:px-32">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-slate-200/70 bg-white/90 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:grid-cols-3 md:p-6">
          {[
            {
              label: "Agentic workflows",
              value: "24/7",
              detail: "Let AI handle the repeat work across the school day.",
            },
            {
              label: "Predictive intelligence",
              value: "Real-time",
              detail: "Turn attendance, performance, and trends into action.",
            },
            {
              label: "Launch speed",
              value: "48 hours",
              detail: "Fast onboarding with a polished AI-first experience.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-slate-200 bg-[#f7f9f5] p-5"
            >
              <div className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                {item.label}
              </div>
              <div className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">
                {item.value}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Features />
      <FAQ />

      <section
        id="cta"
        className="relative overflow-hidden bg-[#071410] px-6 py-24 text-white md:px-16 lg:px-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-primary-500/20 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="bg-primary-400 h-2 w-2 rounded-full" />
              <span className="text-xs font-semibold tracking-[0.24em] text-white/70 uppercase">
                Ready when you are
              </span>
            </div>

            <h2 className="font-display max-w-2xl text-4xl leading-none font-black tracking-[-0.06em] text-balance md:text-6xl lg:text-7xl">
              Deploy the AI layer your school deserves.
            </h2>

            <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Give staff a premium system that feels intuitive, responsive, and
              AI-assisted from the very first login.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sign-up"
                className="from-primary-500 inline-flex items-center justify-center rounded-full bg-gradient-to-r to-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(25,176,123,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start free trial
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-xl transition-colors duration-300 hover:bg-white/10"
              >
                See the product
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Smart onboarding",
                text: "Move from setup to live usage without the usual friction.",
              },
              {
                title: "Always-on support",
                text: "A product experience backed by real humans and AI assistance.",
              },
              {
                title: "Built for trust",
                text: "Modern security, clean UX, and polished execution throughout.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="text-sm font-semibold tracking-[0.2em] text-white/45 uppercase">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
