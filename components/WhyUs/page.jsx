 'use client';
import { useI18n } from "@/i18n/I18nProvider";

function Icon({ name }) {
  switch (name) {
    case "verified_user":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10" aria-hidden="true">
          <path d="M12 1l8 4v6c0 5-3.5 9.74-8 11-4.5-1.26-8-6-8-11V5l8-4zm-1 16l6-6-1.41-1.42L11 13.17 8.41 10.59 7 12l4 5z" />
        </svg>
      );
    case "local_shipping":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10" aria-hidden="true">
          <path d="M20 8h-3V4H3v12h2a3 3 0 1 0 6 0h4a3 3 0 1 0 6 0h2v-6l-3-2zm-5 2h3.5l1.5 1v3H15v-4zM6 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      );
    case "support_agent":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10" aria-hidden="true">
          <path d="M12 2a7 7 0 0 1 7 7v4a3 3 0 0 1-3 3h-1v2H9v-2H8a3 3 0 0 1-3-3V9a7 7 0 0 1 7-7zm-5 9v2a1 1 0 0 0 1 1h1V9a5 5 0 0 1 10 0v5h1a1 1 0 0 0 1-1v-2h-1a7 7 0 0 0-14 0H7z" />
        </svg>
      );
    default:
      return null;
  }
}
export default function WhyUs() {
  const { t, messages } = useI18n();
  const features = messages?.whyUs?.features || [];

  return (
    <section id="whyus" className="relative py-24 bg-secondary text-white overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-12%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">{t("whyUs.section_label")}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">{t("whyUs.heading")}</h2>
          <div className="mx-auto w-24 h-1 bg-primary mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">{t("whyUs.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg ring-1 ring-white/10 hover:ring-white/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto bg-primary text-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 ring-8 ring-white/10 group-hover:ring-white/20 transition-all duration-300 mb-6">
                  <Icon name={item.icon} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
              <span className="absolute -left-10 top-0 h-full w-10 bg-white/10 skew-x-[-20deg] opacity-0 group-hover:opacity-100 group-hover:translate-x-[160%] transition-all duration-500"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
