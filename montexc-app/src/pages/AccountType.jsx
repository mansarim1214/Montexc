import GradientText from "../components/Global/GradientText";
import ScrollReveal from "../components/Animation/ScrollReveal";
import Button from "../components/Global/Button";

function AccountType() {
  return (
    <>
      <section className="relative px-4 bg-[#f8f9ff] ">
        <div className="container mx-auto min-h-[70vh] py-20  max-w-6xl  items-center ">
          {/* Left Content */}
          <div className="max-w-4xl pt-10">
            <span className="gap-2 px-4 py-1 my-8 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              Account types
            </span>

            <ScrollReveal delay={0.6}>
              <h2 className="mt-4 lg:text-6xl text-3xl font-bold text-gray-900 leading-snug">
                <GradientText> We offer </GradientText> multiple account types to suit your trading preferences and strategy.{" "}
                
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <p className="mt-4 text-gray-600 text-xl md:leading-relaxed leading-snug">
                Our withdrawals are processed in seconds with no manual
                intervention.
              </p>
            </ScrollReveal>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-3xl max-w-6xl p-5 mt-20  bg-[#0941f60a] border border-[#0941f61f]">
            {/* Starter */}
            <ScrollReveal delay={0.6}>
              <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8  shadow-lg  border border-white">
                <span className="gap-2 px-4 py-1  text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
                  Account Type
                </span>

                <h3 className="text-5xl font-semibold my-2">
                  <GradientText>Razor </GradientText>
                </h3>
                <p className="text-gray-600 mb-4">
                  Our withdrawals are carried out in seconds
                </p>
                <p className="text-3xl font-[500] text-gray-900 mb-6">
                  $50 <span className="text-base font-normal">min deposit</span>
                </p>
                {/* <button className="px-6 py-3 rounded-xl border border-[#0941f6] text-[#0941f6] font-medium hover:bg-[#0941f6] hover:text-white transition-all mb-8">
                        Start My Journey
                      </button> */}
                <ul className="text-left text-gray-600 space-y-3 flex-1">
                  <li>✔ Basic tools</li>
                  <li>✔ 1 report / month</li>
                  <li>✔ Dashboard access</li>
                  <li>✔ Email support</li>
                </ul>

                <Button variant="outline" className="mt-5 w-full">
                  Open Account
                </Button>
              </div>
            </ScrollReveal>

            {/* Growth (Highlighted) */}
            <ScrollReveal delay={0.7}>
               <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8  shadow-lg  border border-white">
                <span className="gap-2 px-4 py-1  text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
                  Account Type
                </span>

                <h3 className="text-5xl font-semibold my-2">
                  <GradientText>Ultra </GradientText>
                </h3>
                <p className="text-gray-600 mb-4">
                  Our withdrawals are carried out in seconds
                </p>
                <p className="text-3xl font-[500] text-gray-900 mb-6">
                  $50 <span className="text-base font-normal">min deposit</span>
                </p>
                {/* <button className="px-6 py-3 rounded-xl border border-[#0941f6] text-[#0941f6] font-medium hover:bg-[#0941f6] hover:text-white transition-all mb-8">
                        Start My Journey
                      </button> */}
                <ul className="text-left text-gray-600 space-y-3 flex-1">
                  <li>✔ Basic tools</li>
                  <li>✔ 1 report / month</li>
                  <li>✔ Dashboard access</li>
                  <li>✔ Email support</li>
                </ul>

                <Button variant="outline" className="mt-5 w-full">
                  Open Account
                </Button>
              </div>
            </ScrollReveal>

            {/* Enterprise */}
            <ScrollReveal delay={0.8}>
               <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8  shadow-lg  border border-white">
                <span className="gap-2 px-4 py-1  text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
                  Account Type
                </span>

                <h3 className="text-5xl font-semibold my-2">
                  <GradientText>SynthOp </GradientText>
                </h3>
                <p className="text-gray-600 mb-4">
                  Our withdrawals are carried out in seconds
                </p>
                <p className="text-3xl font-[500] text-gray-900 mb-6">
                  $50 <span className="text-base font-normal">min deposit</span>
                </p>
                {/* <button className="px-6 py-3 rounded-xl border border-[#0941f6] text-[#0941f6] font-medium hover:bg-[#0941f6] hover:text-white transition-all mb-8">
                        Start My Journey
                      </button> */}
                <ul className="text-left text-gray-600 space-y-3 flex-1">
                  <li>✔ Basic tools</li>
                  <li>✔ 1 report / month</li>
                  <li>✔ Dashboard access</li>
                  <li>✔ Email support</li>
                </ul>

                <Button variant="outline" className="mt-5 w-full">
                  Open Account
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

 <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col  md:flex-row justify-between  md:gap-10 gap-5 items-center">
          {/* Left */}
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 px-4 py-1 mb-3 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              Compare
            </span>
            <h2 className="text-3xl md:text-6xl font-bold  md:mb-6 ">
              Account type comparison
            </h2>
          </div>

          {/* Right */}
          <div className="text-gray-600 md:text-right max-w-sm">
            <p className="mb-6  text-xl ">
              Relish our hassle free withdrawals with no manual processing.
            </p>
            <Button>
              Start trading now
            </Button>
          </div>
          
        </div>

          <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-8 rounded-3xl max-w-6xl p-5 mt-10  bg-[#0941f60a] border border-[#0941f61f]">
            {/* Starter */}
            <ScrollReveal delay={0.6}>
              <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8  shadow-lg  border border-white">
                <span className="gap-2 px-4 py-1  text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
                  Account Type
                </span>

                <h3 className="text-5xl font-semibold my-2">
                  <GradientText>Razor </GradientText>
                </h3>
                <p className="text-gray-600 mb-4">
                  Our withdrawals are carried out in seconds
                </p>
                <p className="text-3xl font-[500] text-gray-900 mb-6">
                  $50 <span className="text-base font-normal">min deposit</span>
                </p>
                {/* <button className="px-6 py-3 rounded-xl border border-[#0941f6] text-[#0941f6] font-medium hover:bg-[#0941f6] hover:text-white transition-all mb-8">
                        Start My Journey
                      </button> */}
                <ul className="text-left text-gray-600 space-y-3 flex-1">
                  <li>✔ Basic tools</li>
                  <li>✔ 1 report / month</li>
                  <li>✔ Dashboard access</li>
                  <li>✔ Email support</li>
                </ul>

                <Button variant="outline" className="mt-5 w-full">
                  Open Account
                </Button>
              </div>
            </ScrollReveal>

            {/* Growth (Highlighted) */}
            <ScrollReveal delay={0.7}>
               <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8  shadow-lg  border border-white">
                <span className="gap-2 px-4 py-1  text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
                  Account Type
                </span>

                <h3 className="text-5xl font-semibold my-2">
                  <GradientText>Ultra </GradientText>
                </h3>
                <p className="text-gray-600 mb-4">
                  Our withdrawals are carried out in seconds
                </p>
                <p className="text-3xl font-[500] text-gray-900 mb-6">
                  $50 <span className="text-base font-normal">min deposit</span>
                </p>
                {/* <button className="px-6 py-3 rounded-xl border border-[#0941f6] text-[#0941f6] font-medium hover:bg-[#0941f6] hover:text-white transition-all mb-8">
                        Start My Journey
                      </button> */}
                <ul className="text-left text-gray-600 space-y-3 flex-1">
                  <li>✔ Basic tools</li>
                  <li>✔ 1 report / month</li>
                  <li>✔ Dashboard access</li>
                  <li>✔ Email support</li>
                </ul>

                <Button variant="outline" className="mt-5 w-full">
                  Open Account
                </Button>
              </div>
            </ScrollReveal>

            {/* Enterprise */}
            <ScrollReveal delay={0.8}>
               <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8  shadow-lg  border border-white">
                <span className="gap-2 px-4 py-1  text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
                  Account Type
                </span>

                <h3 className="text-5xl font-semibold my-2">
                  <GradientText>SynthOp </GradientText>
                </h3>
                <p className="text-gray-600 mb-4">
                  Our withdrawals are carried out in seconds
                </p>
                <p className="text-3xl font-[500] text-gray-900 mb-6">
                  $50 <span className="text-base font-normal">min deposit</span>
                </p>
                {/* <button className="px-6 py-3 rounded-xl border border-[#0941f6] text-[#0941f6] font-medium hover:bg-[#0941f6] hover:text-white transition-all mb-8">
                        Start My Journey
                      </button> */}
                <ul className="text-left text-gray-600 space-y-3 flex-1">
                  <li>✔ Lot size (Min)</li>
                  <li>✔ 1 report / month</li>
                  <li>✔ Dashboard access</li>
                  <li>✔ Email support</li>
                </ul>

                <Button variant="outline" className="mt-5 w-full">
                  Open Account
                </Button>
              </div>
            </ScrollReveal>
          </div>

      </section>
    
    </>
  );
}

export default AccountType;
