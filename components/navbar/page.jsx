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
  const isRTL = locale === 'ar';

  const iconClass =
    'cursor-pointer text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px]';

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
        
        {/* Logo */}
        <Link href="/" aria-label={t('navbar.aria.go_home')} className="flex items-center gap-1">
          <Image
            alt={t('navbar.alt.logo')}
            className="h-16 sm:h-20 w-auto object-contain"
            src="/icons/13.png"
            width={100}
            height={100}
            priority
          />
          <div>
            <h1 className="text-[15px] md:text-xl lg:text-2xl font-bold text-primary-dark">
              {t('navbar.brand_name')}
            </h1>
            {locale === 'ar' && (
              <p className="text-[8px] sm:text-xs md:text-sm text-foreground">
                {t('navbar.brand_tagline')}
              </p>
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 font-semibold text-foreground">
          <Link className="px-3 py-2 rounded-md bg-primary text-secondary" href="/">
            {t('navbar.nav.home')}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary" href="/#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>
            {t('navbar.nav.about')}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary" href="/#products" onClick={(e) => { e.preventDefault(); handleNav('products'); }}>
            {t('navbar.nav.products')}
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary" href="/#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>
            {t('navbar.nav.contact')}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5">

          {/* Mobile Menu */}
          <button
            className="p-3 md:hidden rounded-md bg-card-light hover:bg-card-dark/10"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <DisabledByDefaultSharpIcon className={iconClass} />
            ) : (
              <MenuSharpIcon className={iconClass} />
            )}
          </button>

          {/* Dark Mode */}
          <button
            className="p-3 rounded-full hover:bg-card-light dark:hover:bg-card-dark"
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              setIsDark(!isDark);
            }}
          >
            <NightsStaySharpIcon
              className={`${iconClass} ${isDark ? 'text-primary-dark' : 'text-background-dark'}`}
            />
          </button>

          {/* Language */}
          <button
            className="p-3 rounded-full hover:bg-card-light dark:hover:bg-card-dark"
            onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
          >
            <GTranslateIcon className={`${iconClass} text-primary-dark`} />
          </button>

          {/* Call Button */}
          <a
            href="https://wa.me/963989889025"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 bg-primary hover:bg-primary-dark text-secondary font-bold py-4 px-8 rounded-md shadow-lg transition-all hover:scale-105"
          >
            <AddIcCallSharpIcon className="text-[28px] md:text-[32px] lg:text-[36px]" />
            {t('navbar.actions.general_contact')}
          </a>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden bg-background border-t`}>
        <div className={`container mx-auto px-4 py-2 flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
          <div className="flex flex-col gap-3 font-semibold w-64">
            <Link className="px-4 py-2 rounded-md bg-primary text-secondary" href="/" onClick={() => setOpen(false)}>
              {t('navbar.nav.home')}
            </Link>
            <Link className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary" href="/#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>
              {t('navbar.nav.about')}
            </Link>
            <Link className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary" href="/#products" onClick={(e) => { e.preventDefault(); handleNav('products'); }}>
              {t('navbar.nav.products')}
            </Link>
            <Link className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary" href="/#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>
              {t('navbar.nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
