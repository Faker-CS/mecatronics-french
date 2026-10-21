"use client";

import { useEffect, useState } from "react";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Rotates through the hero highlights ("Réponse rapide", …) one at a time. */
export function HighlightTicker({ items, interval = 2500 }: { items: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => window.clearInterval(id);
  }, [items.length, interval, reducedMotion]);

  return (
    <div className="flex items-center p-2">
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand text-snow">
        <CheckIcon className="size-4" />
      </span>
      <div className="relative h-[35px] w-[220px] overflow-hidden" aria-live="polite">
        {items.map((item, i) => (
          <span
            key={item}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 flex items-center p-2 text-base leading-[19px] font-medium whitespace-nowrap text-snow transition-[transform,opacity] duration-500 ease-out",
              i === index
                ? "translate-y-0 opacity-100"
                : i === (index - 1 + items.length) % items.length
                  ? "-translate-y-full opacity-0"
                  : "translate-y-full opacity-0",
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
