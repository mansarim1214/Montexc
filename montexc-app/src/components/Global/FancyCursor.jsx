import { useEffect, useRef } from "react";

export default function FancyCursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smooth interpolation (0.1 controls the speed)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.5;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.5;

      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: -17,
        left: -12,
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        background: "#0941f6",
       
        pointerEvents: "none",
        transform: "translate3d(0,0,0)",
        transition: "width 1s ease, height 1s ease",
        zIndex: 9999,
      }}
    />
  );
}
