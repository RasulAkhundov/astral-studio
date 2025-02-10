'use client';
import Navbar from '@/layouts/Navbar/Navbar';
import './globals.scss';
import './home.scss';
import LenisProvider from '@/utils/LenisProvider';
import Loader from '@/layouts/Loader/Loader';
import Header from '@/layouts/Header/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Loader />
          <Navbar />
          {/* <Header /> */}

          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
