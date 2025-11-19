import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";
import WaveText from "../Animation/WaveText";
import { Shield } from "lucide-react";


// FOR HOME

function Hero() {

  return (
    <section className="relative md:min-h-[70vh] flex gap-6 flex-col justify-center items-center p-6 text-center py-20 bg-white overflow-hidden">
     

       <ScrollReveal>
      <div className="max-w-4xl text-center mt-5">
        <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-[#0941f6]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          First of It’s Kind
        </span>

<h1 className="text-[1.8rem] py-5 md:text-6xl font-bold text-dark ">
  Trade Forex with Complete {" "}
  <WaveText text="Transparency & Control "/>
</h1>

        <p className="text-lg text-secondary max-w-xl mx-auto mb-8">
          Access global forex markets with cutting-edge technology, competitive spreads, and 24/7 support. Start trading with confidence today.
        </p>
        <Button>Start Trading Now</Button>
        <Button variant="outline" className="md:ml-5 mt-3">Try Risk-Free Demo</Button>

      </div>
      </ScrollReveal>

         <span className="inline-flex items-center gap-2 px-4 py-7 text-md font-normal text-gray-800">
         <Shield /> 
          Highly Encrypted & Secured
        </span>

    </section>
  );
}

export default Hero;
