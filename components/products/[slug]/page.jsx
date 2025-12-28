'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import Footer from '../../footer/page';
import data from '../data.json';
import Link from 'next/link';

export default function ProductPage(props) {
  const dynamicParams = useParams();
  const propSlug = props?.params?.slug || props?.slug;
  const slug = typeof propSlug === 'string' ? propSlug : (dynamicParams?.slug || '');
  const product = slug && data[slug] ? data[slug] : null;
  if (!product) {
    return (
      <main className="min-h-screen bg-background dark:bg-background-dark">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary">المنتج غير موجود</h1>
          <p className="mt-4 text-foreground/70">تحقق من الرابط أو عُد إلى الصفحة الرئيسية.</p>
          <Link href="/" className="inline-block mt-6 bg-primary text-secondary font-bold px-6 py-3 rounded-md shadow hover:bg-primary-dark transition-colors">العودة للرئيسية</Link>
        </section>
        <Footer />
      </main>
    );
  }

  const sanitize = (s) => (typeof s === 'string' ? s.replace(/[\u0600-\u06FF]/g, '') : s);
  const cleanProduct = {
    ...product,
    hero: { ...product.hero, image: sanitize(product.hero?.image) },
    sections: Array.isArray(product.sections)
      ? product.sections.map((sec) => ({ ...sec, image: sanitize(sec.image) }))
      : [],
  };
  const descriptions = {
    broiler: 'توفير أجود أنواع الدجاج اللاحم المربى في مزارع صحية وبأعلى المعايير.',
    layers: 'سلالات مميزة من الدجاج البياض ذات إنتاجية عالية ومناعة قوية.',
    feeds: 'تركيبات علفية متوازنة تضمن النمو السليم والإنتاجية العالية للطيور.',
    'table-eggs': 'بيض طازج يومياً، يتم فحصه وتغليفه بأحدث الطرق الآلية.',
    'hatching-eggs': 'بيض مخصب عالي الجودة بنسب تفقيس ممتازة للمزارع والمفاقس.',
    'broiler-farming': 'خدمات استشارية وإشرافية لمشاريع تربية الفروج لضمان الربحية.',
    medicines: 'مجموعة كاملة من التحصينات والأدوية البيطرية المعتمدة.',
    supplies: 'كل ما تحتاجه مزارع الدواجن من معدات وأدوات وتجهيزات.',
  };
  const shortDesc =
    descriptions[slug] ||
    (Array.isArray(product.sections) && product.sections[0]?.desc ? String(product.sections[0].desc) : '');
  const primaryPhone = Array.isArray(product.phones) ? String(product.phones[0] || '') : '';
  const telHref = `tel:${primaryPhone.replace(/[^+\d]/g, '')}`;
  const waHref = `https://wa.me/${primaryPhone.replace(/[^\d]/g, '')}`;

  return (
    <main className="bg-background transition-colors duration-300 dark:bg-background-dark">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            alt={cleanProduct.hero.alt || cleanProduct.name}
            src={cleanProduct.hero.image}
            fill
            priority
            sizes="100vw"
            className="object-cover blur-[8px] opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">قسم المنتج</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {cleanProduct.name}
          </h1>
          <div className="mx-auto w-24 h-1 bg-primary mt-4 rounded-full"></div>
          {shortDesc && (
            <p className="mt-4 max-w-2xl mx-auto text-white/90 text-base md:text-lg leading-7">
              {shortDesc}
            </p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">الأقسام التابعة لهذا المنتج</h2>
            <p className="mt-3 text-foreground/70">عرض موجز للأقسام والمزايا الرئيسية</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cleanProduct.sections?.map((sec, idx) => (
              <div
                key={idx}
                className="group bg-card-light dark:bg-card-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-b-4 border-primary dark:border-primary-dark"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    alt={sec.title}
                    src={sec.image}
                    fill
                    sizes="100vw"
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

      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">التواصل الخاص بالمنتج</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight">تواصل معنا مباشرة</h2>
            <p className="mt-2 text-foreground/70">رقم واحد بشكلين: اتصال مباشر وواتس آب</p>
          </div>
          {primaryPhone && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-secondary font-bold shadow-lg hover:bg-primary-dark transition-colors"
                dir="ltr"
                aria-label="اتصال مباشر"
              >
                <AddIcCallSharpIcon fontSize="small" className="shrink-0" />
                <span>{primaryPhone}</span>
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon fontSize="small" />
                <span>واتس آب</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
