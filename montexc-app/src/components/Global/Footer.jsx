import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-7 py-8 shadow-lg mt-10 border border-[#0941f61f] rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-[#0941f6] font-bold text-lg">Montexc</span>
            </div>

            {/* Links */}
            <nav className="flex gap-6  font-medium text-sm">
              <a href="/risk-disclosure" className="text-black underline">Risk Disclosure </a>
              <a href="/privacy-policy" className="text-black underline">Privacy Policy </a>
              <a href="/execution-risks" className="text-black underline">Execution Risks</a>
             
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-xl shadow-md hover:bg-green-100 transition"
              >
                <Instagram className="w-5 h-5 text-[#0941f6]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-xl shadow-md hover:bg-green-100 transition"
              >
                <Twitter className="w-5 h-5 text-[#0941f6]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-xl shadow-md hover:bg-green-100 transition"
              >
                <Linkedin className="w-5 h-5 text-[#0941f6]" />
              </a>
            </div>

            {/* Credit */}
            <p className="text-sm text-black]">
              Made by{" "}
              <a href="#" className="underline font-medium text-black">
                Web Astrals
              </a>{" "}
              ·{" "}
              <a href="mailto:webastrals@gmail.com" className="underline font-medium text-black">
                webastrals@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center md:text-left text-sm text-black">
          © 2025 Montexc. All rights reserved.
        </div>


{/* Warning */}
        <div className="">
<h3 className=" font-bold text-red-600 mt-8">General Risk Warning:</h3>
<p className="text-sm text-gray-500">CFDs are leveraged products. Trading foreign exchange on margin carries a high level of
risk and may not be suitable for all investors. The high degree of leverage can work
against you as well as for you. Before deciding to trade foreign exchange through
Montexc, you should carefully consider your investment objectives, level of experience,
and risk appetite. The possibility exists that you could sustain a loss in excess of your
initial investment. Under no circumstances shall Montexc have any liability to any
person or entity for any loss or damage in whole or part caused by, resulting from, or
relating to any transactions related to CFDs or other financial instruments offered on our
platform. You should be aware of all the risks associated with foreign exchange trading
and seek advice from an independent financial advisor if you have any doubts about the
suitability of trading with Montexc.</p>
        </div>
      </div>
    </footer>
  );
}
