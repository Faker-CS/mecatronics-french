import Image from "next/image";
import { Cta, PillLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { anchors, contactBanner } from "@/lib/content";

export function ContactBanner() {
  return (
    <section className="relative isolate flex min-h-[640px] flex-col overflow-hidden bg-night pt-10 pb-10 lg:h-[800px]">
      <Image
        src="/images/banner-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[65%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/60 lg:hidden"
      />

      <div className="container-site flex flex-1 flex-col justify-between gap-10">
        <div className="flex max-w-[640px] flex-col gap-4">
          <Eyebrow>{contactBanner.eyebrow}</Eyebrow>
          <Heading tone="light" className="p-2">
            {contactBanner.title}
          </Heading>
          <p className="max-w-[386px] p-2 text-base leading-[19px] font-medium text-snow">
            {contactBanner.intro}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 px-0 py-2 sm:flex-row sm:items-center sm:justify-end sm:px-4">
          <PillLink href={`#${anchors.contact}`} variant="soft">
            {contactBanner.secondaryCta}
          </PillLink>
          <Cta href={`#${anchors.contact}`} arrow="light">
            {contactBanner.primaryCta}
          </Cta>
        </div>
      </div>
    </section>
  );
}
