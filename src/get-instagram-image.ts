import { curl } from './curl';

export const getInstagramImage = async (instagram: string) => {
  const url = URL.canParse(instagram)
    ? instagram
    : `https://www.instagram.com/${instagram}`;

  const html = await curl(url, [
    '-L',
    '-A',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  ]);

  const match = html.match(/<meta property="og:image" content="([^"]+)"/);

  return match?.[1].replace(/&amp;/g, '&');
};
