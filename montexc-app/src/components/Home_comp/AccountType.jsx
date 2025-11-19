import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";

function AccountType() {
  return (
    <section className="py-10 bg-[#f9f9ff]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
          Account Types
        </span>
        <h2 className="text-4xl font-bold text-gray-900 my-4">
          Trading Accounts Tailored For Your Unique Trading Needs
        </h2>
        <p className="text-gray-600 mb-8">
          Relish our hassle free withdrawals with no manual processing.
        </p>

        {/* Toggle (Monthly / Yearly) */}
        <div className="md:inline-flex items-center gap-2 mb-12 p-1 ">
          <Button variant="primary" className="">Get Started</Button>
          <Button variant="outline" className="md:mt-0 mt-3">Open a Demo Account</Button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-3xl max-w-6xl p-5  bg-[#0941f60a] border border-[#0941f61f]">
          {/* Starter */}
          <ScrollReveal delay={0.6}>
            <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8 flex flex-col shadow-lg  border border-white">
              <div className="w-10 h-10 flex items-center  justify-center rounded-lg bg-[#0941f60d] text-[#0941f6] mb-4">
                🌱
              </div>
              <h3 className="text-xl font-semibold mb-2">Razor</h3>
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
            </div>
          </ScrollReveal>

          {/* Growth (Highlighted) */}
          <ScrollReveal delay={0.7}>
            <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8 flex flex-col shadow-lg  border border-white">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0941f6] text-white mb-4 ">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-2">Ultra</h3>
              <p className="text-gray-600 mb-4">
                Our withdrawals are carried out in seconds
              </p>
              <p className="text-3xl font-[500] text-gray-900 mb-6">
                $50 <span className="text-base font-normal">min deposit</span>
              </p>
              {/* <button className="px-6 py-3 rounded-xl bg-[#0941f6] text-white font-medium shadow-md hover:bg-[#0941f6] transition-all mb-8">
              Upgrade Now
            </button> */}
              <ul className="text-left text-gray-600 space-y-3 flex-1">
                <li>✔ Everything in Starter</li>
                <li>✔ Unlimited reports</li>
                <li>✔ Real-time tracking</li>
                <li>✔ Priority support</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Enterprise */}
          <ScrollReveal delay={0.8}>
            <div className="rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-8 flex flex-col shadow-lg  border border-white">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0941f60d] text-[#0941f6] mb-4 ">
                💡
              </div>
              <h3 className="text-xl font-semibold mb-2">SynthOp</h3>
              <p className="text-gray-600 mb-6">
                Our withdrawals are carried out in seconds
              </p>
              <p className="text-3xl font-[500] text-gray-900 mb-4">
                $50 <span className="text-base font-normal">min deposit</span>
              </p>
              {/* <button className="px-6 py-3 rounded-xl border border-[#0941f6] text-[#0941f6] font-medium hover:bg-[#0941f6] hover:text-white transition-all mb-8">
              Get Full Access
            </button> */}
              <ul className="text-left text-gray-600 space-y-3 flex-1">
                <li>✔ Everything in Growth</li>
                <li>✔ Team access</li>
                <li>✔ Audit-ready tools</li>
                <li>✔ Dedicated manager</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default AccountType;
