'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const WhatsAppIcon = dynamic(() => import('@mui/icons-material/WhatsApp'), { ssr: false });
const InstagramIcon = dynamic(() => import('@mui/icons-material/Instagram'), { ssr: false });
const FacebookIcon = dynamic(() => import('@mui/icons-material/Facebook'), { ssr: false });
const LocationOnSharpIcon = dynamic(() => import('@mui/icons-material/LocationOnSharp'), { ssr: false });
const EmailSharpIcon = dynamic(() => import('@mui/icons-material/EmailSharp'), { ssr: false });
import { useI18n } from '@/i18n/I18nProvider';
export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-secondary text-white py-20 border-t-4 border-primary" id="contact">
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
                <LocationOnSharpIcon className="text-primary" fontSize="small" />
                <span className="text-gray-300">{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <WhatsAppIcon className="text-primary" fontSize="small" />
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
                <EmailSharpIcon className="text-primary" fontSize="small" />
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
                <WhatsAppIcon fontSize="large" />
              </a>
              <a
                aria-label={t('footer.social.labels.instagram')}
                href="https://www.instagram.com/alqudairani.company?igsh=anloZXV4ejBldTg1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-18 h-18 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all shadow-md"
              >
                <InstagramIcon fontSize="large" />
              </a>
              <a
                aria-label={t('footer.social.labels.facebook')}
                href="https://www.facebook.com/share/1Xvs1a2ccJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-18 h-18 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all shadow-md"
              >
                <FacebookIcon fontSize="large" />
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
