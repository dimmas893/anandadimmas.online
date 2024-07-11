import '@/styles/Home.module.css';
import '@/styles/swiper-bundle.min.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Jika ada logika JavaScript khusus yang diperlukan, masukkan di sini.
  }, []);

  return (
    <>
      <Script src="/packages/js/swiper-bundle.min.js" strategy="beforeInteractive" />
      <Script src="/packages/js/main.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}
