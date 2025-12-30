'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useI18n } from '@/i18n/I18nProvider';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { t, locale, setLocale } = useI18n();
  const isRTL = locale === 'ar';
  const handleNav = (section) => {
    try {
      if (pathname === '/') {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        router.push(`/#${section}`);
      }
      setOpen(false);
    } catch (err) {
      console.error('nav_error', err);
    }
  };
  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md shadow-md border-b-4 border-primary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Link href="/" aria-label={t('navbar.aria.go_home')} className="flex items-center gap-1">
            {/* شعار الشركة: يظهر وحده على الهاتف، مع نص العلامة على الشاشات الأكبر */}
            <Image
              alt={t('navbar.alt.logo')}
              className="h-16 sm:h-20 w-auto object-contain"
              src="/icons/13.png"
              width={100}
              height={100}
              priority
            />
            <div className="">
              <h1 className="text-[15px] md:text-xl lg:text-2xl font-bold text-primary-dark leading-tight md:leading-normal">
                {t('navbar.brand_name')}
              </h1>
              {locale === 'ar' && (
                <p className="text-[8px] sm:text-xs md:text-sm text-foreground">
                  {t('navbar.brand_tagline')}
                </p>
              )}
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-1 font-semibold text-foreground">
          <Link
            className="px-3 py-2 rounded-md bg-primary text-secondary transition-colors"
            href="/"
            aria-current="page"
          >
            {t('navbar.nav.home')}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="/#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>
            {t('navbar.nav.about')}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="/#products" onClick={(e) => { e.preventDefault(); handleNav('products'); }}>
            {t('navbar.nav.products')}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="/#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>
            {t('navbar.nav.contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <button
            className="p-3 md:hidden rounded-md bg-card-light hover:bg-card-dark/10 text-secondary dark:text-white transition-colors"
            aria-label={t('navbar.aria.toggle_menu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="text-sm font-bold">{locale === 'ar' ? 'إغلاق' : 'Close'}</span>
            ) : (
              <span className="text-sm font-bold">{locale === 'ar' ? 'القائمة' : 'Menu'}</span>
            )}
          </button>
          <button
            className="p-3 rounded-full hover:bg-card-light dark:hover:bg-card-dark transition-colors"
            aria-label={t('navbar.aria.toggle_dark_mode')}
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              setIsDark((v) => !v);
            }}
          >
            <span
              className={
                isDark
                  ? 'text-primary-dark font-semibold text-sm md:text-base'
                  : 'text-background-dark font-semibold text-sm md:text-base'
              }
            >
              {locale === 'ar' ? (isDark ? 'فاتح' : 'داكن') : (isDark ? 'Light' : 'Dark')}
            </span>
          </button>
          <button
            className="p-3 rounded-full hover:bg-card-light dark:hover:bg-card-dark transition-colors"
            aria-label="تبديل اللغة"
            title="تبديل اللغة"
            onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
          >
            <span className="text-primary-dark font-bold text-sm md:text-base">
              {locale === 'ar' ? 'EN' : 'AR'}
            </span>
          </button>
          <button className="hidden md:inline-flex items-center justify-center bg-primary cursor-pointer hover:bg-primary-dark text-secondary font-bold py-4 px-8 rounded-md shadow-lg transition-all transform hover:scale-105 leading-none">
            <span>
              <a
                aria-label={t('navbar.aria.whatsapp_general')}
                href="https://wa.me/963989889025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t('navbar.actions.general_contact')}</span>
              </a>
            </span>
          </button>

        </div>
      </div>
      <div className={`${open ? 'block' : 'hidden'} md:hidden bg-background border-t border-card-dark/20`} role="dialog" aria-modal="true">
        <div className={`container mx-auto px-4 py-2 flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
          <div className="flex flex-col gap-3 font-semibold text-foreground w-64">
            <Link
              className="px-4 py-2 rounded-md bg-primary text-secondary transition-colors"
              href="/"
              onClick={() => setOpen(false)}
            >
              {t('navbar.nav.home')}
            </Link>
            <Link
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="/#about"
              onClick={(e) => { e.preventDefault(); handleNav('about'); }}
            >
              {t('navbar.nav.about')}
            </Link>
            <Link
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="/#products"
              onClick={(e) => { e.preventDefault(); handleNav('products'); }}
            >
              {t('navbar.nav.products')}
            </Link>
            <Link
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="/#contact"
              onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
            >
              {t('navbar.nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
