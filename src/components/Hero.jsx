import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-center items-center px-margin-desktop overflow-hidden"
    >
      <canvas id="particles-canvas"></canvas>
      <div className="z-10 text-center">
        <h2 className="font-label-md text-label-md text-primary tracking-[0.5em] uppercase mb-md reveal-text">
          Motion Designer &amp; Visual Artist
        </h2>
        <h1 className="font-headline-xl text-headline-xl mb-lg reveal-text glow-serif">
          <span className="block hero-title-fill">CRAFTING MOTION.</span>
          <span className="block">TELLING STORIES.</span>
          <span className="block hero-title-fill">DEFINING BRANDS.</span>
        </h1>
        <div className="flex gap-md justify-center reveal-text">
          <a
            className="px-lg py-sm border border-primary text-primary font-bold rounded-xl neon-glow transition-all interactive"
            href="#work"
          >
            VIEW SHOWREEL
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-on-surface-variant opacity-50">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
}
