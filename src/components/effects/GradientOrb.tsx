"use client";

export default function GradientOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-float blur-[80px]"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-15 animate-float blur-[100px]"
        style={{
          background: "radial-gradient(circle, #8b5cf6, transparent)",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 animate-float blur-[60px]"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent)",
          animationDelay: "1.5s",
        }}
      />
    </div>
  );
}
