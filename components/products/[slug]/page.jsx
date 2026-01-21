'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
const WhatsAppIcon = dynamic(() => import('@mui/icons-material/WhatsApp'), { ssr: false });
const AddIcCallSharpIcon = dynamic(() => import('@mui/icons-material/AddIcCallSharp'), { ssr: false });
import Footer from '../../footer/page';
import data from '../data.json';
import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';

const BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';

export default function ProductPage(props) {
  const { t, messages } = useI18n();
  const dynamicParams = useParams();
  const propSlug = props?.params?.slug || props?.slug;
  const slug = typeof propSlug === 'string' ? propSlug : (dynamicParams?.slug || '');
  const product = slug && data[slug] ? data[slug] : null;
  if (!product) {
    return (
      <main className="min-h-screen bg-background dark:bg-background-dark">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">{t('productDetail.notFound.title')}</h1>
          <p className="mt-4 text-foreground/70">{t('productDetail.notFound.description')}</p>
          <Link href="/" className="inline-block mt-6 bg-primary text-secondary font-bold px-6 py-3 rounded-md shadow hover:bg-primary-dark transition-colors">{t('productDetail.notFound.back_home')}</Link>
        </section>
        <Footer />
      </main>
    );
  }

  const sanitize = (s) => {
    if (typeof s !== 'string') return s;
    const isRelative = s.startsWith('/') || s.startsWith('./') || s.startsWith('../');
    return isRelative ? s : s.replace(/[\u0600-\u06FF]/g, '');
  };
  const cleanProduct = {
    ...product,
    hero: { ...product.hero, image: sanitize(product.hero?.image) },
    sections: Array.isArray(product.sections)
      ? product.sections.map((sec) => ({ ...sec, image: sanitize(sec.image) }))
      : [],
  };
  const localizedSections =
    Array.isArray(cleanProduct.sections)
      ? cleanProduct.sections.map((sec, idx) => {
          const msgSec = messages?.productData?.[slug]?.sections?.[idx];
          return {
            title: (msgSec?.title) || sec.title,
            desc: (msgSec?.desc) || sec.desc,
            image: sec.image,
          };
        })
      : [];
  const shortDesc =
    (messages?.productDescriptions?.[slug]) ||
    (Array.isArray(product.sections) && product.sections[0]?.desc ? String(product.sections[0].desc) : '');
  const phoneList =
    messages?.productData?.[slug]?.phones && Array.isArray(messages.productData[slug].phones)
      ? messages.productData[slug].phones
      : product.phones;
  const primaryPhone = Array.isArray(phoneList) ? String(phoneList[0] || '') : '';
  const telHref = `tel:${primaryPhone.replace(/[^+\d]/g, '')}`;
  const waHref = `https://wa.me/${primaryPhone.replace(/[^\d]/g, '')}`;

  return (
    <main className="bg-background transition-colors duration-300 dark:bg-background-dark">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            alt={(messages?.productData?.[slug]?.hero?.alt) || cleanProduct.hero.alt || cleanProduct.name}
            src={cleanProduct.hero.image}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            quality={60}
            className="object-cover blur-[8px] opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">{t('productDetail.hero.section_label')}</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {(messages?.productData?.[slug]?.name) || cleanProduct.name}
          </h1>
          <div className="mx-auto w-24 h-1 bg-primary mt-4 rounded-full"></div>
          {shortDesc && (
            <p className="mt-4 max-w-2xl mx-auto text-white/90 text-base md:text-lg leading-7">
              {shortDesc}
            </p>
          )}
        </div>
      </section>

      {Array.isArray(localizedSections) && localizedSections.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('productDetail.sections.heading')}</h2>
              <p className="mt-3 text-foreground/70">{t('productDetail.sections.description')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {localizedSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="group bg-card-light dark:bg-card-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-b-4 border-primary dark:border-primary-dark"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      alt={sec.title}
                      src={sec.image}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      quality={60}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-secondary dark:text-primary-dark">{sec.title}</h3>
                    <p className="text-foreground/70 text-sm">{sec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">{t('productDetail.contact.section_label')}</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight">{t('productDetail.contact.heading')}</h2>
            <p className="mt-2 text-foreground/70">{t('productDetail.contact.description')}</p>
          </div>
          {primaryPhone && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-secondary font-bold shadow-lg hover:bg-primary-dark transition-colors"
                dir="ltr"
                aria-label={t('productDetail.contact.direct_call')}
              >
                <AddIcCallSharpIcon fontSize="small" className="shrink-0" />
                <span>{primaryPhone}</span>
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg transition-colors"
                aria-label={t('productDetail.contact.whatsapp')}
              >
                <WhatsAppIcon fontSize="small" />
                <span>{t('productDetail.contact.whatsapp')}</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
