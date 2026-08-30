export const DEFAULT_SIGNED_IN_PATH = "/plan";

// `next` arrives from the URL, so only same-origin paths are accepted. Values
// like "//evil.com" or "https://evil.com" would otherwise send a user who just
// logged in straight off the site.
export function safeNextPath(next: string | null): string {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return DEFAULT_SIGNED_IN_PATH;
  }

  return next;
}

export function loginPathFor(target: string): string {
  return `/login?next=${encodeURIComponent(target)}`;
}
