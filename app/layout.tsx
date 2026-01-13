import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield } from '@/components/Starfield';
import { BackToTop } from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ethan Micciola | Software Engineering & Cybersecurity',
  description: 'Software Engineering Technology student focused on cybersecurity and full-stack development. Building secure, scalable applications with Python, C#, React, and AWS.',
  keywords: ['Software Engineer', 'Cybersecurity', 'Full-Stack Developer', 'Python', 'C#', 'React', 'AWS'],
  authors: [{ name: 'Ethan Micciola' }],
  openGraph: {
    title: 'Ethan Micciola | Software Engineering & Cybersecurity',
    description: 'Software Engineering Technology student focused on cybersecurity and full-stack development.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethan Micciola | Software Engineering & Cybersecurity',
    description: 'Software Engineering Technology student focused on cybersecurity and full-stack development.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <Starfield />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
