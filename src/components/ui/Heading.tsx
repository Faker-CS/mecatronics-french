import { cn } from "@/lib/cn";

type HeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  /** `xl` = hero (100/90), `lg` = section title (82/74), `md` = card title (38/34). */
  size?: "xl" | "lg" | "md";
  tone?: "light" | "dark";
  className?: string;
};

const sizes = {
  xl: "text-[56px] leading-[0.9] sm:text-[80px] lg:text-[100px]",
  lg: "text-[48px] leading-[0.9] sm:text-[64px] lg:text-[82px]",
  md: "text-[30px] leading-[0.9] sm:text-[38px]",
};

export function Heading({
  children,
  as: Tag = "h2",
  size = "lg",
  tone = "dark",
  className,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display uppercase",
        sizes[size],
        tone === "light" ? "text-snow" : "text-ink",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
