import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-xl bg-surface-container-lowest px-margin-desktop"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-lg text-center md:text-left scroll-reveal">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase block mb-sm">
            Stack
          </span>
          <h2 className="font-headline-lg text-headline-lg glow-serif">
            Technical Proficiency
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="skill-card-container scroll-reveal">
            <div className="skill-card glass-card p-lg rounded-xl neon-glow transition-all group h-full">
              <span
                className="material-symbols-outlined text-primary text-[48px] mb-md group-hover:scale-110 transition-transform block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                movie_edit
              </span>
              <h3 className="font-headline-md text-[24px] mb-sm glow-serif">
                VFX
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Integrating high-end visual effects and particle systems into
                seamless live-action footage.
              </p>
            </div>
          </div>
          <div
            className="skill-card-container scroll-reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="skill-card glass-card p-lg rounded-xl neon-glow transition-all group h-full">
              <span
                className="material-symbols-outlined text-primary text-[48px] mb-md group-hover:scale-110 transition-transform block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                graphic_eq
              </span>
              <h3 className="font-headline-md text-[24px] mb-sm glow-serif">
                Sound Design
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Crafting immersive auditory experiences that pulse in perfect
                harmony with every visual frame.
              </p>
            </div>
          </div>
          <div
            className="skill-card-container scroll-reveal"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="skill-card glass-card p-lg rounded-xl neon-glow transition-all group h-full">
              <span
                className="material-symbols-outlined text-primary text-[48px] mb-md group-hover:scale-110 transition-transform block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                layers
              </span>
              <h3 className="font-headline-md text-[24px] mb-sm glow-serif">
                After Effects
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mastery of complex compositions, expressions, and dynamic motion
                graphic workflows.
              </p>
            </div>
          </div>
          <div
            className="skill-card-container scroll-reveal"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="skill-card glass-card p-lg rounded-xl neon-glow transition-all group h-full">
              <span
                className="material-symbols-outlined text-primary text-[48px] mb-md group-hover:scale-110 transition-transform block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                video_camera_front
              </span>
              <h3 className="font-headline-md text-[24px] mb-sm glow-serif">
                Premiere Pro
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Precision editing and color grading to deliver high-impact
                narrative flow for commercial brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
