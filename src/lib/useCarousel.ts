"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Minimal scroll-snap carousel: exposes a ref for the scrolling track and
 * prev/next helpers that move by one visible "page".
 */
export function useCarousel<T extends HTMLElement = HTMLDivElement>() {
  const trackRef = useRef<T>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const frame = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByPage = useCallback((direction: 1 | -1, { loop = false } = {}) => {
    const el = trackRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (loop && direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  }, []);

  const prev = useCallback(() => scrollByPage(-1), [scrollByPage]);
  const next = useCallback(
    (opts?: { loop?: boolean }) => scrollByPage(1, opts),
    [scrollByPage],
  );

  return { trackRef, canPrev, canNext, prev, next };
}
