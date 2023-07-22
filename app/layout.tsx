import './styles/globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tabula',
  description: 'Tabula - a new LMS'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen grid grid-cols-[16rem_auto]">
          <Sidebar />
          <div className="overflow-scroll p-4">{children}</div>
        </div>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js" />
      </body>
    </html>
  );
}
