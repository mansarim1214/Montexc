function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
  const baseStyles = "font-normal rounded-xl transition-all shadow-[#0941f6_0px_0.839802px_0.839802px_-0.3125px,#0941f6_0px_1.99048px_1.99048px_-0.625px,#0941f6_0px_3.63084px_3.63084px_-0.9375px,#0941f6_0px_6.03627px_6.03627px_-1.25px,#0941f6_0px_9.74808px_9.74808px_-1.5625px,#0941f6_0px_15.9566px_15.9566px_-1.875px,#0941f6_0px_27.4762px_27.4762px_-2.1875px#0941f6_0px_50px_50px_-2.5px]";

  const variants = {
    primary: "bg-[#0941f6] text-white  hover:bg-[#0941f6] hover:text-white border-10 border-[#0941f6]",
    outline: "border border-[#0941f6]  bg-transparent hover:bg-[#0941f6] hover:text-white",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
