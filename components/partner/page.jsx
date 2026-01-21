'use client';
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

function IconArrow({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z" />
    </svg>
  );
}

export default function Partner() {
  const { t } = useI18n();
  return (
    <section id="partner" className="relative py-24 bg-background transition-colors duration-300 dark:bg-background-dark overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-8%] right-[-10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-12%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-card-light dark:bg-card-dark border-b-8 border-primary dark:border-primary-dark flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">{t("partner.section_label")}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">{t("partner.heading")}</h2>
            <div className="w-24 h-1 bg-primary mt-4 rounded-full"></div>
            <p className="mt-6 text-foreground/80 dark:text-gray-300 text-lg leading-relaxed">{t("partner.description")}</p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary dark:bg-primary-dark text-secondary font-bold py-3 px-8 rounded-md shadow-lg hover:bg-primary-dark dark:hover:bg-primary transition-colors"
              >
                <IconArrow className="w-5 h-5 shrink-0" />
                <span>{t("partner.actions.start_partnership")}</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[320px]">
            <div className="absolute inset-0">
              <Image
                alt={t("partner.image_alt")}
                src="/icons/4.png"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
