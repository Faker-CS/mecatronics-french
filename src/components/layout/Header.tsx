"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { PillLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { anchors, navLinks, site } from "@/lib/content";

/**
 * Fixed header. Over the hero it shows the glass nav pill (Figma "hero");
 * once the page scrolls it collapses into the burger + "Parlons" variant
 * seen on the offers frame. Below `lg` the burger is always used.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const opener = menuButtonRef.current;
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding] duration-300",
          scrolled ? "bg-night/70 py-2 backdrop-blur-xl" : "py-4",
        )}
      >
        <div className="container-site relative flex items-center justify-between gap-6">
          <a href={`#${anchors.home}`} className="shrink-0" aria-label={`${site.name} — accueil`}>
            <Image
              src={site.logo.src}
              alt={site.name}
              width={site.logo.width}
              height={site.logo.height}
              priority
              className={cn(
                "h-auto transition-[width] duration-300",
                scrolled ? "w-[96px]" : "w-[110px]",
              )}
            />
          </a>

          <nav
            aria-label="Navigation principale"
            className={cn(
              "absolute left-1/2 hidden -translate-x-1/2 rounded-[52px] bg-white/[0.02] p-2 backdrop-blur-[100px] transition-opacity duration-300 lg:block",
              scrolled && "pointer-events-none opacity-0",
            )}
          >
            <ul className="flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-full px-4 py-2 font-nav text-base leading-[19px] font-medium whitespace-nowrap text-white transition-colors hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Ouvrir le menu"
              className={cn(
                "grid size-14 place-items-center rounded-full bg-brand/20 text-brand backdrop-blur-[67px] transition-[opacity,transform] duration-300 hover:bg-brand/30",
                !scrolled && "lg:pointer-events-none lg:scale-75 lg:opacity-0",
              )}
            >
              <MenuIcon className="size-7" />
            </button>
            <PillLink href={`#${anchors.contact}`} className="font-semibold">
              Parlons
            </PillLink>
          </div>
        </div>
      </header>

      {/* Menu panel — outside <header>: its backdrop-filter would otherwise
          become the containing block of this fixed overlay. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-night/95 backdrop-blur-xl transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        inert={!open}
      >
        <div className="container-site flex items-center justify-between py-4">
          <Image
            src={site.logo.src}
            alt={site.name}
            width={site.logo.width}
            height={site.logo.height}
            className="h-auto w-[110px]"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="grid size-14 place-items-center rounded-full bg-brand/20 text-brand hover:bg-brand/30"
          >
            <CloseIcon className="size-7" />
          </button>
        </div>
        <nav aria-label="Menu" className="container-site flex flex-1 flex-col justify-center">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={cn(
                  "transition-[opacity,transform] duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl text-snow uppercase transition-colors hover:text-brand sm:text-7xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
