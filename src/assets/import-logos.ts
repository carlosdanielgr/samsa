export const logos = (path: string) =>
  new URL(`./logos/${path}`, import.meta.url).href;
