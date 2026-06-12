"use client";

import { useEffect, useState } from "react";
import PenwwwsIcon from "@/components/icons/Penwwws";
import clsx from "clsx";
import Link from "next/link";

export default function LandingPageNavbar({
  autoScrolled = false,
}: {
  autoScrolled?: boolean;
}) {
  const [scrolled, setScrolled] = useState(autoScrolled);

  useEffect(() => {
    if (autoScrolled) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [autoScrolled]);

  return (
    <nav
      className={clsx(
        "fixed top-0 z-50 w-full px-4 pt-4 transition-all duration-300 md:px-8 lg:px-12",
        {
          "text-slate-900": scrolled,
          "text-white": !scrolled,
        },
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl transition-all duration-300 md:px-6",
          {
            "border-slate-200/70 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.08)]":
              scrolled,
            "border-white/10 bg-white/8 shadow-[0_20px_60px_rgba(2,6,23,0.24)]":
              !scrolled,
          },
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-2 py-1 text-lg font-black tracking-tight text-inherit transition-opacity hover:opacity-80 md:text-xl"
        >
          <PenwwwsIcon className="size-6 md:size-7" />
          <span>Penwwws</span>
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            className={clsx("text-sm font-medium transition-colors", {
              "hover:text-primary-600 text-slate-600": scrolled,
              "text-white/75 hover:text-white": !scrolled,
            })}
            href="#features"
          >
            Features
          </Link>
          <Link
            className={clsx("text-sm font-medium transition-colors", {
              "hover:text-primary-600 text-slate-600": scrolled,
              "text-white/75 hover:text-white": !scrolled,
            })}
            href="#faq"
          >
            FAQ
          </Link>
          <Link
            className={clsx("text-sm font-medium transition-colors", {
              "hover:text-primary-600 text-slate-600": scrolled,
              "text-white/75 hover:text-white": !scrolled,
            })}
            href="#results"
          >
            Results
          </Link>
        </div>

        {/* Auth links */}
        <div className="flex items-center gap-3">
          <Link
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              {
                "hover:text-primary-600 text-slate-700": scrolled,
                "text-white/80 hover:text-white": !scrolled,
              },
            )}
            href="/sign-in"
          >
            Sign In
          </Link>
          <Link
            className="from-primary-600 hover:shadow-primary-600/40 shadow-primary-600/20 rounded-full bg-gradient-to-r to-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            href="/sign-up"
          >
            Start Free
          </Link>
        </div>
      </div>
    </nav>
  );
}
