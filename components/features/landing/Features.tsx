import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Marquee } from "@/components/magicui/marquee";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  CodeXml,
  Database,
  File,
  FileText,
  Fingerprint,
  NotebookPen,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeamMultipleOutput";

type NotificationItemType = {
  name: string;
  description: string;
  icon: string | React.ReactNode;
  color: string;
  time: string;
};

const files = [
  {
    name: "Lecture-3.pptx",
    body: "Smarter curriculum organization for teams that need speed and clarity.",
  },
  {
    name: "Assignment.pdf",
    body: "Automated file tagging so documents are always easy to find.",
  },
  {
    name: "Practical-codes.txt",
    body: "Fast content distribution for classrooms and hybrid learning.",
  },
  {
    name: "Lecture-notes.docx",
    body: "Centralized learning material that feels beautifully organized.",
  },
];

let notifications = [
  {
    name: "Jane Doe",
    description: "AI flagged attendance anomaly and resolved it instantly",
    time: "15m ago",
    icon: <Database className="text-white" />,
    color: "#00C9A7",
  },
  {
    name: "Alice",
    description: "Smart summary generated for this morning's class",
    time: "10m ago",
    icon: <CodeXml className="text-white" />,
    color: "#FFB800",
  },
  {
    name: "Bob",
    description: "Parent communication workflow completed",
    time: "5m ago",
    icon: <Shield className="text-white" />,
    color: "#FF3D71",
  },
  {
    name: "John Doe",
    description: "Adaptive grading recommendations are ready",
    time: "2m ago",
    icon: <Sparkles className="text-white" />,
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({
  name,
  description,
  icon,
  color,
  time,
}: NotificationItemType) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-y border-slate-200/70 bg-[#f6f8f5] px-6 py-24 md:px-16 lg:px-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary-500/8 absolute top-10 left-1/3 h-80 w-80 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-emerald-500/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="space-y-5">
            <div className="border-primary-200/70 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
              <span className="bg-primary-500 h-2 w-2 rounded-full" />
              <span className="text-primary-700 text-xs font-semibold tracking-[0.24em] uppercase">
                Product surface
              </span>
            </div>
            <h2 className="font-display max-w-xl text-4xl leading-none font-black tracking-[-0.06em] text-slate-900 md:text-5xl lg:text-6xl">
              An AI-native school stack,
              <span className="from-primary-600 bg-gradient-to-r to-emerald-600 bg-clip-text text-transparent">
                {" "}
                designed to feel premium.
              </span>
            </h2>
          </div>

          <div className="space-y-5">
            <p className="max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              A premium control surface for school teams. The visuals stay
              front-and-center while AI quietly removes repetitive work behind
              attendance, assignments, files, reporting, and intervention
              planning.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "AI grading",
                "Live attendance",
                "Smart documents",
                "Mobile first",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <BentoGrid>
          <BentoCard
            Icon={File}
            name="AI Document Library"
            description="Auto-tagged lecture notes, assignments, and files with a calm searchable workflow."
            className="border-primary-200/60 col-span-3 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.05)] lg:col-span-2"
            background={
              <Marquee
                pauseOnHover
                className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_35%,#000_100%)] [--duration:20s]"
              >
                {files.map((file, index) => (
                  <figure
                    key={index}
                    className={cn(
                      "relative h-64 w-44 overflow-hidden rounded-2xl border p-4",
                      "border-slate-900/10 bg-white/70 backdrop-blur-sm",
                      "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                    )}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <figcaption className="text-sm font-semibold text-slate-900">
                        {file.name}
                      </figcaption>
                      <p className="text-xs leading-5 text-slate-500">
                        {file.body}
                      </p>
                    </div>
                  </figure>
                ))}
              </Marquee>
            }
          />

          <BentoCard
            Icon={NotebookPen}
            name="AI Grading Assistant"
            description="Beautifully summarized performance data, recommendations, and next-step guidance."
            background={
              <div className="absolute flex h-full w-full items-center [mask-image:linear-gradient(to_top,transparent_35%,#000_100%)] transition-transform duration-300 hover:scale-105">
                <div className="border-primary-200/70 to-primary-50 absolute mx-8 flex w-full -translate-y-10 flex-col rounded-3xl border bg-gradient-to-br from-white py-1 shadow-xl lg:right-20 lg:m-0 lg:translate-x-1/2">
                  <h1 className="p-4 px-5 text-sm font-semibold text-slate-900">
                    John Doe — AI review
                  </h1>
                  <div className="border-primary-100 border-t p-3 px-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Performance</span>
                      <p className="text-primary-600 font-semibold">92%</p>
                    </div>
                  </div>
                  <div className="border-primary-100 border-t p-3 px-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Improvement</span>
                      <p className="font-semibold text-emerald-600">+12pts</p>
                    </div>
                  </div>
                  <div className="border-primary-100 bg-primary-50 border-t p-3 px-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Next step</span>
                      <p className="text-primary-700 font-semibold">Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            className="border-primary-200/60 col-span-3 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.05)] lg:col-span-1"
          />

          <BentoCard
            Icon={Fingerprint}
            name="AI Attendance Engine"
            description="Real-time tracking with biometric recognition and anomaly detection."
            background={
              <AnimatedList
                delay={1500}
                className="absolute right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_35%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
              >
                {notifications.map((item, idx) => (
                  <Notification {...item} key={idx} />
                ))}
              </AnimatedList>
            }
            className="border-primary-200/60 col-span-3 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.05)] lg:col-span-1"
          />

          <BentoCard
            Icon={FileText}
            name="AI Assignment Studio"
            description="Adaptive assignment flows that feel crisp, fast, and personalized."
            background={
              <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] transition-transform duration-300 hover:scale-105">
                <div className="absolute -bottom-14 w-full">
                  <AnimatedBeamMultipleOutputDemo />
                </div>
              </div>
            }
            className="border-primary-200/60 col-span-3 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.05)] lg:col-span-1"
          />

          <BentoCard
            Icon={Smartphone}
            name="AI Mobile Companion"
            description="A polished mobile view that mirrors the desktop system without compromise."
            background={
              <div className="absolute flex h-full w-full items-center justify-center [mask-image:linear-gradient(to_top,transparent_35%,#000_100%)] transition-transform duration-300 hover:scale-105">
                <Iphone15Pro
                  className="h-72 w-64"
                  src="/images/dashboard-mobile.png"
                />
              </div>
            }
            className="border-primary-200/60 col-span-3 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.05)] lg:col-span-1"
          />

          <BentoCard
            Icon={BarChart3}
            name="AI Command Center"
            description="A clean command surface for growth, performance, and intervention signals."
            background={
              <div className="absolute inset-0 flex items-end justify-center [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
                <div className="mb-8 grid w-[70%] grid-cols-3 gap-3">
                  {[68, 92, 74].map((height, index) => (
                    <div
                      key={index}
                      className="from-primary-600 rounded-t-2xl bg-gradient-to-t to-emerald-400 shadow-lg"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>
            }
            className="border-primary-200/60 col-span-3 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.05)] lg:col-span-1"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
