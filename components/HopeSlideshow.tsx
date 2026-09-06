"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type HopeSlide = {
  src: string;
  alt: string;
  line: string;
  quiet?: string;
};

type Props = {
  slides: HopeSlide[];
  kicker?: string;
  sub?: string;
};

const INTERVAL = 6500;

export function HopeSlideshow({ slides, kicker, sub }: Props) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = slides.length;
  const slide = slides[i];

  const go = useCallback(
    (n: number) => {
      if (!count) return;
      setI(((n % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (reduce || paused || count < 2) return;
    const id = window.setInterval(() => go(i + 1), INTERVAL);
    return () => window.clearInterval(id);
  }, [i, paused, reduce, count, go]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go]);

  if (!slide) return null;

  return (
    <section
      className="hope-show"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      {(kicker || sub) && (
        <div className="hope-show-intro">
          {kicker ? (
            <p className="hope-kicker font-display text-4xl uppercase tracking-tight sm:text-6xl">
              {kicker}
            </p>
          ) : null}
          {sub ? (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3D5A80]">{sub}</p>
          ) : null}
        </div>
      )}

      <div
        className="hope-show-stage"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (dx > 48) go(i - 1);
          if (dx < -48) go(i + 1);
        }}
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.figure
            key={slide.src}
            className="hope-show-frame"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={slide.src}
              alt={slide.alt}
              className="hope-show-img"
              initial={reduce ? false : { scale: 1 }}
              animate={reduce ? { scale: 1 } : { scale: 1.045 }}
              transition={reduce ? { duration: 0 } : { duration: 7.2, ease: "linear" }}
            />
          </motion.figure>
        </AnimatePresence>

        <div className="hope-show-veil" aria-hidden />

        <div className="hope-slide-glass" aria-live="polite">
          <p className="hope-show-line">{slide.line}</p>
          {slide.quiet ? <p className="hope-show-quiet">{slide.quiet}</p> : null}
        </div>

        <div className="hope-show-chrome">
          <button
            type="button"
            className="hope-show-btn"
            aria-label="Previous photograph"
            onClick={() => go(i - 1)}
          >
            ‹
          </button>
          <ol className="hope-slide-dots">
            {slides.map((s, idx) => (
              <li key={s.src}>
                <button
                  type="button"
                  className={`hope-slide-dot${idx === i ? " is-on" : ""}`}
                  aria-label={`Show photograph ${idx + 1} of ${count}`}
                  aria-current={idx === i}
                  onClick={() => go(idx)}
                />
              </li>
            ))}
          </ol>
          <button
            type="button"
            className="hope-show-btn"
            aria-label="Next photograph"
            onClick={() => go(i + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default HopeSlideshow;
