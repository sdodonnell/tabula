import './styles/globals.css';
import './styles/overrides.css';
import type { Metadata } from 'next';
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
        <div className="columns">
          <div className="column is-one-quarter has-background-link-light">
            <Sidebar />
          </div>
          <div className="column p-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
