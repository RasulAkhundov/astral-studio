import Navbar from '@/layouts/Navbar/Navbar';
import './globals.scss';
import './home.scss';
import LenisProvider from '@/utils/LenisProvider';
import Loader from '@/layouts/Loader/Loader';
import Header from '@/layouts/Header/Header';
import VideoModal from '@/layouts/VideoModal/VideoModal';

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="rating" content="general" />
        <meta name="rating" content="5" />
        <meta name="revisit" content="3" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords"
          content="astral, studio, astral studio, astral studios, Bringing ideas to life with powerful
animations and hyper-efficient workflows." />
        <meta property="og:site_name" content="astral-studios.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Astral Studios" />
        <meta property="og:image" content="https://www.astral-studios.com/favicon/512x512.svg" />
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
        <meta name="thumbnail" content="https://www.astral-studios.com/favicon/512x512.svg" />
        <meta property="og:url" content="https://www.astral-studios.com/" />
        <meta property="og:description"
          content="Bringing ideas to life with powerful
animations and hyper-efficient workflows." />
        <meta name="twitter:url" content="https://www.astral-studios.com/" />
        <meta name="twitter:title" content="Astral Studios" />
        <meta name="twitter:description"
          content="Bringing ideas to life with powerful
animations and hyper-efficient workflows." />
        <meta name="twitter:image" content="https://www.astral-studios.com/favicon/256x256.svg" />
        <meta name="apple-mobile-web-app-title" content="Astral Studios" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <link rel="shortcut icon" href="/favicon/512x512.svg" background type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/256x256.svg" />
      </head>

      <body>
        <LenisProvider>
          <Loader />
          <Navbar />
          {/* <VideoModal /> */}

          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
