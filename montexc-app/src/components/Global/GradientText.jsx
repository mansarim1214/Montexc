function GradientText({ children, variant = "primary", className = "" }) {
  const variants = {
    primary: "bg-gradient-to-r from-[#042694] to-[#0941f6]",
    secondary: "bg-gradient-to-r from-[#0941f6] to-[#0941f6]",
    success: "bg-gradient-to-r from-green-400 to-green-600",
    danger: "bg-gradient-to-r from-red-400 to-red-600",
  };

  return (
    <span
      className={`bg-clip-text text-transparent font-[600] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default GradientText;
