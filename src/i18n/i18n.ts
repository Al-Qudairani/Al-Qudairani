// وحدة توافق لإعادة تصدير وظائف وأنواع i18n من الملفات الموحّدة
export type { Locale } from './server';
export type { Messages } from './shared';
export { getLocaleFromCookie, getDirection, loadMessages } from './server';
export { resolvePath, interpolate } from './shared';
