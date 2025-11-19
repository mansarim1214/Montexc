import { motion } from "framer-motion";

const WaveText = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.06, // delay between each letter
          },
        },
      }}
      className="inline-block"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 0 },
            visible: { y: [0, -15, 0] }, // wave up & down
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 3, // pause between loops
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WaveText;
