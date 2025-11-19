import React from "react";
import StatCircle from "./StatCircle";
import ScrollReveal from "../Animation/ScrollReveal";


const stats = [
  { value: "400+", label: "Trading Instruments", duration: 1.6 },
  { value: "0.01", label: "From 0.01 Lot Size", duration: 1.6 },
  { value: "<14ms", label: "Lightning-Fast Execution", duration: 1.6 },
  { value: "0%", label: "Zero Deposit Fees", duration: 1.6 },
];

export default function StatsGrid() {
  return (
    <section className="bg-[#f8f9ff] py-12">
      <div className="max-w-6xl mx-auto px-6">

       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

          {stats.map((s, i) => (
             <ScrollReveal delay={0.5}>
            <StatCircle
              key={i}
              value={s.value}
              label={s.label}
              duration={s.duration}
            />
        </ScrollReveal>

          ))}
        </div>

      </div>
    </section>
  );
}
