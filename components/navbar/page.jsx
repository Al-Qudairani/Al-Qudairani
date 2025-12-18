'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            alt="Al-Qudairani Company Logo"
            className="h-12 w-auto object-contain hidden"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_rfMCu8lqqthcLi8ZrhwRpumVjYW4vVGvpmT4zR54_NfxIoTEpgPMVgHsUrmNLzfAJLWs-SVJ0aniOJO3WTiGKj8YnAwc9CTfbW-oJchVjOuFCEngIKc19dx-4Z0CGF_sxIxKnYNQTj0elM55b7D5slHUkPRqdfpTTItJbPs13ZZEJeHiJ_KaqnysFiUQwRyZUhi2f09iv5WzCR232edacBmHXB0xSRu0NyWO0HajyfpJwA8Q6uaphFX0-KndmVqaHivOXCuBeeU"
            width={48}
            height={48}
            unoptimized
          />
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-secondary font-bold text-xl border-2 border-primary-dark">
            <span className="material-icons">flutter_dash</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-foreground">شركة القديراني</h1>
            <p className="text-xs text-foreground/70">AL-QUDAIRANI COMPANY</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 font-semibold text-foreground">
          <a className="hover:text-primary transition-colors" href="#">
            الرئيسية
          </a>
          <a className="hover:text-primary transition-colors" href="#about">
            من نحن
          </a>
          <a className="hover:text-primary transition-colors" href="#products">
            منتجاتنا
          </a>
          <a className="hover:text-primary transition-colors" href="#contact">
            اتصل بنا
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-card-light dark:hover:bg-card-dark transition-colors"
            aria-label="Toggle dark mode"
            onClick={() => document.documentElement.classList.toggle('dark')}
          >
            <span className="material-icons text-foreground">brightness_6</span>
          </button>
          <a
            className="hidden sm:inline-flex bg-primary hover:bg-primary-dark text-secondary font-bold py-2 px-6 rounded-md shadow-lg transition-all transform hover:scale-105"
            href="#contact"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </header>
  );
}
