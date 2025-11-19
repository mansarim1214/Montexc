"use client";
import React, { useRef, useEffect } from "react";

const WhyPartner = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // initial safe styles for smooth transform
    el.style.transition = "transform 200ms ease-out";
    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";

    const maxTilt = 18; // increase for stronger tilt
    let ticking = false;

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const onScroll = () => {
      if (!el) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight || document.documentElement.clientHeight;

          // visible fraction of the section (0..1)
          // when top is viewport bottom => 0, when bottom is viewport top => 1
          const visible = clamp((vh - rect.top) / (vh + rect.height), 0, 1);

          // map visible [0..1] -> tilt [+maxTilt .. -maxTilt]
          const tilt = (visible * 2 - 1) * -maxTilt;

          // apply perspective + rotateX
          el.style.transform = `perspective(1200px) rotateX(${tilt}deg)`;

          ticking = false;
        });
        ticking = true;
      }
    };

    // initial update
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      // clean styles
      if (el) {
        el.style.transform = "";
        el.style.transition = "";
        el.style.transformStyle = "";
        el.style.willChange = "";
      }
    };
  }, []);

  return (
    <section  className="md:py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center md:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
            Why us
          </span>
          <h2 className="text-3xl md:text-4xl mt-3 font-bold">
            Why partner with <span className="text-[#0941f6]">Montexc?</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-3xl max-w-6xl p-5 mx-auto bg-[#0941f60a] border border-[#0941f61f]" ref={sectionRef}>
          {/* Card 1 */}
          <div className="rounded-2xl shadow-lg text-gray-900 p-6 border border-white">
            <span className="inline-block px-3 py-1 text-xs font-medium text-[#0941f6] bg-blue-50 rounded-full border border-dashed border-[#0941f6]">
              Trusted
            </span>
            <h3 className="text-xl font-bold my-3">
              Trusted Worldwide
            </h3>
            <p className="text-gray-600">
             Trusted by participants in over 150 countries. Montexc offers an ultra-fast deposit system, allowing traders to use any crypto wallet with ease.

            </p>
            <img
              src="https://www.fxopulence.com/Assets/Images/globe-bg.svg"
              alt="world map"
            />
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl shadow-lg text-gray-900 p-6 border border-white">
            <span className="inline-block px-3 py-1 text-xs font-medium text-[#0941f6] bg-blue-50 rounded-full border border-dashed border-[#0941f6]">
              Payments
            </span>
            <h3 className="text-xl font-bold my-3">
              Promotional Tools &amp; Material
            </h3>
            <p className="text-gray-600">
              Montexc provides a lightning-fast deposit system, enabling traders to fund their accounts seamlessly using any crypto wallet. 

            </p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <img src="https://www.fxopulence.com/Assets/Images/payments-bg.svg" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl shadow-lg text-gray-900 p-6 border border-white">
            <span className="inline-block px-3 py-1 text-xs font-medium text-[#0941f6] bg-blue-50 rounded-full border border-dashed border-[#0941f6]">
              Analytics
            </span>
            <h3 className="text-xl font-bold my-3">
              Detailed, Realtime Statistics
            </h3>
            <p className="text-gray-600">
              Montexc offers advanced analytics with live performance tracking. Combined with its ultra-fast deposit system, traders can fund accounts instantly using any crypto wallet.

            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <img
                  src="https://www.fxopulence.com/Assets/Images/analytics-bg.svg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl shadow-lg text-gray-900 p-6 border border-white">
            <span className="inline-block px-3 py-1 text-xs font-medium text-green bg-green-50 rounded-full border border-dashed border-[#0941f6]">
              Withdrawal
            </span>
            <h3 className="text-xl font-bold my-3">Instant Withdrawals</h3>
            <p className="text-gray-600">
              Montexc ensures a seamless experience with instant withdrawals and a lightning-fast deposit system, allowing traders to use any crypto wallet with ease.

            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <img
                src="https://www.fxopulence.com/Assets/Images/withdraw-bg.svg"
                alt="usdc"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
