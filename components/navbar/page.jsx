'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import DisabledByDefaultSharpIcon from '@mui/icons-material/DisabledByDefaultSharp';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
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
          <Image
            alt="Al-Qudairani Company Logo"
            className="h-20 w-auto object-contain"
            src="/icons/13.png"
            width={100}
            height={100}
          />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-primary-dark">شركة القديراني</h1>
            <p className="text-xs text-foreground">AL-QUDAIRANI COMPANY</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-1 font-semibold text-foreground">
          <Link
            className="px-3 py-2 rounded-md bg-primary text-secondary transition-colors"
            href="/"
            aria-current="page"
          >
            الرئيسية
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="/#about" onClick={(e)=>{e.preventDefault();handleNav('about');}}>
            من نحن
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="/#products" onClick={(e)=>{e.preventDefault();handleNav('products');}}>
            منتجاتنا
          </Link>
          <Link className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="/#contact" onClick={(e)=>{e.preventDefault();handleNav('contact');}}>
            اتصل بنا
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="p-2 md:hidden rounded-md bg-card-light hover:bg-card-dark/10 text-secondary transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <DisabledByDefaultSharpIcon fontSize="small" /> : <MenuSharpIcon fontSize="small" />}
          </button>
          <button
            className="p-2 rounded-full hover:bg-card-light dark:hover:bg-card-dark transition-colors"
            aria-label="Toggle dark mode"
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              setIsDark((v) => !v);
            }}
          >
            <NightsStaySharpIcon fontSize="large" className={isDark ? 'text-primary-dark cursor-pointer' : 'text-background-dark cursor-pointer'} />
          </button>
          <button className="hidden md:inline-flex items-center justify-center gap-2 bg-primary cursor-pointer hover:bg-primary-dark text-secondary font-bold py-4 px-8 rounded-md shadow-lg transition-all transform hover:scale-105 leading-none">
            <AddIcCallSharpIcon fontSize="small" className="shrink-0" />
            <span>تواصل معنا</span>
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
              الرئيسية
            </Link>
            <Link
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="/#about"
              onClick={(e) => { e.preventDefault(); handleNav('about'); }}
            >
              من نحن
            </Link>
            <Link
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="/#products"
              onClick={(e) => { e.preventDefault(); handleNav('products'); }}
            >
              منتجاتنا
            </Link>
            <Link
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="/#contact"
              onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
