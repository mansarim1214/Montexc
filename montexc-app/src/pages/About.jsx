import Button from "../components/Global/Button";
import ScrollReveal from "../components/Animation/ScrollReveal";
import GradientText from "../components/Global/GradientText";
import {
  TrendingUp,
  ArrowLeftRight,
  Banknote,
  Headphones,
  LifeBuoy,
} from "lucide-react";

function About() {
  return (
    <>
      {/* Hero  */}

      <section className="relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r 
from-[#1e3a8a] 
via-[#3b82f6] 
via-[#60a5fa] 
to-[#93c5fd]"
        ></div>

        <div className="relative max-w-6xl mx-auto py-10  px-6  mt-20">
          <div className="flex justify-start mb-6 ">
            <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              About us
            </span>
          </div>

          <div className=" relative">
            <div>
              <h1 className="max-w-xl font-bold md:text-6xl text-5xl">
                Montexc: The Future of Decentralized Trading
              </h1>

              <p className="text-lg my-8 max-w-md">
                Experience the next generation of trading with blockchain
                transparency, instant settlements, and complete control over
                your funds. No intermediaries, no delays.
              </p>

              <Button>Open Live Account</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="gap-2 px-4 py-1 my-8 text-sm font-medium  text-[#0941f6] bg-white rounded-full shadow-md">
              At Montexc
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a2e] mt-4 leading-snug">
              Unlock Advanced Trading Features at Montexc
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Experience our advanced trading platform designed for the world's
              largest and most liquid financial market. Trade forex with
              institutional-grade tools and transparent execution.
            </p>
          </div>
        </div>

        <img
          src="https://www.fxopulence.com/static/media/payments-deposit-withdrawal-bg.7d31cc04b4df19c3fdaf.svg"
          className="w-full mt-5"
        />
      </section>

      <section className="md:py-20 px-6 bg-white">
        <div className="container max-w-6xl mx-auto  text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 items-center">
            {/* Left Content */}
            <div>
              <p className="text-gray-600 text-lg mb-4">
                Advance your trading with Montexc's comprehensive suite of
                professional tools. Access real-time economic calendars,
                advanced calculators, risk management tools, and detailed market
                analysis. Trade over 400 instruments including forex, crypto,
                commodities, and indices with transparent execution and
                institutional-grade technology.
              </p>
            </div>

            {/* Right Content */}
            <div>
              <span className="gap-2 px-4 py-1  text-sm font-medium  text-[#0941f6] bg-white rounded-full shadow-md">
                What we bring to the table
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0a0a2e] mt-6 leading-snug">
                Experience Advanced Multi-Asset Trading
              </h2>
            </div>
          </div>

          {/* Features Grid */}
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5 rounded-3xl max-w-6xl p-5 mt-10 mx-auto bg-[#0941f60a] border border-[#0941f61f]">
            {/* Card */}
            {[
              {
                img: "/media/hand-pressing-virtual-screen-with-different-elements.webp",
                legend: "Where Technology Meets Trading Excellence",
                title: "Our Vision",
                text: "To revolutionize trading by providing transparent, decentralized access to global financial markets. We envision a future where every trader has institutional-grade tools and complete control over their trading capital, free from traditional banking limitations and intermediary manipulation.",
              },
              {
                img: "/media/view-dartboard-with-bullseye-arrow-points.webp",
                legend: "Delivering Transparent Market Access",
                title: "Our Mission",
                text: "We provide cutting-edge trading technology that eliminates intermediaries and ensures complete transparency. Our platform empowers traders with direct market access, instant execution, and blockchain-verified transactions while remaining accessible to traders of all experience levels.",
              },
              {
                img: "/media/crystal-globe-with-stock-information.webp",
                legend: "Built on Transparency, Innovation, and Integrity",
                title: "Our Core Values",
                text: "We believe in complete transparency - every trade is verifiable on the blockchain. We continuously innovate to provide better trading conditions while maintaining the highest standards of security and reliability for our global trading community.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl shadow-lg text-gray-900 md:p-6 p-3 border cursor-pointer border-white bg-white/70 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#0941f633]"
              >
                <div className="flex md:flex-row flex-col md:gap-20 gap-10 items-start">
                  {/* Text Section */}
                  <div className="flex flex-col gap-3 w-full md:w-1/2">
                    <h3 className="md:text-3xl text-2xl font-[600] my-3 group-hover:text-[#0941f6] transition-colors">
                      {card.title}
                    </h3>
                    <span className="text-lg">
                      <GradientText className="my-20">
                        {card.legend}
                      </GradientText>
                    </span>
                    <p className="text-gray-900 md:text-lg text-md">
                      {card.text}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={card.img}
                      className="w-full max-w-md rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-10">
        <div className="grid grid-cols-1 px-6 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-gray-600 text-xl max-w-sm mb-4">
              Trade under favourable market conditions like never before!
            </p>
            <Button variant="primary">Start trading now</Button>
          </div>

          {/* Right Content */}
          <div>
            <span className="gap-2 px-4 py-1 my-8 text-sm font-medium  text-[#0941f6] bg-white rounded-full shadow-md">
              Benefits
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a0a2e] mt-6 ">
              Embark on Trading in Optimal Market Settings Like{" "}
              <GradientText variant="secondary"> Never Before. </GradientText>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-5 rounded-3xl max-w-6xl p-5 mt-10 mx-auto bg-[#0941f60a] border border-[#0941f61f]">
          {/* Card */}
          {[
            {
              icon: TrendingUp,
              title: "High Leverage and Competitive Spreads",
              text: "Seize abundant prospects to amplify your returns with significant leverage and enticing spreads. Partner with Montexc and capitalize on promising opportunities today!",
            },
            {
              icon: ArrowLeftRight,
              title: "Swift Financial Transactionss",
              text: "In this rapid era, ensure you never skip a beat in your trading journey. Engage with Montexc for instantaneous deposits and the flexibility to withdraw your gains at your convenience.",
            },
            {
              icon: LifeBuoy,
              title: "Efficient Technical Support",
              text: "Experience seamless trading with Montexc. Our seasoned technical brigade ensures prompt resolutions, making trading hitches a thing of the past.",
            },
          ].map((card, i) => (
            <ScrollReveal delay={0.6}>
              <div
                key={i}
                className="group rounded-2xl shadow-lg h-full text-gray-900 p-6 border cursor-pointer border-white bg-white/70 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#0941f633]"
              >
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#0941f6]">
                    <card.icon className="w-6 h-6 " />
                  </div>

                  <h3 className="text-xl font-[500] my-3 group-hover:text-[#0941f6] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-left">{card.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="md:py-10 mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <span className="gap-2 px-4 py-1 my-8 text-sm font-medium  text-[#0941f6] bg-white rounded-full shadow-md">
              Payment Methods
            </span>
            <h2 className="text-3xl md:text-5xl max-w-md font-bold text-[#0a0a2e] mt-6 ">
              Our Payment Methods
            </h2>
          </div>

          {/* Right Content */}
          <div className="md:text-right">
            <p className="text-gray-600 text-xl mb-4">
              Get started with our super fast trading account.
            </p>
            <Button variant="primary">Get started</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl  mt-10 mx-auto">
          {[
            {
              coin: "ETH",
              icon: "https://www.fxopulence.com/Assets/Images/ethereum-icon.svg",
              deposit: "$50 USD",
              withdrawal: "$50 USD",
              speed: "Instant",
              confirmation: "Network Confirmation",
            },
            {
              coin: "BEP-20",
              icon: "https://www.fxopulence.com/Assets/Images/bep-20-coin.svg",
              deposit: "$50 USD",
              withdrawal: "$50 USD",
              speed: "Instant",
              confirmation: "Network Confirmation",
            },
            {
              coin: "TRC-20",
              icon: "https://www.fxopulence.com/Assets/Images/tron-icon.svg",
              deposit: "$50 USD",
              withdrawal: "$50 USD",
              speed: "Instant",
              confirmation: "Network Confirmation",
            },
            {
              coin: "BTC",
              icon: "https://www.fxopulence.com/Assets/Images/white-bit-coin.svg",
              deposit: "$50 USD",
              withdrawal: "$50 USD",
              speed: "Instant",
              confirmation: "Network Confirmation",
            },
          ].map((card, i) => (
            <div className="rounded-2xl shadow-lg  p-6 text-white bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6]  to-[#0941f6] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <img src={card.icon} alt={card.coin} className="w-8 h-8" />
                <h3 className="text-lg font-bold">{card.coin}</h3>
              </div>

              {/* Details */}
              <div className="bg-white/10 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span>
                    💳 Deposit <small>(Min)</small>
                  </span>
                  <span className="font-semibold">{card.deposit}</span>
                </div>
                <div className="flex justify-between">
                  <span>⚡ Speed</span>
                  <span className="font-semibold">{card.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    🏦 Withdrawal <small>(Min)</small>
                  </span>
                  <span className="font-semibold">{card.withdrawal}</span>
                </div>
                <div className="flex justify-between">
                  <span>⚡ Speed</span>
                  <span className="font-semibold">{card.confirmation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
