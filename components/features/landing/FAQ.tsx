import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-6 py-24 md:px-16 lg:px-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary-500/6 absolute top-1/4 left-0 h-80 w-80 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-500/6 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-5">
          <div className="border-primary-200/70 bg-primary-50 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="bg-primary-500 h-2 w-2 rounded-full" />
            <span className="text-primary-700 text-xs font-semibold tracking-[0.24em] uppercase">
              FAQ
            </span>
          </div>

          <h2 className="font-display max-w-md text-4xl leading-none font-black tracking-[-0.06em] text-slate-900 md:text-5xl lg:text-6xl">
            Questions,
            <br />
            <span className="from-primary-600 bg-gradient-to-r to-emerald-600 bg-clip-text text-transparent">
              answered simply.
            </span>
          </h2>

          <p className="max-w-md text-lg leading-8 text-slate-600">
            The product should feel obvious, premium, and safe the moment your
            team opens it.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-[#f7f9f5] p-2 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <Accordion className="space-y-3" type="single" collapsible>
            {[
              {
                id: "item-1",
                q: "How quickly can we launch?",
                a: "Most schools can be live in 48 hours with a guided onboarding flow, data import support, and clear setup steps.",
              },
              {
                id: "item-2",
                q: "Does it support AI-driven workflows?",
                a: "Yes. Penwwws is built around AI-assisted insights, automation, and summaries so staff can move faster.",
              },
              {
                id: "item-3",
                q: "Is the platform secure?",
                a: "The experience is built around modern security, encrypted data handling, and a privacy-first architecture.",
              },
              {
                id: "item-4",
                q: "Will it work on mobile?",
                a: "Absolutely. The interface is responsive and intentionally crafted for a consistent experience on every device.",
              },
            ].map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="data-[state=open]:border-primary-200 rounded-[1.5rem] border border-slate-200 bg-white px-6 shadow-sm data-[state=open]:bg-white"
              >
                <AccordionTrigger className="hover:text-primary-600 py-5 text-left text-base font-semibold text-slate-900">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-slate-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
