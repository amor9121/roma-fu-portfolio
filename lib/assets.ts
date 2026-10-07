// Public files need the GitHub Pages prefix; local development uses an empty prefix.
export function assetPath(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
