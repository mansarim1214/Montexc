import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

function Navbar() {

  const location = useLocation();

  const linkClass = (path) =>
    `transition ${
      location.pathname === path
        ? "text-primary "
        : "text-gray-700 hover:text-primary"
    }`;


  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-inter transition-all duration-300 p-4">
      <div
        className={`mx-auto flex items-center justify-between md:px-6 transition-all duration-300 p-3 rounded-2xl
          ${scrolled ? "max-w-4xl" : "max-w-7xl"} 
          ${scrolled ? "bg-gray-50 shadow-md border border-[#0941f61f]" : "bg-white"}
        `}
      >
        {/* Logo */}
        <div
          className={`font-bold text-dark transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
         <a href="/" className="logo md:text-[34px] text-[28px] font-semibold text-black">
  Monte<span className="text-[#0941f6]">x</span>c
</a>

        </div>

        {/* Desktop Menu */}
<div className="hidden md:flex flex-1 items-center justify-center space-x-8">
      <Link to="/instruments" className={linkClass("/instruments")}>
        Instruments
      </Link>

      {/* Platform Dropdown */}
      <div className="relative group">
        <button
          className={`p-2 bg-transparent hover:border-transparent focus:outline-0 rounded-lg inline-flex items-center transition ${
            ["/vertex-trader", "/account-type"].includes(location.pathname)
              ? "text-primary "
              : "text-gray-700 hover:text-primary"
          }`}
        >
          Platform
          <svg
            className="ml-1 w-4 h-4 text-gray-500 group-hover:text-primary transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-200 z-20">
          <Link
            to="/vertex-trader"
            className={`block px-4 py-2 rounded-t-xl transition ${
              location.pathname === "/vertex-trader"
                ? "text-primary  bg-gray-50"
                : "text-gray-700 hover:bg-gray-100 hover:text-primary"
            }`}
          >
            Vertex Trader
          </Link>
          <Link
            to="/account-type"
            className={`block px-4 py-2 rounded-b-xl transition ${
              location.pathname === "/account-type"
                ? "text-primary  bg-gray-50"
                : "text-gray-700 hover:bg-gray-100 hover:text-primary"
            }`}
          >
            Account Type
          </Link>
        </div>
      </div>

      <Link to="/partnership" className={linkClass("/partnership")}>
        Partnership
      </Link>
      <Link to="/about" className={linkClass("/about")}>
        About
      </Link>
      <Link to="/contact" className={linkClass("/contact")}>
        Contact
      </Link>
    </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white bg-[#0941f6]  text-2xl p-2 px-3" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-md px-6 py-4 space-y-4 text-left rounded-2xl">
          <a href="/instruments" className="block text-gray-700 hover:text-primary transition">
            Instruments
          </a>

          {/* Platform Collapsible */}
          <div>
            <button
              className="w-full flex items-center justify-between bg-transparent p-0 text-gray-700 hover:border-transparent focus:outline-0 transition" size="sm"
              onClick={() => setPlatformOpen(!platformOpen)}
            >
              Platform
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform ${
                  platformOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                platformOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <a href="/vertex-trader" className="block text-gray-600 hover:text-primary transition">
                Vertex Trader
              </a>
              <a href="/account-type" className="block text-gray-600 hover:text-primary transition">
                Account Type
              </a>
            </div>
          </div>

          <a href="/partnership" className="block text-gray-700 hover:text-primary transition">
            Partnership
          </a>
          <a href="/about" className="block text-gray-700 hover:text-primary transition">
            About
          </a>
          <a href="/contact" className="block text-gray-700 hover:text-primary transition">
            Contact
          </a>

          <Button fullWidth>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
