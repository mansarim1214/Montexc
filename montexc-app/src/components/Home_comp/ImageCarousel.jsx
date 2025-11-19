const images = [
  "/media/binancecoin.svg",
  "/media/bitcoin.svg",
  "/media/tethercoin.svg",
  "/media/usdcoin.svg",
];

function ImageCarousel() {
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden py-8 bg-white">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Marquee Track */}
      <div className="marquee flex gap-12">
        {/* Duplicate logos twice for seamless loop */}
        {[...images, ...images, ...images, ...images ].map((src, i) => (
          <div key={i} className="flex-shrink-0 md:w-25 md:h-25 flex items-center justify-center">
            <img src={src} alt={`icon-${i}`} className="w-full h-full " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
