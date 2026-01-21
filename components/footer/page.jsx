'use client';
import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';

function Icon({ name, className }) {
  switch (name) {
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.94 14.5L2 22l5.6-1.49A10 10 0 1 0 12 2zm5.6 14.19c-.24.67-1.4 1.28-1.96 1.31-.52.03-1.17.05-2-.13a8.87 8.87 0 0 1-3.95-2.04 8.79 8.79 0 0 1-2.67-3.39c-.65-1.3-.7-2.39-.62-3.2.08-.81.55-1.2.93-1.36.24-.11.52-.12.84.01.26.11.43.3.58.64.2.45.74 1.82.81 1.95.07.13.12.28.02.45-.1.16-.15.26-.29.41-.14.15-.3.33-.43.45-.14.12-.3.25-.13.56.17.3.74 1.22 1.58 1.98 1.09.96 2.02 1.26 2.32 1.4.3.14.48.12.65-.07.17-.19.75-.87.95-1.18.2-.31.41-.26.67-.16.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.69-.17 1.36z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.5 9.95V15.5H8v-3h2.5V10a3.5 3.5 0 0 1 3.75-3.85c1.09 0 1.78.08 2.08.12v2.4h-1.7c-1.33 0-1.58.63-1.58 1.55v2.28H16.3l-.4 3H12.1v6.45A10 10 0 0 0 22 12z" />
        </svg>
      );
    case 'location':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    default:
      return null;
  }
}
export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-secondary text-white py-20 border-t-4 border-primary" id="contact" style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center justify-center">
            <Image alt="Al-Qudairani Logo" src="/icons/13.png" width={200} height={200} className="h-40 w-40 object-contain" />
          </div>
          <div>
            <h2 className="text-5xl font-extrabold tracking-wide">{t('footer.brand_name')}</h2>
          </div>
          <p className="text-gray-300 max-w-4xl">{t('footer.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 place-items-center">
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-6">{t('footer.contact.heading')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center gap-3">
                <Icon name="location" className="text-primary w-5 h-5" />
                <span className="text-gray-300">{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Icon name="whatsapp" className="text-primary w-5 h-5" />
                <a
                  href="https://wa.me/963989889025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300"
                  dir="ltr"
                >
                  +963 989 889 025
                </a>
              </li>

              <li className="flex items-center justify-center gap-3">
                <Icon name="email" className="text-primary w-5 h-5" />
                <span className="text-gray-300">alqudairanicompany1984@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-6">{t('footer.social.heading')}</h3>
            <div className="flex items-center justify-center gap-4">
              <a
                aria-label={t('footer.social.labels.whatsapp')}
                href="https://wa.me/963989889025"
                target="_blank"
                rel="noopener noreferrer"
                className="w-18 h-18 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all shadow-md"
              >
                <Icon name="whatsapp" className="w-8 h-8" />
              </a>
              <a
                aria-label={t('footer.social.labels.instagram')}
                href="https://www.instagram.com/alqudairani.company?igsh=anloZXV4ejBldTg1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-18 h-18 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all shadow-md"
              >
                <Icon name="instagram" className="w-8 h-8" />
              </a>
              <a
                aria-label={t('footer.social.labels.facebook')}
                href="https://www.facebook.com/share/1Xvs1a2ccJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-18 h-18 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all shadow-md"
              >
                <Icon name="facebook" className="w-8 h-8" />
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm mt-12">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
