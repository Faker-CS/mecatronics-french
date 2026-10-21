"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GoogleIcon, StarIcon } from "@/components/icons";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { cn } from "@/lib/cn";
import { anchors, reviewsSection, type Review } from "@/lib/content";
import { useCarousel } from "@/lib/useCarousel";
import { useReducedMotion } from "@/lib/useReducedMotion";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-2 px-4 py-2" role="img" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          className={cn("size-6", i < rating ? "text-star" : "text-star-off")}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-surface p-2">
      <div className="flex items-center justify-between">
        <span className="grid size-9 place-items-center rounded-full bg-white">
          <GoogleIcon className="size-[19px]" />
        </span>
        <Stars rating={review.rating} />
      </div>
      <blockquote className="px-4 py-2 text-base leading-[19px] font-medium text-ink-strong">
        « {review.text} »
      </blockquote>
      <figcaption className="flex items-center">
        <span className="p-[7px]">
          <Image
            src={review.avatar}
            alt=""
            width={41}
            height={41}
            className="size-[41px] rounded-full object-cover"
          />
        </span>
        <span className="px-2 py-1 text-base leading-4 font-extrabold whitespace-nowrap text-ink-strong sm:px-4">
          {review.author}
        </span>
        <span className="px-2 py-1 text-xs leading-[14px] font-medium whitespace-nowrap text-muted sm:px-4">
          {review.date}
        </span>
      </figcaption>
    </figure>
  );
}

const AUTOPLAY_MS = 6000;

export function Reviews() {
  const { trackRef, next } = useCarousel();
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => next({ loop: true }), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, next]);

  return (
    <section id={anchors.reviews} className="bg-white pb-20 lg:pb-[100px]">
      <div className="container-site flex flex-col gap-12 lg:gap-[100px]">
        <SectionIntro
          eyebrow={reviewsSection.eyebrow}
          title={reviewsSection.title}
          intro={reviewsSection.intro}
          titleClassName="max-w-[548px]"
        />

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 xl:mx-0 xl:scroll-px-0 xl:px-0"
        >
          {reviewsSection.reviews.map((review, i) => (
            <div
              key={i}
              className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
