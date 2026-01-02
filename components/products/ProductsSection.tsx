'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const slugs = [
  "table-eggs",
  "hatching-eggs",
  "poultry-meat",
  "broiler-chick",
  "feeds",
  "medicines",
  "additives",
  "equipment",
] as const;

const images: Record<string, string> = {
  "table-eggs": "/icons/بيض مائدة.png",
  "hatching-eggs": "/icons/بيض تفقيس.png",
  "poultry-meat": "/icons/لحوم دواجن1.png",
  feeds: "/icons/Pellet.jpg",
  medicines: "/icons/ادوية ولقاحات1.png",
  "broiler-chick": "/icons/صوص لاحم.png",
  equipment: "/icons/معدات.png",
  additives: "/icons/متممات علفية.png",
};

export default function ProductsSection() {
  const router = useRouter();
  const [isNavigatingId, setIsNavigatingId] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const { t } = useI18n();

  const handleViewDetails = (product: { id: number; slug: string }) => {
    try {
      const url = `/products/${product.slug}?id=${product.id}`;
      startTransition(() => {
        setIsNavigatingId(product.id);
        router.prefetch(url);
        router.push(url);
      });
    } catch (err) {
      console.error("navigation_error", err);
    }
  };
  const products = slugs.map((slug, idx) => {
    const title = t(`products.cards.${slug}.title`);
    const description = t(`products.cards.${slug}.description`);
    const alt = title;
    return {
      id: idx + 1,
      slug,
      title,
      description,
      image: images[slug],
      alt,
    };
  });
  return (
    <section className="py-20 bg-background transition-colors duration-300 dark:bg-background-dark" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary dark:text-primary-dark font-bold text-lg mb-2 block">{t("products.section_label")}</span>
          <h2 className="text-4xl font-bold text-foreground">{t("products.heading")}</h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-b-4 border-primary dark:border-primary-dark flex flex-col h-full min-h-[380px]"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="100vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-secondary dark:text-primary-dark">{product.title}</h3>
                <p className="text-foreground/70 dark:text-foreground/70 text-sm mb-4 line-clamp-2 min-h-[3.5rem]">{product.description}</p>
                <Link
                  href={`/products/${product.slug}?id=${product.id}`}
                  onMouseEnter={() => {
                    const url = `/products/${product.slug}?id=${product.id}`;
                    router.prefetch(url);
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleViewDetails(product);
                  }}
                  aria-busy={isPending || isNavigatingId === product.id}
                  role="button"
                  className={`mt-auto w-1/2 relative overflow-hidden inline-flex items-center gap-2 text-sm font-bold bg-primary dark:bg-primary-dark text-card-dark px-4 py-2 rounded-md transition-colors duration-300 transition-transform hover:-translate-y-0.5 hover:scale-[1.02] focus:scale-[1.02] hover:bg-primary-dark dark:hover:bg-primary ${isNavigatingId === product.id ? "opacity-70 cursor-wait" : ""}`}
                >
                  <span>{t("products.actions.view_details")}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 translate-x-0 group-hover:-translate-x-1 hover:-translate-x-1 transition-transform duration-300"
                  >
                    <path d="M12.293 4.293a1 1 0 011.414 1.414L9.414 10l4.293 4.293a1 1 0 01-1.414 1.414L7.586 10l4.707-5.707z" />
                  </svg>
                  <span className="after:content-[''] after:absolute after:inset-y-0 after:-left-10 after:w-10 after:bg-white/20 after:skew-x-[-20deg] after:opacity-0 hover:after:opacity-100 hover:after:translate-x-[140%] after:transition-all after:duration-500"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
