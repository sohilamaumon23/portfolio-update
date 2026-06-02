import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-xl px-margin-desktop max-w-[1440px] mx-auto scroll-reveal"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden glass-card">
            <img
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
              alt="Portrait of Sohila Maumon"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzgNFNxkLqIdbWhElKYOJs8ZBTQmcHXa48WGBp7Fn61UaPB5NQUXfAO7TxNN1M2t0fGVDpW6EKM9obrwYSS-FkK3sQvrqvt6xvz1nGBXZGhDuRnNHgEl0gjZ_CWwfm3htBC1517FRKAI6aY7iCYgiSnCYc-vFoxe4XuAy8V3gOz1W7dGNY4OJRRd4066YA-2Ydt1a26REj3KaSHuZ56UIO4X4QGNL4-w5ATyS0YUxceF3by6Pq_Nqh2572shWkvloS4AHfwYx1ssdS"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 blur-3xl rounded-full"></div>
        </div>
        <div className="md:col-span-7 pl-0 md:pl-lg">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase block mb-sm">
            The Artist
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-md glow-serif">
            Sohila Maumon
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed max-w-2xl">
            Passionate about storytelling, smooth transitions, and dynamic
            animations. Creating engaging visual content for brands and social
            media. With a degree from{" "}
            <span className="text-primary font-semibold">
              Future University in Egypt
            </span>
            , I blend technical precision with artistic flair.
          </p>
          <div className="flex gap-lg border-t border-white/10 pt-lg">
            <div>
              <span className="font-headline-md text-headline-md text-primary block">
                5+
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                Years Exp
              </span>
            </div>
            <div>
              <span className="font-headline-md text-headline-md text-primary block">
                150+
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
