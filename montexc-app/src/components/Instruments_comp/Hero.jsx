import Button from "../Global/Button";
import ScrollReveal from "../Animation/ScrollReveal";



// FOR Instruments

function Hero() {

  return (
    <section className=" relative md:h-[60vh] flex py-20 items-center justify-center text-white overflow-hidden">
          
       <div className="absolute inset-0 bg-gradient-to-r 
from-[#1e3a8a] 
via-[#3b82f6] 
via-[#60a5fa] 
to-[#93c5fd]">
</div>
           
   
           <div className="flex  md:flex-row flex-col max-w-6xl px-6 mt-10 relative md:gap-20 gap-xs-2 mx-auto">
             <div>

                <span className="gap-2 px-4 py-1 my-8 text-sm font-medium text-[#0941f6] bg-white rounded-full shadow-md">
               Instruments
             </span>
               <ScrollReveal delay={0.5}>
                 <h1 className="max-w-xl md:text-6xl text-4xl font-[700] mt-6">
                   Trade 400+ Instruments with Complete Transparency

                 </h1>
               </ScrollReveal>
   
              
     
             </div>
   
             <div>
       
   
               <ScrollReveal delay={0.8} >
                 {/* Card  */}
                 <div className=" md:text-right">
                   <p className=" max-w-lg text-xl mt-5">
                    Access major forex pairs, cryptocurrencies, commodities, and indices with institutional-grade execution and transparent pricing.



                   </p>
   
                   <Button variant="primary"  className="mt-10">Open Live Account</Button>
                 </div>
               </ScrollReveal>
             </div>
           </div>


           
        </section>



  );
}

export default Hero;
