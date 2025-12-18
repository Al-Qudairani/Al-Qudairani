'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-card-light/90 backdrop-blur-md shadow-md border-b-4 border-primary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            alt="Al-Qudairani Company Logo"
            className="h-20 w-auto object-contain"
            src="/icons/13.png"
            width={100}
            height={100}
          />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-primary-dark">شركة القديراني</h1>
            <p className="text-xs text-secondary/70">AL-QUDAIRANI COMPANY</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-1 font-semibold text-secondary">
          <a
            className="px-3 py-2 rounded-md bg-primary text-secondary transition-colors"
            href="#"
            aria-current="page"
          >
            الرئيسية
          </a>
          <a className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="#about">
            من نحن
          </a>
          <a className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="#products">
            منتجاتنا
          </a>
          <a className="px-3 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors" href="#contact">
            اتصل بنا
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="p-2 md:hidden rounded-md bg-card-light hover:bg-card-dark/10 text-foreground transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <FontAwesomeIcon icon={faList} className="h-5 w-5" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-card-light dark:hover:bg-card-dark transition-colors"
            aria-label="Toggle dark mode"
            onClick={() => document.documentElement.classList.toggle('dark')}
          >
            <span className="material-icons text-secondary">brightness_6</span>
          </button>
          <button className="hidden md:inline-flex items-center justify-center gap-2 bg-primary cursor-pointer hover:bg-primary-dark text-secondary font-bold py-4 px-8 rounded-md shadow-lg transition-all transform hover:scale-105 leading-none"
          >
            <FontAwesomeIcon icon={faPhone} className="h-5 w-5 shrink-0" />
            <span>تواصل معنا</span>
          </button>
        </div>
      </div>
      <div className={`${open ? 'block' : 'hidden'} md:hidden bg-background border-t border-card-dark/20`} role="dialog" aria-modal="true">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col gap-3 font-semibold text-foreground">
            <a
              className="px-4 py-2 rounded-md bg-primary text-secondary transition-colors"
              href="#"
              onClick={() => setOpen(false)}
            >
              الرئيسية
            </a>
            <a
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="#about"
              onClick={() => setOpen(false)}
            >
              من نحن
            </a>
            <a
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="#products"
              onClick={() => setOpen(false)}
            >
              منتجاتنا
            </a>
            <a
              className="px-4 py-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              اتصل بنا
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
