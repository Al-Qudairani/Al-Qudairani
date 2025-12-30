'use client';
import React, { createContext, useContext, useMemo, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import type { Locale, Messages } from '@/i18n/server';
import { resolvePath, interpolate } from '@/i18n/shared';

type I18nContextType = {
  locale: Locale;
  dir: 'rtl' | 'ltr';
  messages: Messages;
  t: (key: string, values?: Record<string, unknown>) => string;
  setLocale: (next: Locale) => Promise<void>;
  isPending: boolean;
};

const defaultCtx: I18nContextType = {
  locale: 'ar',
  dir: 'rtl',
  messages: {},
  t: (key: string) => key,
  setLocale: async () => {},
  isPending: false,
};

export const I18nContext = createContext<I18nContextType>(defaultCtx);

export function I18nProvider({
  locale,
  dir,
  messages,
  children,
}: {
  locale: Locale;
  dir: 'rtl' | 'ltr';
  messages: Messages;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const t = useMemo(() => {
    return (key: string, values?: Record<string, unknown>) => {
      const raw = resolvePath(messages, key);
      if (raw == null) return key;
      if (typeof raw === 'string') return interpolate(raw, values);
      return Array.isArray(raw) ? JSON.stringify(raw) : String(raw);
    };
  }, [messages]);

  const setLocale = async (next: Locale) => {
    try {
      await fetch('/api/i18n/set-locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale: next }),
      });
      startTransition(() => {
        router.refresh();
      });
      if (typeof document !== 'undefined') {
        document.documentElement.lang = next;
        document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
      }
    } catch {
      // no-op
    }
  };

  return (
    <I18nContext.Provider value={{ locale, dir, messages, t, setLocale, isPending }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
