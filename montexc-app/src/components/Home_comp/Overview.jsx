import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";
import GradientText from "../Global/GradientText";

// FOR HOME 
const Overview = () => {


  return (
       <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-start mb-6 ">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
            Payment method
          </span>
        </div>

        <div className="grid md:grid-cols-2 md:gap-20 gap-xs-2 ">
          <div>
            <ScrollReveal delay={0.5}>
              <h1 className="max-w-md text-3xl md:text-5xl font-[600]">
                Instant Deposits & Withdrawals, 24/7
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <p className="text-lg text-gray-600 my-12 max-w-md">
              Trade with complete financial freedom using cryptocurrency. Enjoy instant deposits and withdrawals with zero banking delays or restrictions. Your crypto, your control - access your funds anytime, anywhere in the world.

              </p>
            </ScrollReveal>

  
          </div>

          <div>
    

            <ScrollReveal delay={0.8}>
              {/* Card  */}
              <div className="bg-[#0941f60a] rounded-2xl shadow-lg p-10   border border-solid border-[#0941f61f]">
                <p className="text-gray-600 text-lg">
                 Tired of trading with centralized exchanges and human delays?

                </p>

                <Button variant="outline" size="sm" className="mt-4">Get Started Today</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
  );
};

export default Overview;
