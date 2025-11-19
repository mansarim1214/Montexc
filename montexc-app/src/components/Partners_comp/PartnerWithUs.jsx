import ScrollReveal from "../Animation/ScrollReveal";
import { UserPlus, ArrowLeftRight, TrendingUp } from "lucide-react";


const PartnerWithUs = () => {
  const steps = [
    {
      title: "Open",
      description: "Create your Montexc account in minutes.",
      icon: UserPlus,
    },
    {
      title: "Funds",
      description: "Easily deposit funds into your account.",
      icon: ArrowLeftRight,
    },
    {
      title: "Trade",
      description: "Begin your trading journey with confidence.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 md:py-16 py-10 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
        Partner with us
      </span>

      <div>
        <ScrollReveal delay={0.5}>
          <h1 className="md:text-5xl text-3xl font-bold text-gray-900 py-5">
            Partner with an award-winning broker
          </h1>
        </ScrollReveal>
      </div>

      {/* card # 1 */}

<div className="relative w-full max-w-4xl mx-auto py-10">
  <div className="flex flex-col space-y-10">
    {steps.map((step, idx) => (
      <ScrollReveal key={idx}>
        <div
          className={`text-left items-start bg-white rounded-2xl shadow-md px-6 py-5 w-full max-w-xl 
            ${idx === 1 ? "md:ml-20" : idx === 2 ? "md:ml-40" : ""}`}
        >
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#0941f6]">
                <step.icon className="w-6 h-6 " />
              </div>
            <h3 className="md:text-2xl text-xl font-semibold">{step.title}</h3>
          </div>

          <p className="text-gray-500 md:text-xl mt-1">{step.description}</p>
        </div>
      </ScrollReveal>
    ))}
  </div>
</div>



    </div>
  );
};

export default PartnerWithUs;
