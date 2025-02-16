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
      <body>
        <LenisProvider>
          <Loader />
          <Navbar />
          <VideoModal />

          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
