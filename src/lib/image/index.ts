const BASE_URL = 'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public';

interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png' | 'gif';
  resize?: 'cover' | 'contain' | 'fill';
}

export const getImageURL = (path: string, options?: ImageTransformOptions) => {
  const url = new URL(`${BASE_URL}/${path}`);

  if (options?.width) url.searchParams.set('width', options.width.toString());
  if (options?.height) url.searchParams.set('height', options.height.toString());
  if (options?.quality) url.searchParams.set('quality', options.quality.toString());
  if (options?.format) url.searchParams.set('format', options.format);
  if (options?.resize) url.searchParams.set('resize', options.resize);

  return url.toString();
};
