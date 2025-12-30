import { cookies } from 'next/headers';

export type Locale = 'ar' | 'en';
export const locales: Locale[] = ['ar', 'en'];
export const defaultLocale: Locale = 'ar';
export type Messages = Record<string, unknown>;

// تقرأ قيمة اللغة من الكوكيز على الخادم بشكل آمن ومتوافق مع Next.js 16
export async function getLocaleFromCookie(): Promise<Locale> {
  const c = await cookies();
  const raw = c.get('locale')?.value;
  const lc = (raw || '').toLowerCase();
  return (locales as readonly string[]).includes(lc) ? (lc as Locale) : defaultLocale;
}

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export async function loadMessages(locale: Locale): Promise<Messages> {
  const base = (await import(`../../messages/${locale}.json`)).default;
  const product = (await import(`../../messages/${locale}-product.json`)).default;
  return {
    ...base,
    productData: product.products,
    productDescriptions: product.descriptions,
  };
}
