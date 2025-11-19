"use client";
import React, { useRef, useEffect } from "react";
import { BarChart3, ShieldCheck, Layers, Lock, Gauge, Wallet } from "lucide-react";

const PaymentMethod = () => {
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
          const vh =
            window.innerHeight || document.documentElement.clientHeight;

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
    <section className="md:py-20 pt-10">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center md:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
            Payment method
          </span>
          <h2 className="text-3xl md:text-4xl my-3 font-bold">
            Trade with Complete Confidence & Control
          </h2>
          <p className="text-xl text-gray-500">
            Experience the advantages of decentralized trading without the limitations of traditional brokers

          </p>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 rounded-3xl max-w-6xl p-5 mx-auto bg-[#0941f60a] border border-[#0941f61f]"
          ref={sectionRef}
        >
          {/* Card */}
          {[
            {
              icon: BarChart3,
              title: "Real-Time Market Insights",
              text: "Access comprehensive market analysis from experienced economists and get instant updates on the latest trends and opportunities around the clock.",
            },
            {
              icon: ShieldCheck,
              title: "Blockchain-Verified Transparency",
              text: "Every trade is recorded on the blockchain for complete transparency. No hidden fees, no manipulation - just pure, verifiable trading data.",
            },
            {
              icon: Layers,
              title: "Diverse Trading Opportunities",
              text: "Trade 400+ instruments including major forex pairs, cryptocurrencies, commodities, and indices. All accessible through one decentralized platform.",
            },
            {
              icon: Lock,
              title: "Self-Custody Protection",
              text: "Your funds remain in your crypto wallet under your complete control. No third-party risks, no frozen accounts - true financial independence.",
            },
            {
              icon: Gauge,
              title: "Optimal Trading Conditions",
              text: "Benefit from ultra-tight spreads, lightning-fast execution, and zero slippage. Algorithmic pricing ensures you get the best market conditions.",
            },
            {
              icon: Wallet,
              title: "Instant Crypto Funding",
              text: "Fund your account instantly with the available payment methods.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl shadow-lg text-gray-900 p-6 border cursor-pointer border-white bg-white/70 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#0941f633]"
            >
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 flex items-center text-white justify-center bg-[#0941f6] rounded-full">
                    <card.icon className="w-6 h-6" />
                  </div>
                <h3 className="text-xl font-[500] my-3 group-hover:text-[#0941f6] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
