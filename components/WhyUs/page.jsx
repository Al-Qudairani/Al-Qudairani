import { useI18n } from "@/i18n/I18nProvider";
export default function WhyUs() {
  const { t, messages } = useI18n();
  const features = messages?.whyUs?.features || [];

  return (
    <section id="whyus" className="relative py-24 bg-secondary text-white overflow-hidden">
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
                  <span className="material-icons text-4xl">{item.icon}</span>
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
