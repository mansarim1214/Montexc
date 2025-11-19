import Button from "../components/Global/Button";
import ScrollReveal from "../components/Animation/ScrollReveal";
import GradientText from "../components/Global/GradientText";
import FAQ from "../components/Global/FAQ";
import { CheckCircle, Phone, MessageCircle, MapPin, Mail, HelpCircle } from "lucide-react";

function Contact() {
  return (
    <>
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
              Contact
            </span>
          </div>

          <div className=" relative">
            <div>
              <ScrollReveal delay={0.5}>
                <h1 className="max-w-lg font-bold md:text-6xl text-5xl">
                  Let’s talk
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <p className="text-lg my-8 max-w-md">
                  Are you an existing or new user to trade? We are here to
                  answer your questions and resolve issues 24/7.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-5 rounded-3xl max-w-6xl  mt-10 mx-auto bg-[#0941f60a] border border-[#0941f61f]">
                {/* Card */}
                {[
                  {
                    icon: Phone,
                    title: "92173848387",
                    text: "Call Support",
                  },
                  {
                    icon:Mail,
                    title: "support@montexc.com",
                    text: "Raise a ticket",
                  },
                  {
                    icon: HelpCircle,
                    title: "Read FAQs",
                    text: "Read most common questions",
                  },
                ].map((card, i) => (
                  <ScrollReveal delay={0.6}>
                    <div
                      key={i}
                      className="group rounded-2xl shadow-lg h-full text-gray-900 p-6 border cursor-pointer border-white bg-white/70 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#0941f633]"
                    >
                      <div className="flex flex-col items-start">
                        <div className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-[#0941f6]">
                          <card.icon className="w-6 h-6 text-white" />
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="gap-2 px-4 py-1 my-8 text-sm font-medium  text-[#0941f6] bg-white rounded-full shadow-md">
              FAQs
            </span>
            <ScrollReveal delay={0.6}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a2e] mt-4 leading-snug">
                Frequently Asked <GradientText>Questions</GradientText>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <p className="text-gray-600 mt-4 text-lg">
                Most common questions.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <FAQ />
      </section>

      <section className="py-16 bg-[#0941f60a]">
        <div className="container mx-auto max-w-6xl px-6  grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Left Content */}
          <div>
            <span className="gap-2 px-4 py-1 my-8 text-sm font-medium  text-[#0941f6] bg-white rounded-full shadow-md">
              We’re 24/7 Online
            </span>
            <ScrollReveal delay={0.6}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a2e] mt-4 leading-snug">
                Get in touch with our team
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <p className="text-gray-600 mt-4 text-lg">
                Connect with us today and let our team assist you!
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h4 className="mt-10 mb-5 text-xl font-[600]">
                Our Team Can help you with
              </h4>

              <ul className="space-y-3 mb-3">
                {[
                  "Account Setup",
                  "Issues with trading",
                  "Account related queries",
                  "Any Spam Activities",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3  p-2 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <CheckCircle className="text-[#0941f6] w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-800 text-md">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className=" p-4 rounded-xl shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-3xl">🇦🇺</span>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <MapPin className="text-[#0941f6] w-4 h-4 mr-2" />
                    Location
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">Business Bay, Dubai, UAE</p>

                <div className="flex items-center space-x-4">
                  <MessageCircle className="text-[#0941f6] w-6 h-6" />
                  <Phone className="text-[#0941f6] w-6 h-6" />
                  <a
                    href="tel:+91876876"
                    className="text-md font-medium text-[#0941f6] hover:underline"
                  >
                    +9187868878
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className=" rounded-3xl  p-7  bg-white shadow-md border border-[#0941f61f] ">
            {/* Form */}
            <form className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl border border-[#0941f61f] bg-transparent shadow-md focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl border border-[#0941f61f] bg-transparent shadow-md focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-[#0941f61f] bg-transparent shadow-md focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-xl border border-[#0941f61f] bg-transparent shadow-md focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 rounded-xl border border-[#0941f61f] bg-transparent shadow-md focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option>Country</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Pakistan</option>
                </select>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-xl border border-[#0941f61f] bg-transparent shadow-md focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-[#0941f61f] bg-transparent shadow-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-[#0941f61f] bg-transparent shadow-md focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>

              {/* Submit Button */}
              <Button type="submit" className="mr-0">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
