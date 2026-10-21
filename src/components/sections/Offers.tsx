"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import { anchors, offers, offersSection } from "@/lib/content";
import { useReducedMotion } from "@/lib/useReducedMotion";

const AUTOPLAY_MS = 7000;

export function Offers() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const go = useCallback((i: number) => setActive((i + offers.length) % offers.length), []);

  useEffect(() => {
    if (paused || reducedMotion || offers.length < 2) return;
    const id = window.setTimeout(() => go(active + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reducedMotion, go]);

  return (
    <section
      id={anchors.offers}
      aria-roledescription="carrousel"
      aria-label="Nos offres"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative isolate overflow-hidden bg-night py-24 lg:h-[800px] lg:py-0"
    >
      {/* Tilted "#OFFRES pour vous" watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[300%] -translate-x-1/2 -translate-y-1/2 -rotate-[10.6deg]"
      >
        <div className="flex w-max animate-marquee">
          {Array.from({ length: 6 }, (_, i) => (
            <span
              key={i}
              className="pr-10 font-display text-[200px] leading-[0.9] whitespace-nowrap text-snow/[0.06] uppercase lg:text-[388px]"
            >
              {offersSection.watermark}
            </span>
          ))}
        </div>
      </div>
      {/* Left fade + red glow */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 -z-10 w-[324px] bg-gradient-to-r from-night to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 size-[1270px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#ff442f_0%,rgb(221_51_32/0)_70%)] opacity-25 blur-[200px]"
      />

      <div className="container-site relative h-full">
        {offers.map((offer, i) => (
          <div
            key={offer.label}
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${i + 1} sur ${offers.length}`}
            aria-hidden={i !== active}
            inert={i !== active}
            className={cn(
              "grid items-center gap-8 transition-[opacity,transform] duration-700 ease-out lg:absolute lg:inset-0 lg:grid-cols-[590px_1fr]",
              i === active
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-6 opacity-0",
            )}
          >
            <div className="relative z-10 flex flex-col gap-4">
              <Eyebrow>{offer.label}</Eyebrow>
              <div>
                <Heading tone="light" className="p-2">
                  <span className="block">{offer.title[0]}</span>
                  <span className="block">{offer.title[1]}</span>
                </Heading>
                <p className="p-2 text-base leading-[19px] font-bold text-brand uppercase">
                  {offer.subtitle}
                </p>
                <p className="max-w-[386px] p-2 text-base leading-[19px] font-medium text-snow">
                  {offer.text}
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[465px] lg:absolute lg:top-[190px] lg:left-[407px] lg:mx-0">
              <Image
                src={offer.image.src}
                alt={offer.image.alt}
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 465px, 80vw"
                className="relative z-10 h-auto w-full"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-6 left-1/2 h-[51px] w-[90%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,#dd3320_0%,rgb(221_51_32/0)_70%)] opacity-80 blur-[15px]"
              />
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="relative z-20 mt-14 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between lg:absolute lg:inset-x-0 lg:bottom-[52px] lg:mt-0">
          <div className="flex" role="tablist" aria-label="Choisir une offre">
            {offers.map((offer, i) => (
              <div key={offer.label} className="px-4 py-2">
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={offer.label}
                  onClick={() => go(i)}
                  className={cn(
                    "grid size-14 place-items-center rounded-full bg-snow text-base leading-[19px] font-semibold transition-opacity",
                    i === active ? "text-brand" : "text-[#5f5f5f] opacity-20 hover:opacity-50",
                  )}
                >
                  {i + 1}
                </button>
              </div>
            ))}
          </div>
          <div className="px-4 py-2">
            <a
              href={`#${anchors.contact}`}
              className="flex h-14 w-full items-center justify-center rounded-full bg-brand px-4 font-display text-2xl text-snow uppercase transition-colors hover:bg-brand-bright sm:w-[333px]"
            >
              {offersSection.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
