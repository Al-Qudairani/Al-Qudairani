export type Messages = Record<string, unknown>;

export function resolvePath(obj: unknown, path: string): unknown {
  if (!obj || !path) return undefined;
  const parts = path.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur;
}

export function interpolate(str: string, values?: Record<string, unknown>): string {
  if (!values || typeof str !== 'string') return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => {
    const v = values[k];
    return v === undefined || v === null ? `{${k}}` : String(v);
  });
}

