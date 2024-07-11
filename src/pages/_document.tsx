import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Ananda Dimmas Budiarto, a Fullstack Developer with high-level experience in both front-end and back-end web development, creating robust and scalable applications with quality work." />
        <meta name="keywords" content="Fullstack Developer, Ananda Dimmas Budiarto, Frontend Developer, Backend Developer, Web Development, JavaScript, PHP, Laravel, React, Next.js, Node.js, DevOps, CI/CD, Docker" />
        <meta property="og:title" content="Ananda Dimmas Budiarto - Fullstack Developer" />
        <meta property="og:description" content="Ananda Dimmas Budiarto, a Fullstack Developer with high-level experience in both front-end and back-end web development, creating robust and scalable applications with quality work." />
        <meta property="og:image" content="/packages/images/aku.jpeg" />
        <meta property="og:url" content="https://anandadimmas.online" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}