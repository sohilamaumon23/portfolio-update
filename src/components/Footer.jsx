import React from "react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-xl border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop w-full max-w-[1440px] mx-auto gap-lg">
        <span className="font-headline-md text-headline-md text-primary uppercase font-bold glow-serif">
          S.MAUMON
        </span>
        <span className="font-label-md text-label-md text-on-surface-variant order-3 md:order-none">
          © 2024 SOHILA MAUMON. ALL MOTION RESERVED.
        </span>
        <div className="flex gap-md">
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all interactive"
            href="#"
          >
            Instagram
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all interactive"
            href="#"
          >
            Vimeo
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all interactive"
            href="#"
          >
            LinkedIn
          </a>
          <button
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all interactive"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
