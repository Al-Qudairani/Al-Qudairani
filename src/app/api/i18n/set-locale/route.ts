import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/server';

export async function POST(req: NextRequest) {
  let requested = defaultLocale;
  try {
    const data = await req.json();
    const lc = String(data?.locale || '').toLowerCase();
    requested = (locales as readonly string[]).includes(lc) ? (lc as typeof defaultLocale) : defaultLocale;
  } catch {
    // ignore
  }

  const res = NextResponse.json({ ok: true, locale: requested });
  res.cookies.set('locale', requested, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}
