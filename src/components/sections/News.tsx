"use client";

import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { Cta } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { cn } from "@/lib/cn";
import { anchors, newsSection } from "@/lib/content";
import { useCarousel } from "@/lib/useCarousel";

export function News() {
  const { trackRef, canPrev, canNext, prev, next } = useCarousel();

  const arrows = (
    <div className="flex justify-end gap-1 p-2">
      <button
        type="button"
        onClick={prev}
        disabled={!canPrev}
        aria-label="Articles précédents"
        className="grid size-9 place-items-center rounded-full border border-brand text-brand transition-colors hover:bg-brand/10 disabled:opacity-40"
      >
        <ArrowLeftIcon className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => next()}
        disabled={!canNext}
        aria-label="Articles suivants"
        className="grid size-9 place-items-center rounded-full bg-brand text-snow transition-colors hover:bg-brand-bright disabled:opacity-40"
      >
        <ArrowRightIcon className="size-5" />
      </button>
    </div>
  );

  return (
    <section id={anchors.news} className="bg-white py-20 lg:pt-[100px] lg:pb-[100px]">
      <div className="container-site flex flex-col gap-10">
        <SectionIntro
          eyebrow={newsSection.eyebrow}
          title={newsSection.title}
          intro={newsSection.intro}
          aside={arrows}
          titleClassName="max-w-[549px]"
        />

        <div
          ref={trackRef}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-[27px] overflow-x-auto px-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 xl:mx-0 xl:scroll-px-0 xl:px-0"
        >
          {newsSection.articles.map((article, i) => (
            <article
              key={i}
              className="flex w-[85%] shrink-0 snap-start flex-col gap-[22px] sm:w-[calc((100%-27px)/2)] lg:w-[calc((100%-54px)/3)]"
            >
              <div className="relative aspect-[409/264] overflow-hidden rounded-2xl">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 409px, (min-width: 640px) 50vw, 85vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="line-clamp-3 px-2 py-1 text-lg leading-[22px] font-semibold text-ink-strong">
                  {article.title}
                </h3>
                <p className="line-clamp-2 px-2 py-1 text-base leading-[19px] font-medium text-muted">
                  {article.excerpt}
                </p>
              </div>
              <a
                href={article.href}
                className={cn(
                  "group inline-flex w-fit items-center gap-2 rounded-lg py-2 pr-2 pl-4 text-base leading-[19px] font-bold text-brand uppercase",
                )}
              >
                {newsSection.readMore}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>

        <div className="flex justify-center px-4 py-2">
          <Cta href="#">{newsSection.cta}</Cta>
        </div>
      </div>
    </section>
  );
}
