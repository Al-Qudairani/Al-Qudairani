'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const MenuSharpIcon = dynamic(() => import('@mui/icons-material/MenuSharp'), { ssr: false });
const AddIcCallSharpIcon = dynamic(() => import('@mui/icons-material/AddIcCallSharp'), { ssr: false });
const NightsStaySharpIcon = dynamic(() => import('@mui/icons-material/NightsStaySharp'), { ssr: false });
const DisabledByDefaultSharpIcon = dynamic(() => import('@mui/icons-material/DisabledByDefaultSharp'), { ssr: false });
const GTranslateIcon = dynamic(() => import('@mui/icons-material/GTranslate'), { ssr: false });
import { usePathname, useRouter } from 'next/navigation';
import { useI18n } from '@/i18n/I18nProvider';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { t, locale, setLocale, isPending } = useI18n();
  const isRTL = locale === 'ar';

  // 🔹 أحجام الأيقونات
  const iconClass =
    'cursor-pointer text-[20px] sm:text-[22px] md:text-[30px] lg:text-[34px]';

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
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-md border-b-4 border-primary">
      {isPending && (
        <div className="fixed inset-0 z-[70] bg-black/50 flex items-center justify-center">
          <div
            className="w-10 h-10 rounded-full border-4 border-white/30 border-t-white animate-spin"
            role="status"
            aria-live="polite"
            aria-label="جاري تغيير اللغة"
          ></div>
        </div>
      )}

      {/* ===== Top Bar ===== */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-3 flex items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-1">
          <Image
            alt={t('navbar.alt.logo')}
            src="/icons/13.png"
            width={100}
            height={100}
            className="h-16 sm:h-16 md:h-20 w-auto"
          />
          <div>
            <h1 className="text-[14px] md:text-xl lg:text-2xl font-bold text-primary-dark">
              {t('navbar.brand_name')}
            </h1>
            {locale === 'ar' && (
              <p className="text-[8px] sm:text-xs text-foreground">
                {t('navbar.brand_tagline')}
              </p>
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 font-semibold">
          <Link className="px-3 py-2 rounded-md bg-primary text-secondary" href="/">
            {t('navbar.nav.home')}
          </Link>
          <Link
            className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary"
            href="/#about"
            onClick={(e) => { e.preventDefault(); handleNav('about'); }}
          >
            {t('navbar.nav.about')}
          </Link>
          <Link
            className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary"
            href="/#products"
            onClick={(e) => { e.preventDefault(); handleNav('products'); }}
          >
            {t('navbar.nav.products')}
          </Link>
          <Link
            className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary"
            href="/#questions"
            onClick={(e) => { e.preventDefault(); handleNav('questions'); }}
          >
            {t('navbar.nav.faq')}
          </Link>
          <Link
            className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary"
            href="/#contact"
            onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
          >
            {t('navbar.nav.contact')}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">

          {/* Menu Icon (mobile only) */}
          <button
            className={`p-2 md:hidden rounded-md hover:bg-card-light
              ${isRTL ? 'order-first' : 'order-last'}`}
            onClick={() => setOpen(!open)}
          >
            {open
              ? <DisabledByDefaultSharpIcon className={iconClass} />
              : <MenuSharpIcon className={iconClass} />
            }
          </button>

          {/* Dark Mode */}
          <button
            className="p-2 rounded-full hover:bg-card-light"
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              setIsDark(!isDark);
            }}
          >
            <NightsStaySharpIcon
              className={`${iconClass} ${isDark ? 'text-white' : 'text-black'}`}
            />
          </button>

          {/* Language */}
          <button
            className="p-2 rounded-full hover:bg-card-light"
            onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
            aria-busy={isPending}
            disabled={isPending}
          >
            <GTranslateIcon className={`${iconClass} text-primary-dark`} />
          </button>

          {/* Call Button */}
          <a
            href="https://wa.me/963989889025"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 bg-primary hover:bg-primary-dark text-secondary font-bold py-4 px-8 rounded-md shadow-lg"
          >
            <AddIcCallSharpIcon className="text-[26px] lg:text-[32px]" />
            {t('navbar.actions.general_contact')}
          </a>

        </div>
      </div>

      {/* ===== Mobile Menu (FULL WIDTH) ===== */}
      <div
        className={`
          ${open ? 'block' : 'hidden'}
    md:hidden
    fixed
    top-[80px]
    left-0
    w-full
    h-[calc(100vh-80px)]
    bg-background/95
    backdrop-blur-md
    z-40
        `}
      >
        <div className="flex flex-col gap-4 px-4 py-6 w-full font-semibold">

          <Link
            className="w-full text-center px-4 py-3 bg-primary text-secondary rounded-md"
            href="/"
            onClick={() => setOpen(false)}
          >
            {t('navbar.nav.home')}
          </Link>

          <Link
            className="w-full text-center px-4 py-3 hover:bg-primary hover:text-secondary rounded-md"
            href="/#about"
            onClick={(e) => { e.preventDefault(); handleNav('about'); }}
          >
            {t('navbar.nav.about')}
          </Link>

          <Link
            className="w-full text-center px-4 py-3 hover:bg-primary hover:text-secondary rounded-md"
            href="/#products"
            onClick={(e) => { e.preventDefault(); handleNav('products'); }}
          >
            {t('navbar.nav.products')}
          </Link>
          <Link
            className="w-full text-center px-4 py-3 hover:bg-primary hover:text-secondary rounded-md"
            href="/#questions"
            onClick={(e) => { e.preventDefault(); handleNav('questions'); }}
          >
            {t('navbar.nav.faq')}
          </Link>

          <Link
            className="w-full text-center px-4 py-3 hover:bg-primary hover:text-secondary rounded-md"
            href="/#contact"
            onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
          >
            {t('navbar.nav.contact')}
          </Link>

        </div>
      </div>

    </header>
  );
}
