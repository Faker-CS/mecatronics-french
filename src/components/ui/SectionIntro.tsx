import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  tone?: "light" | "dark";
  eyebrowVariant?: "glow" | "line";
  /** Extra content under the intro paragraph (e.g. carousel arrows). */
  aside?: React.ReactNode;
  titleClassName?: string;
  className?: string;
};

/** Eyebrow + big Bebas title on the left, short paragraph bottom-right. */
export function SectionIntro({
  eyebrow,
  title,
  intro,
  tone = "dark",
  eyebrowVariant = "line",
  aside,
  titleClassName,
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>
        <Heading tone={tone} className={cn("max-w-[560px] p-2", titleClassName)}>
          {title}
        </Heading>
      </div>
      <div className="flex flex-col gap-2 lg:max-w-[386px]">
        <p
          className={cn(
            "p-2 text-base leading-[19px] font-medium",
            tone === "light" ? "text-snow" : "text-muted",
          )}
        >
          {intro}
        </p>
        {aside}
      </div>
    </div>
  );
}
