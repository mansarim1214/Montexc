import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";

const NextOverview = () => {
  const panels = [
    "Unlock Full Support & Resources",
    "Partner with a Reputable, Trusted Broker",
    "Leverage World-Class Technology Designed for You",
  ];
  return (
    <div className="max-w-3xl mx-auto px-6 md:py-16 text-center">
      
        <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
          Overview
        </span>
     

     
        <div>
          <ScrollReveal delay={0.5}>
            <h1 className="md:text-5xl text-3xl font-bold text-gray-900 py-5">
              Boost Your Income
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <p className="text-xl max-w-md mx-auto text-gray-600 mb-6 ">
              With the support of our dedicated account managers,
 you can earn attractive incentives through referrals.

            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <Button className="pull-right">Become a Partner</Button>
          </ScrollReveal>
        </div>

        
      
      {/* card # 1 */}

      <div className="space-y-4 mt-10 ">
        {panels.map((title, idx) => (
          <ScrollReveal delay={0.9}>
            <div
              key={idx}
              className="flex items-center justify-between bg-[#0941f60a] rounded-2xl px-6 py-4 shadow-md border border-[#0941f61f]"
            >
              
              <p className="text-lg font-normal">{title}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default NextOverview;
