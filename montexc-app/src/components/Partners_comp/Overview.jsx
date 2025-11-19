import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";

const Overview = () => {


  return (
       <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-start mb-6 ">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
            Overview
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-20  ">
          <div>
            <ScrollReveal delay={0.5}>
              <h1 className="md:text-5xl text-3xl font-bold text-gray-900 ">
                Montexc Partner  <br /> Advantage
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <p className="text-lg text-gray-600 my-12">
                Turn your network and expertise into opportunity. By connecting potential clients with our brokerage’s trading platform and services, you can earn attractive commissions on every trade they make. Over time, this can grow into a reliable and rewarding stream of passive income.

              </p>
            </ScrollReveal>
{/* card # 1 */}
            <ScrollReveal delay={0.9}>
             

 <div className="bg-[#0941f60a] rounded-2xl shadow-lg p-10 mt-10 min-h-[40vh] border border-solid border-[#0941f61f]">
                <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#0941f6] bg-green-100 rounded-full shadow-sm">
                    New
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Affiliate Program
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Industry-Leading <br />Pay Structure
                </h3>
                <p className="text-gray-600 text-lg">
                  Maximize your earnings with one of the most rewarding commission systems in the market.
                </p>
              </div>


            </ScrollReveal>
          </div>

          <div>
            <div className="text-right">
              <ScrollReveal delay={0.7}>
                <p className="text-xl  text-gray-600 mb-6 ">
                  Unlock Unlimited Earning Potential by Partnering with Montexc
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.8}>
                <Button className="pull-right">Get Started</Button>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.8}>
              {/* Card 2 */}
              <div className="bg-[#0941f60a] rounded-2xl shadow-lg p-10 mt-10 min-h-[40vh] border border-solid border-[#0941f61f]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-[#0941f6] bg-blue-50 rounded-full border border-dashed border-[#0941f6]">
                    IB Program
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Opportunity to Earn <br />2X Commissions
                </h3>
                <p className="text-gray-600 text-lg">
                  Boost your income potential with double commissions as you grow your client base and increase trading volumes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
  );
};

export default Overview;
