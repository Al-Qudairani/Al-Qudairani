'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useI18n } from "@/i18n/I18nProvider";

export default function About() {
  const { t, messages } = useI18n();
  const statsRef = useRef(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setStart(true);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
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
    <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-right mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">{t("about.section_label")}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-secondary dark:text-white">{t("about.heading")}</h2>
          <div className="mx-auto md:mx-0 w-24 h-1 bg-primary dark:bg-primary-dark mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border-b-8 border-primary">
              <div className="absolute inset-0">
                <Image
                  alt={t("about.image_alt")}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjWAhWkWdoQdwfHAJlEcr9PwnExWtoboAgmh7h2ax6MHwGd8r4ITA3DIfA-JZZzrl448CBqmxJEmvvjHbzce9T41HF0ddZ_SGDC8dtVqC1MQ52KUD17TNTllcCTJvp2303RYOeJ0YaeO9GTRb7r5GUSWSNtzbayq9BacfNjU9c9aDGNg5d6I5W5ioAYmdqIDBOiYKJY3h9bkbLSrFYY8e-W1HNGcPojCZEmAbbPsEXesUG4LaMgfvL-VsBdOwBi5gjQ0AdhduHZBI"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center pl-1 shadow-lg ring-8 ring-white/10 hover:ring-white/20 transition">
                  <span className="material-icons text-secondary text-4xl">play_arrow</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-foreground/80 dark:text-gray-300 mb-6 leading-8 text-lg">{t("about.description")}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {(messages?.about?.highlights || []).map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm">
                  <span className="material-icons text-primary">check_circle</span>
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
                <WhatsAppIcon fontSize="small" className="shrink-0" />
                <span>{t("about.actions.contact")}</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
