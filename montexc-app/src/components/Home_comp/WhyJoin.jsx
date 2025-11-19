import React from "react";
import ScrollReveal from "../Animation/ScrollReveal";
import Button from "../Global/Button";

const WhyJoin = () => {
  return (
    <div className="font-sans">
      {/* Section 1: Hero / Why Join with grad BG */}
      <section className="relative md:h-[50vh] py-6 flex items-center justify-center text-white overflow-hidden">
        {/* Video Background */}
        

        {/* Overlay Gradient */}
<div className="absolute inset-0 bg-gradient-to-r 
from-[#1e3a8a] 
via-[#3b82f6] 
via-[#60a5fa] 
to-[#93c5fd]">
</div>







        {/* Content */}
        <ScrollReveal delay={0.5}>
          <div className="relative max-w-5xl mx-auto px-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1 mb-3 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              Why join Montexc community
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-snug max-w-3xl">
              We provide the best opportunities to traders of all expertise
              levels to get a stronghold of all markets.
            </h1>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 2: Trust & Stats */}
      <section className="bg-[#f7f6ff] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal delay={0.5}>
            <span className="inline-flex items-center gap-2 px-4 py-1 mb-3 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              Montexc
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Traders Worldwide
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Real numbers from real traders. These metrics showcase our dedication to providing superior trading conditions and transparent service.

            </p>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={0.5}>
              <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col h-full">
                <h3 className="text-[#0941f6] font-semibold text-lg">
                  $290M+
                </h3>
                <p className="text-gray-500 text-sm">Trading Volume (Q4 2024)</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col h-full">
                <h3 className="text-[#0941f6] font-semibold text-lg">
                  216K+ 
                </h3>
                <p className="text-gray-500 text-sm">
                  Active Traders (Q4 2024)
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.9}>
              <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col h-full">
                <h3 className="text-[#0941f6] font-semibold text-lg">
                  $87M+ 
                </h3>
                <p className="text-gray-500 text-sm">
                 Client Withdrawals (Q4 2024)
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1.1}>
              <div className="bg-white rounded-lg shadow p-6 text-center flex flex-col h-full">
                <h3 className="text-[#0941f6] font-semibold text-lg">
                  $18M+ 
                </h3>
                <p className="text-gray-500 text-sm">
                  Partner Rewards (Q4 2024)
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Get Started */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1 mb-3 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              Get Started with us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Ready to Experience the Future of Trading?
Get Started Now!

            </h2>
          </div>

          {/* Right */}
          <div className="text-gray-600">
            <p className="mb-6 text-xl">
              Join thousands of traders who've chosen decentralized trading for better spreads, instant withdrawals, and complete transparency.

            </p>
            <Button >
              Start trading now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyJoin;
