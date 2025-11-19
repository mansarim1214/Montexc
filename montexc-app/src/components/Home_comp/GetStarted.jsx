import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";
import { UserPlus, TrendingUp, ArrowLeftRight } from "lucide-react";


// FOR HOME

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Quick signup - no complex verification needed.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Fund",
    description: "Deposit funds instantly using the available payment method.",
    icon: ArrowLeftRight,
  },
  {
    number: "03",
    title: "Trade",
    description:
      "Start trading 400+ instruments with lightning-fast execution and zero human interference.",
    icon: TrendingUp,
  },
];

const GetStarted = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto md:mt-20 px-6 py-10">
        <div className="flex justify-start mb-6 ">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
            Get Started
          </span>
        </div>

        <div className="grid md:grid-cols-2 md:gap-20 gap-xs-2 ">
          <div>
            <ScrollReveal delay={0.5}>
              <h1 className="max-w-md font-[600] text-4xl">
                How to get started with Montexc
              </h1>
            </ScrollReveal>
          </div>

          <div className="md:text-right">
            <ScrollReveal delay={0.8}>
              {/* Card  */}
              <Button variant="outline" size="lg" className="mt-4 ">
                Start trading now
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="  py-12">
        <div className="relative flex justify-center items-center">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full border-t-2 border-dotted border-[#0941f6] z-0"></div>

          <div className="flex flex-wrap justify-center gap-8 relative max-w-7xl mx-auto   z-10">
            {steps.map((step, idx) => (
              <ScrollReveal delay={0.7}>
                <div
                  key={idx}
                  className="relative bg-white shadow-md rounded-lg p-6 w-72 text-center h-full"
                >
                  {/* Step Number */}
                  <span className="absolute top-3 right-3 text-gray-300 text-xl font-bold">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#0941f6] text-white rounded-full">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mt-2">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
