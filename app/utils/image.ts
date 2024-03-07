export function imageUrl(url: string, width: number, quality = 75) {
  const searchParams = new URLSearchParams({
    url,
    w: width.toString(),
    q: quality.toString(),
  });

  return ENV.VERCEL ? `_vercel/image?${searchParams.toString()}` : url;
}
