import GradientText from "../components/Global/GradientText";
import ScrollReveal from "../components/Animation/ScrollReveal";
import Button from "../components/Global/Button";
import { UserPlus, TrendingUp, ArrowLeftRight } from "lucide-react";

function MetaTrader() {
  const steps = [
    {
      number: "01",
      title: "Open",
      description: "Open a Montexc account",
      icon: UserPlus,
    },
    {
      number: "02",
      title: "Transfer",
      description: "Transfer funds in your account",
      icon: ArrowLeftRight,
    },
    {
      number: "03",
      title: "Trade",
      description: "Start your trading journey",
      icon: TrendingUp,
    },
  ];

  const features = [
    {
      icon: "",
      title: "Advanced Trading Engine",
      description:
        "Trade CFDs on your favorite trading instruments using Vertex Trader's advanced engine. A powerful platform designed for currency pairs, commodities, indices, and other financial instruments. Vertex Trader is available for free download through Montexc, delivering institutional-grade performance.",
    },
    {
      icon: "⚙️",
      title: "Smart Algorithm Builder",
      description:
        "With Vertex Trader, you can develop trading algorithms and custom technical indicators through our integrated algorithm builder. As this tool is seamlessly linked with the platform, new strategies will automatically appear in your Vertex Trader interface and can be executed instantly.",
    },
    {
      icon: "📑",
      title: "Advanced Risk Management",
      description:
        "Experience sophisticated risk management with Vertex Trader through Montexc. Our system allows you to implement multiple risk control measures, including position sizing, stop-loss automation, and portfolio-level risk limits for comprehensive protection.",
    },
    {
      icon: "📈",
      title: "Multi-Timeframe Analysis",
      description:
        "Visually monitor real-time price movements across charts available in 21 timeframes simultaneously. This powerful feature allows traders to conduct comprehensive market analysis and forecast future price directions with precision.",
    },
    {
      icon: "📈",
      title: "Market Intelligence Hub",
      description:
        "Capture market opportunities with integrated market intelligence tools in Vertex Trader, including real-time economic calendar, breaking news feeds, and market sentiment analysis. Stay ahead of expected market impacts and identify trading opportunities.",
    },
    {
      icon: "📈",
      title: "Professional Analytics Suite",
      description:
        "Enhance your trading experience with 50+ built-in indicators, 25 analytical tools, and advanced charting objects when you trade financial instruments via Vertex Trader. Our comprehensive toolkit provides everything needed for technical analysis and strategy development.",
    },
  ];

  const guide = [
    {
      id: 1,
      title: "Run Terminal",
      desc: "Run the trading terminal on your PC.",
      img: "https://www.fxopulence.com/Assets/Images/login-step-ipad.svg",
    },
    {
      id: 2,
      title: "Access Login",
      desc: "On the terminal, click on ‘File’ and then select ‘Login to Trade Account’.",
      img: "https://www.fxopulence.com/Assets/Images/login-step-ipad.svg",
    },
    {
      id: 3,
      title: "Login",
      desc: "Enter your account number as Login, your trading password, and the server name.",
      img: "https://www.fxopulence.com/Assets/Images/login-step-ipad.svg",
    },

    {
      id: 4,
      title: "Start Trading",
      desc: "Once you have successfully logged in, you will hear a chime confirming your login",
      img: "https://www.fxopulence.com/Assets/Images/login-step-ipad.svg",
    },
  ];

  return (
    <>
      <section className="relative px-4 bg-[#f8f9ff] ">
        <div className="container mx-auto min-h-[70vh] py-20  max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="max-w-lg pt-10">
            {/* <span className="gap-2 px-4 py-1 my-8 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              Download MT5
            </span> */}

            <h2 className="mt-4 lg:text-6xl text-4xl font-bold text-gray-900 leading-snug">
              Next-Gen <br />
              <GradientText>Trading Platform</GradientText>
            </h2>

            <p className="mt-4 text-gray-600 text-lg md:leading-relaxed leading-snug">
              Experience next-generation trading with Vertex Trader. Scalable
              solutions, institutional-grade security, and powerful tools for
              beginners to professionals.
            </p>

            {/* Download Buttons */}
            <div className="mt-6 flex flex-wrap md:gap-4 gap-2">
              <div
                href="#"
                className="md:px-5 md:py-3 p-2 bg-white border rounded-lg shadow hover:shadow-lg transition flex items-center gap-2 text-gray-700"
              >
                <img
                  src="https://www.fxopulence.com/Assets/Images/window.svg"
                  alt="Windows"
                  className="w-3 h-3 md:w-5 md:h-5"
                />
                <span className="font-medium md:text-md text-xs">
                  For Windows
                </span>
              </div>

              <div
                href="#"
                className="md:px-5 md:py-3 p-2 bg-white border rounded-lg shadow hover:shadow-lg transition flex items-center gap-2 text-gray-700"
              >
                <img
                  src="https://www.fxopulence.com/Assets/Images/apple.svg"
                  alt="App Store"
                  className="w-3 h-3 md:w-5 md:h-5"
                />
                <span className="font-medium md:text-md text-xs">
                  App Store
                </span>
              </div>
              <div
                href="#"
                className="md:px-5 md:py-3 p-2 bg-white border rounded-lg shadow hover:shadow-lg transition flex items-center gap-2 text-gray-700"
              >
                <img
                  src="https://www.fxopulence.com/Assets/Images/android.svg"
                  alt="Google Play"
                  className="w-3 h-3 md:w-5 md:h-5"
                />
                <span className="font-medium md:text-md text-xs">
                  Google Play
                </span>
              </div>
            </div>
          </div>

          {/* Right Content (Images) */}
          <div className="relative flex justify-left md:justify-end">
            {/* Tablet Image */}
            <img
              src="https://www.fxopulence.com/Assets/Images/mt5-iPad-Pro.svg"
              alt="Tablet Trading Platform"
              className="w-[300px] md:w-[500px] "
            />
            {/* Mobile Image (overlapping) */}
            <img
              src="https://www.fxopulence.com/Assets/Images/mt5-iPhone.svg"
              alt="Mobile Trading Platform"
              className="absolute right-0 bottom-0 w-[200px] md:w-[250px] transform md:translate-x-10 translate-x-0 translate-y-20 "
            />
          </div>
        </div>
      </section>

      <section className="bg-white md:py-20 py-5 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
            {/* Left */}
            <div>
              <span className="gap-2 px-4 py-1 my-8 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
                Benefits
              </span>
              <h2 className="text-4xl md:text-6xl mt-5 font-bold leading-snug mb-6">
                Vertex Trader <br /> Main Features
              </h2>
            </div>

            {/* Right */}
            <div className="flex items-start flex-col gap-4">
              <p className="text-gray-600">
                Vertex Trader, the next-generation trading platform, offers
                enhanced features and cutting-edge technology. It has quickly
                risen to prominence among online traders and brokerages
                worldwide with its powerful tools and intuitive design.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:p-4 gap-8 bg-[#0941f60a] rounded-2xl border text-left  shadow-md hover:shadow-xl transition-all p-4 shadow-lg  border border-white">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl border shadow-md hover:shadow-xl transition-all p-8 flex flex-col shadow-lg  border border-white  relative"
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-3">
                  {/* <span className="text-[#0941f6] text-2xl">
                    {feature.icon}
                  </span> */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm">{feature.description}</p>

                {/* Left Border Accent */}
                <div className="absolute top-6 left-0 w-1 h-10 bg-[#0941f6] rounded-r"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="  py-20">
        <div className="max-w-6xl mx-auto px-6  md:py-10 p-5">
          <div className="flex justify-start mb-6 ">
            <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              Get Started
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 py-10 py-3 gap-xs-2 ">
            <div>
              <h1 className="max-w-lg font-[600] md:text-5xl text-4xl">
                Start Trading <br />
                on Vertex Trader
              </h1>
            </div>

            <div className="md:text-right">
              {/* Card  */}
              <Button variant="outline" size="lg" className="">
                Start trading now
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full border-t-2 border-dotted border-[#0941f6] z-0"></div>

          <div className="flex flex-wrap justify-center gap-8 relative max-w-7xl mx-auto   z-10">
            {steps.map((step, idx) => (
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
                  <div className="w-12 h-12 flex items-center text-white justify-center bg-[#0941f6] rounded-full">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" text-center  py-6">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="flex justify-center mb-6 ">
            <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
              How to Guide
            </span>
          </div>

          <div className="  md:gap-20 gap-10 gap-xs-2 ">
            <div>
              <h1 className="max-w-lg mx-auto font-[600] md:text-5xl text-4xl">
                How to Login
                <br /> to Vertex Trader
              </h1>
            </div>

           
          </div>
        </div>
      </section>

      <section className="md:py-10 py-10 ">
        <div className="container max-w-6xl mx-auto px-6">
          {/* Steps Loop */}
          <div className="space-y-18 ">
            {guide.map((guide, index) => (
              <div
                key={guide.id}
                className={` items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Section */}

                <div className="flex flex-col md:flex-row items-center md:mx-0 rounded-2xl shadow-lg p-6 pb-0 pr-0 ">
                  <div className=" w-full md:max-w-[17rem]">
                    <span className="inline-block px-4 py-1  text-sm font-medium text-[#ffff] bg-[#0941f6] rounded-full shadow-sm">
                      Step {String(guide.id).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-4 text-gray-900 mb-4">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-lg md:leading-relaxed leading-snug">
                      {guide.desc}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={guide.img}
                      alt={guide.title}
                      className="w-full  transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Image Section */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MetaTrader;
