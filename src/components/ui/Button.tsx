import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type Variant = "primary" | "soft" | "light";

const pill: Record<Variant, string> = {
  primary: "bg-brand text-snow hover:bg-brand-bright",
  soft: "bg-brand/10 text-brand backdrop-blur-[118px] hover:bg-brand/20",
  light: "bg-snow text-brand hover:bg-white",
};

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

/** Rounded 56px pill, e.g. "Parlons", "Commandez vos pneus". */
export function PillLink({ href, children, variant = "primary", className }: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-14 items-center justify-center rounded-full px-4 text-base leading-[19px] font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        pill[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

type ArrowTone = "dark" | "light";

const circle: Record<ArrowTone, string> = {
  dark: "bg-ink-strong text-snow",
  light: "bg-snow text-brand",
};

/** Round 56px arrow badge that sits next to a pill CTA. */
export function ArrowBadge({ tone = "dark", className }: { tone?: ArrowTone; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-14 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1",
        circle[tone],
        className,
      )}
    >
      <ArrowRightIcon className="size-7" />
    </span>
  );
}

type CtaProps = {
  children: React.ReactNode;
  arrow?: ArrowTone;
  className?: string;
} & (
  | { href: string; type?: never; disabled?: never }
  | { href?: never; type: "submit" | "button"; disabled?: boolean }
);

/** Red pill + round arrow — the design's main call to action. */
export function Cta({ children, arrow = "dark", className, ...rest }: CtaProps) {
  const inner = (
    <>
      <span className="inline-flex h-14 items-center rounded-full bg-brand px-4 text-base leading-[19px] font-semibold whitespace-nowrap text-snow transition-colors group-hover:bg-brand-bright">
        {children}
      </span>
      <ArrowBadge tone={arrow} />
    </>
  );
  const base = cn(
    "group inline-flex w-fit items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60",
    className,
  );

  if ("href" in rest && rest.href) {
    return (
      <a href={rest.href} className={base}>
        {inner}
      </a>
    );
  }
  return (
    <button type={rest.type} disabled={rest.disabled} className={base}>
      {inner}
    </button>
  );
}
