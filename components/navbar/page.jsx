'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import DisabledByDefaultSharpIcon from '@mui/icons-material/DisabledByDefaultSharp';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { usePathname, useRouter } from 'next/navigation';
import { useI18n } from '@/i18n/I18nProvider';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { t, locale, setLocale } = useI18n();
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
            <Image
              alt={t('navbar.alt.logo')}
              className="h-20 w-auto object-contain"
              src="/icons/13.png"
              width={100}
              height={100}
            />
            <div className="">
              <h1 className="text-xl font-bold text-primary-dark">{t('navbar.brand_name')}</h1>
              <p className="text-xs text-foreground">{t('navbar.brand_tagline')}</p>
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
        <div className="flex items-center gap-4">
          <button
            className="p-2 md:hidden rounded-md bg-card-light hover:bg-card-dark/10 text-secondary dark:text-white transition-colors"
            aria-label={t('navbar.aria.toggle_menu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <DisabledByDefaultSharpIcon fontSize="small" /> : <MenuSharpIcon fontSize="small" />}
          </button>
          <button
            className="p-2 rounded-full hover:bg-card-light dark:hover:bg-card-dark transition-colors"
            aria-label={t('navbar.aria.toggle_dark_mode')}
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              setIsDark((v) => !v);
            }}
          >
            <NightsStaySharpIcon fontSize="large" className={isDark ? 'text-primary-dark cursor-pointer' : 'text-background-dark cursor-pointer'} />
          </button>
          <button
            className="p-2 rounded-full hover:bg-card-light dark:hover:bg-card-dark transition-colors"
            aria-label="تبديل اللغة"
            title="تبديل اللغة"
            onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
          >
            <GTranslateIcon fontSize="large" className="text-primary-dark cursor-pointer" />
          </button>
          <button className="hidden md:inline-flex items-center justify-center gap-2 bg-primary cursor-pointer hover:bg-primary-dark text-secondary font-bold py-4 px-8 rounded-md shadow-lg transition-all transform hover:scale-105 leading-none">
            <AddIcCallSharpIcon fontSize="small" className="shrink-0" />
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
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col gap-3 font-semibold text-foreground">
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
