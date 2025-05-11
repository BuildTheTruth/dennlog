import { BASE_URL } from '.';

interface ImageLoaderProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
}

export default function supabaseLoader({ src, width, height, quality }: ImageLoaderProps) {
  return `${BASE_URL}/${src}?width=${width}&height=${height}&quality=${quality || 75}`;
}
