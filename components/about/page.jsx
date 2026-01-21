'use client';
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

function Icon({ name, className }) {
  switch (name) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.94 14.5L2 22l5.6-1.49A10 10 0 1 0 12 2zm5.6 14.19c-.24.67-1.4 1.28-1.96 1.31-.52.03-1.17.05-2-.13a8.87 8.87 0 0 1-3.95-2.04 8.79 8.79 0 0 1-2.67-3.39c-.65-1.3-.7-2.39-.62-3.2.08-.81.55-1.2.93-1.36.24-.11.52-.12.84.01.26.11.43.3.58.64.2.45.74 1.82.81 1.95.07.13.12.28.02.45-.1.16-.15.26-.29.41-.14.15-.3.33-.43.45-.14.12-.3.25-.13.56.17.3.74 1.22 1.58 1.98 1.09.96 2.02 1.26 2.32 1.4.3.14.48.12.65-.07.17-.19.75-.87.95-1.18.2-.31.41-.26.67-.16.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.69-.17 1.36z" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.4-1.4z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function About() {
  const { t, messages } = useI18n();
  const statsRef = useRef(null);
  const videoRef = useRef(null);
  const [start, setStart] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (el) {
      const io = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      }, { threshold: 0.4 });
      io.observe(el);
    }
    const v = videoRef.current;
    if (v) {
      const vio = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVideoVisible(true);
          vio.disconnect();
        }
      }, { threshold: 0.15 });
      vio.observe(v);
    }
  }, []);

  function Counter({ end, duration = 1200, prefix = "", suffix = "", start }) {
    const [val, setVal] = useState(0);
    useEffect(() => {
      if (!start) return;
      let raf = 0;
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        setVal(Math.floor(p * end));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [start, end, duration]);
    return <div className="text-3xl font-extrabold text-primary">{`${prefix}${val}${suffix}`}</div>;
  }
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300" id="about" style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
      <div className="container mx-auto px-4">
        <div className="text-center md:text-right mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">{t("about.section_label")}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-secondary dark:text-white">{t("about.heading")}</h2>
          <div className="mx-auto md:mx-0 w-24 h-1 bg-primary dark:bg-primary-dark mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border-b-8 border-primary dark:border-primary-dark transition-transform transform group-hover:-translate-y-1">
              <div ref={videoRef} className="absolute inset-0">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  loop
                  playsInline
                  poster="/icons/whiteEgg.png"
                  preload="none"
                >
                  {isVideoVisible && <source src="/videos/video.mp4" type="video/mp4" />}
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div>
            <p className="text-foreground/80 dark:text-gray-300 mb-6 leading-8 text-lg">{t("about.description")}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {(messages?.about?.highlights || []).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm">
                  <Icon name="check" className="text-primary w-4 h-4" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center bg-card-light dark:bg-card-dark rounded-xl p-4 border-b-4 border-primary shadow-sm">
                <Counter start={start} end={40} suffix="+" />
                <div className="text-sm text-foreground/70">{t("about.stats.experience_years_label")}</div>
              </div>
              <div className="text-center bg-card-light dark:bg-card-dark rounded-xl p-4 border-b-4 border-primary shadow-sm">
                <Counter start={start} end={25} suffix="+" />
                <div className="text-sm text-foreground/70">{t("about.stats.partnerships_label")}</div>
              </div>
              <div className="text-center bg-card-light dark:bg-card-dark rounded-xl p-4 border-b-4 border-primary shadow-sm">
                <Counter start={start} end={24} suffix="/7" />
                <div className="text-sm text-foreground/70">{t("about.stats.support_label")}</div>
              </div>
              <div className="text-center bg-card-light dark:bg-card-dark rounded-xl p-4 border-b-4 border-primary shadow-sm">
                <Counter start={start} end={95} prefix="+" suffix="%" />
                <div className="text-sm text-foreground/70">{t("about.stats.customer_satisfaction_label")}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                aria-label="WhatsApp Contact"
                href="https://wa.me/963989889025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-bold px-6 py-3 rounded-md shadow-lg transition-colors"
              >
                <Icon name="whatsapp" className="w-5 h-5 shrink-0" />
                <span>{t("about.actions.contact")}</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
