import { useState } from "react";
import ScrollReveal from "../Animation/ScrollReveal";
import Button from "../Global/Button";
import GradientText from "../Global/GradientText";
import { Check } from "lucide-react"; // ✅ using lucide-react check icon

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("forex");

  const tabs = [
    {
      id: "forex",
      label: "Forex",
      title: "Forex",
      content:
        "Trade the world's largest and most liquid financial market with over $7 trillion in daily volume. Access major, minor, and exotic currency pairs with competitive spreads and real-time execution. From EUR/USD to emerging market currencies, capitalize on global economic movements and geopolitical events that drive currency fluctuations.",
      cta: "Start trading Forex",
      features: [
        "50+ currency pairs available",
        "Tight spreads from 0.1 pips",
        "24/5 market access",
        "High liquidity and fast execution",
      ],
    },
    {
      id: "crypto",
      label: "Crypto",
      title: "Crypto",
      content:
        "Enter the dynamic world of digital assets with our comprehensive cryptocurrency trading platform. Trade Bitcoin, Ethereum, and other leading cryptocurrencies against major fiat currencies. Benefit from 24/7 market availability and the potential for significant price movements in this rapidly evolving marke",
      cta: "Start trading Crypto",
      features: [
        "Major cryptocurrencies including BTC, ETH, LTC",
        "24/7 trading availability",
        "Competitive spreads",
        "Advanced charting tools",
      ],
    },
    {
      id: "metals",
      label: "Metals",
      title: "Metals",
      content:
        "Diversify your portfolio with precious metals trading. Gold, silver, platinum, and palladium have served as stores of value for centuries. These instruments offer excellent hedging opportunities against inflation and market volatility while providing exposure to industrial demand and geopolitical factors.",
      cta: "Start trading Metals",
      features: [
        "Gold, Silver, Platinum, Palladium",
        "Low margin requirements",
        "Hedge against market volatility",
        "Both spot and futures contracts",
      ],
    },
    {
      id: "cfds",
      label: "CFD's",
      title: "CFDs (Contracts for Difference)",
      content:
        "Trade on price movements without owning the underlying asset. CFDs offer leverage and the ability to profit from both rising and falling markets across various asset classes. Access global markets with flexible position sizes and competitive financing rates.",
      cta: "Start trading CFDs",
      features: [
        "Trade on margin with leverage",
        "Go long or short on any position",
        "No stamp duty or ownership costs",
        "Access to global markets",
      ],
    },
    {
      id: "indices",
      label: "Indices",
      title: "Indices",
      content:
        "Gain exposure to entire markets or sectors through index trading. Track the performance of major stock indices like S&P 500, NASDAQ, FTSE 100, and more. Indices provide diversified market exposure and are ideal for traders looking to capitalize on broader economic trends.",
      cta: "Start trading Indices",
      features: [
        "Major global indices available",
        "Diversified market exposure",
        "Lower volatility than individual stocks",
        "Extended trading hours",
      ],
    },
    {
      id: "synth_indices",
      label: "Synthetic Indices",
      title: "Unique Synthetic Indices",
      content:
        "Experience unique trading opportunities with our proprietary synthetic indices. These computer-generated markets operate 24/7, offering consistent volatility and trading opportunities independent of real-world market conditions. Perfect for continuous trading with predictable statistical properties.",
      cta: "Start trading Synthetic Indices",
      features: [
        "Trade 24/7",
        "Consistent volatility patterns",
        "No real-world market influence",
        "Unique trading opportunities",
        "Simulated crash and boom indices",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
       <button
  key={tab.id}
  onClick={() => setActiveTab(tab.id)}
  className={`px-4 py-2 pb-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap 
    focus:outline-none focus:ring-0
    ${
      activeTab === tab.id
        ? "border-[#0941f6] text-[#0941f6]"
        : "border-transparent text-gray-500 hover:text-[#0941f6] hover:border-[#0941f6]"
    }`}
>
  {tab.label}
</button>

        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 text-lg">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className="flex max-w-6xl flex-col mx-auto justify-left py-10"
              >
                <div className="max-w-2xl">
                  <ScrollReveal delay={0.5}>
                    <h1 className="md:text-5xl text-3xl font-[700] mt-6">
                      <GradientText>{tab.title}</GradientText>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.8}>
                    <p className="max-w-2xl md:text-xl text-md mt-5">
                      {tab.content}
                    </p>

                    <Button variant="primary" className="mt-10">
                      {tab.cta}
                    </Button>
                  </ScrollReveal>
                </div>

                {/* Key Features */}
                <section className="flex mt-20 flex-col mx-auto pb-10 justify-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
                    {tab.features.map((feature, index) => (
                      <ScrollReveal key={index} delay={0.5 + index * 0.2}>
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start gap-3 h-full">
                          <div className="w-6 h-6 flex  items-center justify-center rounded-full bg-[#0941f6]">
                            <Check className="text-white w-4 h-4" />
                          </div>
                          <p className="text-gray-700 text-md flex-1">
                            {feature}
                          </p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </section>
              </div>
            )
        )}
      </div>
    </div>
  );
}
