import React, { useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Custom Cursor Logic with Lerp
    const cursor = document.getElementById("cursor");
    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    document.addEventListener("mousemove", onMove);

    let rafId;
    function animateCursor() {
      const lerp = 0.15;
      cursorX += (mouseX - cursorX) * lerp;
      cursorY += (mouseY - cursorY) * lerp;
      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }
      rafId = requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactives = document.querySelectorAll(
      ".interactive, button, a, input, textarea",
    );
    interactives.forEach((el) => {
      el.addEventListener(
        "mouseenter",
        () => cursor && cursor.classList.add("expand"),
      );
      el.addEventListener(
        "mouseleave",
        () => cursor && cursor.classList.remove("expand"),
      );
    });

    // Particle Background
    const canvas = document.getElementById("particles-canvas");
    const ctx = canvas ? canvas.getContext("2d") : null;
    let particles = [];

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 1 + 0.2);
        this.speedX = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y < 0) this.reset();
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 74, 141, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (canvas && ctx) {
      for (let i = 0; i < 60; i++) particles.push(new Particle());
    }

    let particlesRaf;
    function animateParticles() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      particlesRaf = requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // Intersection Observer for Entrance Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, observerOptions);

    document
      .querySelectorAll(".scroll-reveal, .reveal-text")
      .forEach((el) => revealObserver.observe(el));

    // Initial Hero Trigger
    window.addEventListener("load", () => {
      document.querySelectorAll("#hero .reveal-text").forEach((el, index) => {
        setTimeout(() => el.classList.add("active"), 200 * index);
      });
    });

    // 3D Tilt Effect and Mouse Glow for Skill Cards
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = -(x - centerX) / 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
        card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });

    // Project Parallax Effect
    function onScroll() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const parallaxImages = document.querySelectorAll(".parallax-img");
      parallaxImages.forEach((img) => {
        const rect = img.parentElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const speed = 0.15;
          const distance = windowHeight / 2 - (rect.top + rect.height / 2);
          const offset = distance * speed;
          img.style.transform = `scale(1.2) translateY(${offset}px)`;
        }
      });
    }
    window.addEventListener("scroll", onScroll);

    // cleanup
    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("load", () => {});
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(particlesRaf);
    };
  }, []);

  return (
    <div>
      <div className="custom-cursor" id="cursor"></div>
      <Header />
      <main className="relative w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section
          id="contact"
          className="py-xl px-margin-desktop bg-surface-container-low"
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl">
            <div className="scroll-reveal">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase block mb-sm">
                Connect
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-md glow-serif">
                Let's Collaborate
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                Available for freelance motion design projects and creative
                partnerships worldwide.
              </p>
              <div className="space-y-md">
                <div className="flex items-center gap-md group interactive">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary">
                      mail
                    </span>
                  </div>
                  <span className="font-body-md text-body-md">
                    hello@smaumon.com
                  </span>
                </div>
                <div className="flex items-center gap-md group interactive">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                  </div>
                  <span className="font-body-md text-body-md">
                    Cairo, Egypt / Remote
                  </span>
                </div>
              </div>
            </div>
            <div
              className="glass-card p-lg rounded-xl scroll-reveal"
              style={{ transitionDelay: "200ms" }}
            >
              <form className="space-y-md">
                <div className="grid grid-cols-2 gap-md">
                  <input
                    className="bg-[#050505] border-white/10 text-on-surface focus:ring-0 rounded-lg p-md transition-all font-body-md neon-input interactive"
                    placeholder="Full Name"
                    type="text"
                  />
                  <input
                    className="bg-[#050505] border-white/10 text-on-surface focus:ring-0 rounded-lg p-md transition-all font-body-md neon-input interactive"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <input
                  className="w-full bg-[#050505] border-white/10 text-on-surface focus:ring-0 rounded-lg p-md transition-all font-body-md neon-input interactive"
                  placeholder="Subject"
                  type="text"
                />
                <textarea
                  className="w-full bg-[#050505] border-white/10 text-on-surface focus:ring-0 rounded-lg p-md transition-all font-body-md neon-input interactive"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
                <button className="w-full py-md bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:shadow-primary/30 active:scale-95 transition-all interactive">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
