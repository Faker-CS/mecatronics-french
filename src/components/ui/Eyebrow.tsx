import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  /**
   * `glow` — red radial pill used over photos / dark backgrounds.
   * `line` — red label with a short underline, used on most sections.
   */
  variant?: "glow" | "line";
  className?: string;
};

export function Eyebrow({ children, variant = "line", className }: EyebrowProps) {
  if (variant === "glow") {
    return (
      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full bg-black/10 bg-[radial-gradient(ellipse_at_center,rgb(221_51_32/0)_0%,rgb(221_51_32/0.43)_100%)] p-2 text-xs leading-[14px] font-semibold uppercase text-brand-bright backdrop-blur-[80px]",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex w-fit flex-col gap-2 p-2", className)}>
      <span className="text-xs leading-[14px] font-semibold uppercase text-brand">
        {children}
      </span>
      <span aria-hidden="true" className="h-px w-[132px] bg-brand/50" />
    </span>
  );
}
