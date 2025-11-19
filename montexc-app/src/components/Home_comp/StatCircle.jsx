import React, { useEffect, useRef, useState } from "react";

/**
 * StatCircle
 * props:
 *  - value: string like "400+", "0.01", "<14ms", "0%"
 *  - label: string shown below circle
 *  - duration: seconds to animate (default 1.6)
 */
export default function StatCircle({ value, label, duration = 1.6 }) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const startedRef = useRef(false);

  // parsed pieces
  const parse = (str) => {
    // capture optional non-digit prefix, the numeric part, and suffix
    const m = String(str).match(/^(\D*)?([\d,]*\.?\d+)(.*)?$/);
    if (!m) return { prefix: "", number: 0, suffix: "", decimals: 0 };
    const [, prefix = "", numStr = "0", suffix = ""] = m;
    const clean = numStr.replace(/,/g, "");
    const number = parseFloat(clean) || 0;
    const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
    return { prefix, number, suffix, decimals };
  };

  const { prefix, number: targetNum, suffix, decimals } = parse(value);

  const [display, setDisplay] = useState(() => {
    // initial zero display (format)
    if (decimals > 0) return (0).toFixed(decimals);
    return "0";
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const easeOut = (t) => 1 - Math.pow(1 - t, 3); // smooth ease-out

  function formatValue(v) {
    if (decimals === 0) {
      // integer -> add thousands separators
      return new Intl.NumberFormat().format(Math.round(v));
    } else {
      return Number(v).toFixed(decimals);
    }
  }

  function startAnimation() {
    const start = performance.now();
    const durationMs = Math.max(200, duration * 1000);

    function step(now) {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = easeOut(t);
      const val = targetNum * eased;
      setDisplay(formatValue(val));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure final exact formatting
        setDisplay(formatValue(targetNum));
      }
    }

    rafRef.current = requestAnimationFrame(step);
  }

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      {/* gradient border */}
      <div className="rounded-full p-[3px] bg-gradient-to-br from-[#0941f6] to-[#0941f6]">
        {/* inner white circle */}
        <div className="bg-white rounded-full w-20 h-20 sm:w-32 sm:h-32 md:w-30 md:h-30 flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div
              className="text-2xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-gray-900"
              aria-live="polite"
            >
              {/* render prefix + number + suffix */}
              <span>{prefix}</span>
              <span>{display}</span>
              <span>{suffix}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm md:text-base text-gray-700 text-center max-w-[10rem]">
        {label}
      </p>
    </div>
  );
}
