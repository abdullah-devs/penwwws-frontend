"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      heroRef.current
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach((node, index) => {
          const strength = (index + 1) * 8;
          node.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#071410] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(25,176,123,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,203,148,0.12),transparent_28%),linear-gradient(to_bottom,rgba(7,20,16,0.96),rgba(5,12,10,1))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:84px_84px] opacity-[0.14]" />
      </div>

      <div className="relative z-10 px-6 pt-28 pb-20 md:px-16 md:pb-24 lg:px-32 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
                <span className="bg-primary-400 h-2 w-2 rounded-full shadow-[0_0_0_6px_rgba(25,176,123,0.15)]" />
                <span className="text-xs font-semibold tracking-[0.24em] text-white/70 uppercase">
                  AI-native school operations
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="font-display max-w-3xl text-5xl leading-[0.95] font-black tracking-[-0.06em] text-balance md:text-6xl lg:text-8xl">
                  Build your school
                  <br />
                  like an{" "}
                  <span className="from-primary-300 via-primary-400 bg-gradient-to-r to-emerald-300 bg-clip-text text-transparent">
                    AI operating system
                  </span>{" "}
                  for education.
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                  Penwwws gives school teams an AI control room for attendance,
                  forecasting, communication, and automated workflows. It feels
                  premium because it behaves like an intelligent product, not an
                  admin panel.
                </p>
              </div>

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
                  Explore the experience
                </Link>
              </div>

              <div className="grid max-w-2xl grid-cols-3 gap-4 pt-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <div className="text-sm text-white/55">AI automation</div>
                  <div className="font-display mt-1 text-2xl font-bold text-white">
                    24/7
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <div className="text-sm text-white/55">Forecasting</div>
                  <div className="font-display mt-1 text-2xl font-bold text-white">
                    Real-time
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <div className="text-sm text-white/55">Deployment</div>
                  <div className="font-display mt-1 text-2xl font-bold text-white">
                    48h
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                data-parallax
                className="absolute top-8 -left-8 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl lg:block"
              >
                <div className="text-xs tracking-[0.2em] text-white/45 uppercase">
                  Live
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  AI routing active
                </div>
              </div>

              <div
                data-parallax
                className="absolute top-20 -right-5 hidden rounded-2xl border border-white/10 bg-[#0e1f18]/90 p-4 shadow-2xl backdrop-blur-xl lg:block"
              >
                <div className="text-xs text-white/50">Attendance anomaly</div>
                <div className="font-display mt-1 text-lg font-semibold text-white">
                  3 AI alerts resolved
                </div>
                <div className="mt-2 h-1.5 w-36 rounded-full bg-white/10">
                  <div className="from-primary-400 h-full w-2/3 rounded-full bg-gradient-to-r to-emerald-400" />
                </div>
              </div>

              <div className="relative mx-auto max-w-[620px]">
                <div className="from-primary-500/25 absolute inset-0 rounded-[2rem] bg-gradient-to-r via-emerald-500/15 to-transparent blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#08130f] p-4">
                    <div className="flex items-center justify-between border-b border-white/8 pb-4">
                      <div>
                        <div className="text-xs tracking-[0.22em] text-white/45 uppercase">
                          Penwwws dashboard
                        </div>
                        <div className="mt-1 text-sm font-medium text-white/80">
                          Operational overview
                        </div>
                      </div>
                      <div className="border-primary-400/25 bg-primary-400/10 text-primary-300 rounded-full border px-3 py-1 text-xs font-semibold">
                        AI ready
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
                      <div className="overflow-hidden rounded-3xl border border-white/8 bg-black/20">
                        <Image
                          src="/images/dashboard.png"
                          width={1659}
                          height={1008}
                          priority
                          alt="Penwwws dashboard"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="grid gap-4">
                        <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                          <div className="text-xs tracking-[0.18em] text-white/45 uppercase">
                            Active insights
                          </div>
                          <div className="mt-3 space-y-3">
                            <div className="flex items-center justify-between text-sm text-white/80">
                              <span>Attendance</span>
                              <span className="text-primary-300">98%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10">
                              <div className="from-primary-400 h-full w-[98%] rounded-full bg-gradient-to-r to-emerald-400" />
                            </div>
                          </div>
                        </div>

                        <div className="rounded-3xl border border-white/8 bg-white/5 p-4">
                          <div className="text-xs tracking-[0.18em] text-white/45 uppercase">
                            AI summary
                          </div>
                          <p className="mt-3 text-sm leading-6 text-white/72">
                            Detects patterns, predicts workload peaks, and keeps
                            school operations one step ahead.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-parallax
                className="absolute -bottom-8 left-8 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl"
              >
                <div className="text-xs tracking-[0.18em] text-white/45 uppercase">
                  Signal
                </div>
                <div className="font-display mt-1 text-sm font-semibold text-white">
                  Predictive analytics live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
