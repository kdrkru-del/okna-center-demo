/**
 * Returns the correct asset URL respecting Vite's base path (e.g. /okna-center-demo/ on GitHub Pages)
 */
export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};
