import React from "react";

export default function Projects() {
  return (
    <section
      id="work"
      className="py-xl px-margin-desktop max-w-[1440px] mx-auto"
    >
      <div className="flex justify-between items-end mb-lg scroll-reveal">
        <div>
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase block mb-sm">
            Portfolio
          </span>
          <h2 className="font-headline-lg text-headline-lg glow-serif">
            Selected Works
          </h2>
        </div>
        <div className="hidden md:block">
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary border-b border-primary/20 pb-1 interactive"
            href="#"
          >
            View Full Archive
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="parallax-container scroll-reveal md:col-span-2 group interactive">
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden glass-card">
            <img
              className="parallax-img w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvuQlX-esTxADBUdksJV5g6JnAJ4TvH0u-XV2YVv6LLBHl7Pp-lXUGpJhYdax3GZl3cmEF2_gjCYQ1JyDm4V5YW2YeNmwLax2aaXnxsLPXHZcu8RZQxrcWxgZvoyv_BwssyxFJYt_XNZRmDgyyNkLwFI5FhN7-SWoqg7FBFVU5_hYfg7bR8YSvaak5LfYq0KhbrWefgUJXhu7BtQBMEG5ptIW7bed6prlJMLB6kAI0ernkMMZUZMOUKutya50WW9-T16smF433_TQc"
              alt="Digital Echoes"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-base left-base md:bottom-lg md:left-lg">
              <span className="px-sm py-xs bg-primary/10 text-primary border border-primary/20 font-code-sm rounded-lg mb-sm inline-block">
                BRAND IDENTITY
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface glow-serif">
                Digital Echoes 2024
              </h3>
            </div>
          </div>
        </div>
        <div className="parallax-container scroll-reveal group interactive">
          <div className="relative aspect-video rounded-xl overflow-hidden glass-card">
            <img
              className="parallax-img w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp4DO2buM1CDfUdA6gmouxqLf_ItgTrAUpM5oLn7TFF3QryluLtRQJv8bslUl7SINaE1i1uDU4ITpQjrr00-l-sbAxc0KizTd3ZifU1m08mHWpqal-Mh21Q1jiow7Yw6wU_EVS4DdpT5cVQfFXHNOtkaOMgR-_RlQjcIMdPhhdy_MEzq6gkU6Lmrw_KsjtBtegKz5aOUGAIq1T6i32bkuSENFjR6NaXqaOJiFpYH5eOp41DlN3qM59Igk16yXX1lrUn_GiV9iyt4u7"
              alt="Neon Horizon"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-base left-base md:bottom-md md:left-md">
              <span className="px-sm py-xs bg-primary/10 text-primary border border-primary/20 font-code-sm rounded-lg mb-sm inline-block">
                SOCIAL EDIT
              </span>
              <h3 className="font-headline-md text-[24px] text-on-surface glow-serif">
                Neon Horizon Commercial
              </h3>
            </div>
          </div>
        </div>
        <div
          className="parallax-container scroll-reveal group interactive"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden glass-card">
            <img
              className="parallax-img w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYFOFCulrzlpX5lb0034donmUkbKCh_aomprN8UooKCBzC5Apvr4hs7PQjtTdsztpo8863_j08rtAp5KsbkwqtxOgYL2gub29lSMC8DzyK2ak86A2lSuDoqCRhAwv6PlwzMI1QRck78N9dEShJrhZfon8t0wPRUR-DKP5yPEvz8Fai4ZBXHaUHAOA4ZTSuCDATXCk9SftYQvc_FgWXouu8ICwrRSUBzCrzfC7lbDGJ_cMZbQ9i7J44bvrokGpz1yBm60sUFfH9GMno"
              alt="Glitch"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-base left-base md:bottom-md md:left-md">
              <span className="px-sm py-xs bg-primary/10 text-primary border border-primary/20 font-code-sm rounded-lg mb-sm inline-block">
                VFX REEL
              </span>
              <h3 className="font-headline-md text-[24px] text-on-surface glow-serif">
                Glitch In The Machine
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
