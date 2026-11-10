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
  className = "",
  style = {},
}: ScrollRevealProps) {
  return (
    <div
      className={`w-full relative ${className}`}
      style={{ width, ...style }}
    >
      {children}
    </div>
  );
}
