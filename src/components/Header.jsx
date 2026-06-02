import React from "react";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center w-full px-margin-desktop py-base max-w-[1440px] mx-auto">
        <span className="font-headline-md text-headline-md font-black tracking-tighter text-on-surface uppercase glow-serif">
          S.MAUMON
        </span>
        <div className="hidden md:flex gap-lg items-center">
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all duration-300 interactive"
            href="#work"
          >
            Work
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all duration-300 interactive"
            href="#about"
          >
            About
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all duration-300 interactive"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all duration-300 interactive"
            href="#contact"
          >
            Contact
          </a>
          <button className="px-md py-sm bg-primary-container text-on-primary-fixed font-bold rounded-xl shadow-lg active:scale-95 transition-transform duration-150 interactive">
            Hire Me
          </button>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-primary cursor-pointer interactive">
            menu
          </span>
        </div>
      </div>
    </nav>
  );
}
