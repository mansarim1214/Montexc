import React from "react";
import Button from "../Global/Button";

const JoinForm = () => {
  return (
    <div className="bg-[#0941f60a] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-transparent md:p-8 py-10 rounded-lg">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-sm bg-[#0941f6] border border-[#0941f60a] rounded-full bg-indigo-100">
            IB Program
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#0941f6]">
          Join our IB Program
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-8">
          The deposit system in Montexc is extremely fast, wherein traders
          will use any crypto wallet.
        </p>

        {/* Form */}
        <form className="space-y-6 rounded-3xl  p-7 bg-white shadow-md border border-[#0941f61f]">
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
          <Button
            type="submit" className="mr-0"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
