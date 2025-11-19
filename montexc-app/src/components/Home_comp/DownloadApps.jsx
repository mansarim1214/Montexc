import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";
import GradientText from "../Global/GradientText";


// FOR HOME 
const DownloadApps = () => {


  return (
       <div className="max-w-6xl mx-auto py-10  px-8 shadow-lg mt-20 border border-[#0941f61f] rounded-2xl">
        <div className="flex justify-start mb-6 ">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
            Download Apps
          </span>
        </div>

        <div className="">
          <div>
            <ScrollReveal delay={0.5}>
              <h1 className="max-w-md">
                <GradientText variant="secondary" className="text-5xl">Start Trading in Minutes!</GradientText>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <p className="text-lg text-gray-600 my-8 max-w-md">
               Set up your trading account in 3 easy steps!
              </p>
            </ScrollReveal>


            {/* icons  */}

                <div className="flex flex-wrap  gap-6  ">
      {/* Windows */}

      <ScrollReveal delay={0.5}>
      <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition">
        <img src="https://www.fxopulence.com/Assets/Images/window.svg" alt="Windows" className="w-8 h-8" />
        <span className="text-lg font-semibold text-[#1a1a40]">For Windows</span>
      </div>
      </ScrollReveal>

      {/* App Store */}
      <ScrollReveal delay={0.7}>
      <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition">
        <img src="https://www.fxopulence.com/Assets/Images/apple.svg" alt="App Store" className="w-8 h-8" />
        <span className="text-lg font-semibold text-[#1a1a40]">App Store</span>
      </div>
      </ScrollReveal>

      {/* Google Play */}
      <ScrollReveal delay={0.9}>
      <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition">
        <img src="https://www.fxopulence.com/Assets/Images/android.svg" alt="Google Play" className="w-8 h-8" />
        <span className="text-lg font-semibold text-[#1a1a40]">Google Play</span>
      </div>
      </ScrollReveal>
    </div>

  
          </div>


        </div>
      </div>
  );
};

export default DownloadApps;
