export default function FAQ() {
  const faqs = [
    {
      q: "Why hasn’t my deposit been credited?",
      a: "Your deposit will be credited once the transaction meets the minimum required network confirmations. Each cryptocurrency has a different confirmation requirement.",
    },
    {
      q: "What’s the minimum deposit & withdrawal limit at Montexc?",
      a: "The minimum deposit and withdrawal limits depend on the payment method used. Please check the payment section for details.",
    },
    {
      q: "Which payment methods are supported by Montexc?",
      a: "We support multiple payment methods including cryptocurrencies, bank transfers, and e-wallets.",
    },
    {
      q: "How long does withdrawal take?",
      a: "Withdrawals are processed within 24 hours. However, the actual time may vary depending on the payment provider and blockchain confirmations.",
    },
    {
      q: "Is Montexc regulated?",
      a: "Yes, Montexc complies with strict regulatory requirements to ensure client fund safety and transparent trading practices.",
    },
    {
      q: "Can I trade on mobile devices?",
      a: "Yes, Montexc platforms are available on Android and iOS, so you can trade on the go.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="group border border-gray-200 rounded-lg shadow-sm open:shadow-md transition bg-white"
        >
          <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-medium text-gray-800 group-hover:text-[#0941f6]">
            {faq.q}
            <span className="ml-2 transition-transform duration-300 group-open:rotate-45 text-gray-500 group-open:text-[#0941f6]">
              +
            </span>
          </summary>
          {/* Smooth expanding container */}
          <div className="overflow-hidden transition-all duration-500 max-h-0 group-open:max-h-40">
            <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
              {faq.a}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
