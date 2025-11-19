import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";
import GradientText from "../Global/GradientText";

function Forex() {
  return (
    <>
      {/* Overview  */}

      <section className="flex max-w-6xl flex-col mx-auto px-6  justify-left py-20  ">
        <div className=" max-w-2xl ">
          <span className="gap-2 px-4 py-1 my-8 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
            Overview
          </span>
          <ScrollReveal delay={0.5}>
            <h1 className=" md:text-5xl text-3xl font-[700] mt-6">
              Trade with Superior Technology and Transparency{" "}
            
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <p className=" max-w-2xl md:text-xl text-md mt-5">
              Experience the benefits of blockchain-powered trading with transparent execution, instant settlements, and complete control over your funds.

            </p>

            <Button variant="primary" className="mt-10">
              Start trading now
            </Button>
          </ScrollReveal>

          
        </div>
      </section>



<section className="flex max-w-6xl px-6 flex-col mx-auto pb-10  justify-left   ">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  <ScrollReveal delay={0.5}>
    <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
      <h3 className="text-[#0941f6] font-semibold text-lg flex gap-4"><img src="https://www.fxopulence.com/Assets/Images/how-it-works-2.svg" />400+ Trading Instruments</h3>
      <p className="text-gray-500 text-md">Major, minor, and exotic forex pairs</p>
    </div>
  </ScrollReveal>

  <ScrollReveal delay={0.7}>
    <div className="bg-white rounded-lg shadow p-6  flex flex-col h-full">
      <h3 className="text-[#0941f6] font-semibold text-lg flex gap-4"><img src="https://www.fxopulence.com/Assets/Images/wide-range.svg" className="w-7"/>Advanced Trading Tools</h3>
      <p className="text-gray-500 text-md">Professional charting, indicators, and analysis</p>
    </div>
  </ScrollReveal>

  <ScrollReveal delay={0.9}>
    <div className="bg-white rounded-lg shadow p-6  flex flex-col h-full">
      <h3 className="text-[#0941f6] font-semibold text-lg flex gap-4"><img src="https://www.fxopulence.com/Assets/Images/instruments.svg" />Synthetic <br />Assets</h3>
      <p className="text-gray-500 text-md">Trade unique synthetic instruments 24/7</p>
    </div>
  </ScrollReveal>

  <ScrollReveal delay={1.1}>
    <div className="bg-white rounded-lg shadow p-6  flex flex-col h-full">
      <h3 className="text-[#0941f6] font-semibold text-lg flex gap-4"><img src="https://www.fxopulence.com/Assets/Images/how-it-works-4.svg" />150+ Currency Pairs</h3>
      <p className="text-gray-500 text-md">Major, minor, and exotic forex pairs</p>
    </div>
  </ScrollReveal>
</div>
</section>



<section className="bg-[#f9f9ff] md:py-16 p-6">
      <div className="container mx-auto max-w-6xl  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <span className="gap-2 px-4 py-1 my-8 text-sm font-medium  text-[#0941f6] bg-white rounded-full shadow-md">
            Start Now
          </span>
          <ScrollReveal delay={0.6}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#0a0a2e] mt-4 leading-snug">
            Trade with <GradientText> Professional-Grade </GradientText>  Tools<br />
          </h2>

          </ScrollReveal>


          <ScrollReveal delay={0.8}>
          <p className="text-gray-600 mt-4 text-lg">
            Trade the most Popular Pairs on Vertex Terminal.

          </p>

          </ScrollReveal>
        </div>

        {/* Right Content: Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 bg-[#f3f3ff] text-[#0a0a2e] font-semibold px-6 py-3 text-sm">
            <span>Symbol</span>
            <span>Bid Price</span>
            <span>Ask Price</span>
            <span>Spread</span>
          </div>

          {/* Dummy Rows */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-4 px-6 py-3 border-t border-gray-100"
            >
              <div className="h-5 bg-gray-200 rounded-md"></div>
              <div className="h-5 bg-gray-200 rounded-md"></div>
              <div className="h-5 bg-gray-200 rounded-md"></div>
              <div className="h-5 bg-gray-200 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>





        <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto  text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-gray-600 text-lg mb-4">
              Switch to Montexc and tap into the cutting-edge technology.
            </p>
            <Button
              variant="primary"
              
            >
              Open Live Account
            </Button>
          </div>

          {/* Right Content */}
          <div>
           <span className="gap-2 px-4 py-1 my-8 text-sm font-medium  text-[#0941f6] bg-white rounded-full shadow-md">
            Benefits
          </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a0a2e] mt-6 ">
              Unlock Your Trading Potential  <GradientText variant="secondary"> With Montexc </GradientText>
            </h2>
          </div>
        </div>

        {/* Features Grid */}
         {/* Cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-3xl max-w-6xl p-5 mt-10 mx-auto bg-[#0941f60a] border border-[#0941f61f]" >
  {/* Card */}
  {[
    {
      img: "https://www.fxopulence.com/Assets/Images/advanced-trading-tools.svg",
      title: "Advanced TradingTools",
      text: "Access a wide range of advanced trading tools such as charting software, technical analysis indicators, and risk management tools."
    },
    {
      img: "https://www.fxopulence.com/Assets/Images/regulated-broker.svg",
      title: "Low Spreads",
      text: "Montexc offers some of the lowest spreads in the industry, ensuring that you can enter and exit positions with minimal costs."
    },
    {
      img: "https://www.fxopulence.com/Assets/Images/wide-range.svg",
      title: "High Liquidity",
      text: "The high liquidity of the market also means that your trades can be executed quickly and efficiently with Montexc."
    },
    {
      img: "https://www.fxopulence.com/Assets/Images/user-friendly-platform.svg",
      title: "User-Friendly Platform",
      text: "Designed to make trading accessible and easy for traders of all levels, according to your preferences and needs."
    },
  


  ].map((card, i) => (

    <ScrollReveal delay={0.6}>
    <div
      key={i}
      className="group rounded-2xl shadow-lg text-gray-900 p-6 border cursor-pointer border-white bg-white/70 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#0941f633]"
    >
      <div className="flex flex-col items-start">
        <img
          src={card.img}
          alt={card.title}
          className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        />
        <h3 className="text-xl font-[500] my-3 group-hover:text-[#0941f6] transition-colors">
          {card.title}
        </h3>
        <p className="text-gray-600 text-left">{card.text}</p>
      </div>
    </div>
    </ScrollReveal>
  ))}
</div>



      </div>
    </section>

    </>
  );
}

export default Forex;
