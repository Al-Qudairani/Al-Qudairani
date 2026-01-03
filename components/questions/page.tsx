'use client';
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export default function Questions() {
  const { t, messages } = useI18n();
  type FAQItem = { q: string; a: string };
  const qData =
    (messages && typeof messages === "object"
      ? (messages as Record<string, unknown>)["questions"]
      : undefined) as Record<string, unknown> | undefined;
  const rawItems = qData?.["items"];
  const items: FAQItem[] = Array.isArray(rawItems) ? (rawItems as FAQItem[]) : [];
  const hasDescription = typeof qData?.["description"] === "string";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="questions" className="py-20 bg-background transition-colors duration-300 dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">
            {t("questions.section_label")}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-secondary dark:text-white">
            {t("questions.heading")}
          </h2>
          <div className="mx-auto w-24 h-1 bg-primary dark:bg-primary-dark mt-4 rounded-full"></div>
          {hasDescription && (
            <p className="mt-6 text-foreground/70 dark:text-gray-300 max-w-2xl mx-auto">
              {t("questions.description")}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <li
                  key={idx}
                  className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border-b-4 border-primary/60 dark:border-primary-dark/60"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-4 text-start"
                  >
                    <span className="font-bold text-secondary dark:text-white">{item.q}</span>
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-secondary transition-transform ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`px-4 pb-4 text-foreground/80 dark:text-gray-300 transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}`}
                  >
                    {item.a}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
