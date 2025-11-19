import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";
import WaveText from "../Animation/WaveText";



function Hero() {




  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center pt-20 md:pt-0 text-center px-6 bg-white overflow-hidden">
     

       <ScrollReveal>
      <div className="max-w-4xl mx-6 text-center mt-5">
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
          Partnership
        </span>

<h1 className="text-3xl md:text-6xl font-bold py-6 text-dark ">
  Partner with us as an {" "}
  <WaveText text="Introducing Broker" />
</h1>

        <p className="text-lg text-secondary max-w-md mx-auto mb-8">
          Grow your network, expand our client base, 
and unlock high-earning commission opportunities.

        </p>
        <Button>Become a partner</Button>
      </div>
      </ScrollReveal>
    </section>
  );
}

export default Hero;
