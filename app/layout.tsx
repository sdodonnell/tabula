import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from '@/components/Navigation/NavBar';
import Sidebar from '@/components/Navigation/Sidebar';
import { getLoggedInUser } from '@/lib/user';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tabula',
  description: 'Tabula - a new LMS',
  robots: 'noindex'
};

export default async function RootLayout({
  children,
  ai
}: {
  children: React.ReactNode;
  ai: React.ReactNode;
}) {
  const currentUser = await getLoggedInUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
          <NavBar>{ai}</NavBar>
          {currentUser && <Sidebar currentUser={currentUser} />}
          <main className="p-4 md:ml-64 h-auto pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
