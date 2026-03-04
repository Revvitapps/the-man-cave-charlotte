type Entry = {
  count: number;
  start: number;
};

const store = new Map<string, Entry>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export function checkRateLimit(ip: string) {
  const now = Date.now();
  const found = store.get(ip);

  if (!found || now - found.start > WINDOW_MS) {
    store.set(ip, { count: 1, start: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (found.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  found.count += 1;
  store.set(ip, found);
  return { allowed: true, remaining: MAX_REQUESTS - found.count };
}
