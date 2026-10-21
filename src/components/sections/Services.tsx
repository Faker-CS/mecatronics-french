import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { Cta, PillLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { anchors, services, servicesSection, type Service } from "@/lib/content";

function chunk<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size),
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={service.href}
      className="group relative isolate flex h-[440px] flex-col justify-end overflow-hidden rounded-2xl p-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:h-[560px] lg:h-[min(700px,calc(100svh-140px))]"
    >
      <Image
        src={service.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 624px, 100vw"
        className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[207px] bg-gradient-to-b from-transparent to-black"
      />
      <div className="flex items-end justify-between gap-4">
        <div className="flex max-w-[350px] flex-col gap-2">
          <Eyebrow variant="glow">{service.tag}</Eyebrow>
          <Heading as="h3" size="md" tone="light" className="p-2">
            {service.title}
          </Heading>
        </div>
        <span
          aria-hidden="true"
          className="grid size-14 shrink-0 place-items-center rounded-full bg-snow text-brand transition-transform duration-300 group-hover:rotate-45"
        >
          <ArrowUpRightIcon className="size-7" />
        </span>
      </div>
    </a>
  );
}

export function Services() {
  const rows = chunk(services, 2);

  return (
    <section id={anchors.services} className="bg-night pt-10 pb-20 lg:pb-24">
      <div className="container-site">
        <SectionIntro
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          intro={servicesSection.intro}
          tone="light"
          eyebrowVariant="glow"
          titleClassName="max-w-[590px]"
          className="lg:items-end"
        />

        {/* Rows stack on top of each other while scrolling (desktop). */}
        <div className="mt-14 flex flex-col gap-8 lg:gap-[50px]">
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid gap-8 bg-night lg:sticky lg:grid-cols-2"
              style={{ top: `${96 + i * 16}px` }}
            >
              {row.map((service) => (
                <ServiceCard key={service.tag} service={service} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 px-4 py-2 sm:flex-row">
          <PillLink href={`#${anchors.contact}`} variant="soft">
            {servicesSection.secondaryCta}
          </PillLink>
          <Cta href={`#${anchors.contact}`} arrow="light">
            {servicesSection.primaryCta}
          </Cta>
        </div>
      </div>
    </section>
  );
}
