import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import Partnership from "./pages/Partnership";
import Home from "./pages/Home";
import Instruments from "./pages/Instruments";
import FancyCursor from "./components/Global/FancyCursor";
import MetaTrader from "./pages/MetaTrader";
import AccountType from "./pages/AccountType";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Risk_Disclosure from "./pages/Risk_Disclosure";
import Privacy_Policy from "./pages/Privacy_Policy";
import Execution_Risks from "./pages/Execution_Risks";

function App() {
  return (
    <>
      {/* Custom Glowing Cursor */}
      <FancyCursor />

      {/* Main Layout */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/vertex-trader" element={<MetaTrader />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/risk-disclosure" element={<Risk_Disclosure />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/execution-risks" element={<Execution_Risks />} />



      </Routes>
      <Footer />
    </>
  );
}

export default App;
