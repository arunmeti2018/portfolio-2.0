import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
  distance = 24,
  className = "",
  style = {},
}: ScrollRevealProps) {
  const customStyle: React.CSSProperties = {
    width,
    ...style,
  };

  return (
    <div
      className={`reveal-on-scroll ${className}`}
      data-direction={direction}
      style={
        {
          ...customStyle,
          "--reveal-delay": `${delay}s`,
          "--reveal-distance": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
