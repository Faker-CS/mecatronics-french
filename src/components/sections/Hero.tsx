import { Cta } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HighlightTicker } from "@/components/sections/HighlightTicker";
import { anchors, hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id={anchors.home}
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-night pt-28 pb-10 lg:h-[800px] lg:min-h-0 lg:pt-36 lg:pb-[88px]"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center]"
      >
        <source src="/videos/hero-bg-vd.mp4" type="video/mp4" />
      </video>
      {/* 20% black overlay from the design + extra legibility on small screens */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/20" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70 lg:hidden"
      />

      <div className="container-site flex flex-1 flex-col justify-between gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4 lg:w-[520px]">
            <Eyebrow variant="glow">{hero.eyebrow}</Eyebrow>
            <Heading as="h1" size="xl" tone="light" className="p-2">
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Heading>
          </div>
          <p className="max-w-[359px] p-2 text-base leading-[19px] font-medium text-snow lg:mt-11">
            {hero.intro}
          </p>
        </div>

        <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <HighlightTicker items={hero.highlights} />
          <div className="p-2">
            <Cta href={`#${anchors.contact}`}>{hero.cta}</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
