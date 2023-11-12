import '@/styles/globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Navigation/Sidebar';
import NavBar from '@/components/Navigation/NavBar';
import { getLoggedInUser } from '@/lib/user';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tabula',
  description: 'Tabula - a new LMS',
  robots: 'noindex'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getLoggedInUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
          <NavBar />
          {currentUser && <Sidebar currentUser={currentUser} />}
          <main className="p-4 md:ml-64 h-auto pt-20">{children}</main>
        </div>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" />
      </body>
    </html>
  );
}
