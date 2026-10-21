"use client";

import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import { anchors, howItWorks } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * 3-step explainer. The active step's track fills up; when the fill
 * finishes the next step becomes active. Paused off-screen and on hover.
 */
export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = inView && !hovered;
  const { steps } = howItWorks;

  return (
    <section
      ref={ref}
      id={anchors.howItWorks}
      className="bg-white py-20 lg:flex lg:h-[800px] lg:items-center lg:py-0"
    >
      <div className="container-site flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-4 lg:w-[640px]">
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <Heading className="p-2">{howItWorks.title}</Heading>
          <p className="max-w-[386px] p-2 text-base leading-[19px] font-medium text-muted">
            {howItWorks.intro}
          </p>
        </div>

        <ol
          className="flex flex-col gap-4 lg:w-[410px]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <li key={step.title} className="flex min-h-[180px] gap-5">
                <span className="relative w-[5px] shrink-0 overflow-hidden rounded-full bg-line">
                  {isActive && reducedMotion && (
                    <span aria-hidden="true" className="absolute inset-0 rounded-full bg-brand" />
                  )}
                  {isActive && !reducedMotion && (
                    <span
                      key={active}
                      aria-hidden="true"
                      onAnimationEnd={() => setActive((a) => (a + 1) % steps.length)}
                      className="absolute inset-0 origin-top animate-step-fill rounded-full bg-brand"
                      style={{ animationPlayState: running ? "running" : "paused" }}
                    />
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "flex gap-4 text-left transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-50 hover:opacity-75",
                  )}
                >
                  <span className="grid size-14 shrink-0 place-items-center rounded-lg bg-brand/10 p-2 text-xs leading-[11px] font-semibold text-brand uppercase">
                    <span>
                      Step
                      <br />
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="flex flex-col">
                    <span className="px-2 py-1 text-lg leading-[22px] font-semibold text-ink uppercase">
                      {step.title}
                    </span>
                    <span className="px-2 py-1 text-base leading-[19px] font-medium text-muted">
                      {step.text}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
