import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interHeading = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const interBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Page\'s Plumbing Co | Wilmington, NC',
  description:
    'Page\'s Plumbing Co provides expert plumbing services in Wilmington, NC. Licensed plumbers for emergency repairs, pipe fitting, drain cleaning, water heater installation, and residential & commercial plumbing. Call today for fast, reliable service.',
  keywords:
    'plumber, plumbing service, emergency plumber, pipe repair, drain cleaning, water heater, Wilmington, NC, Page\'s Plumbing Co',
  openGraph: {
    title: 'Page\'s Plumbing Co | Licensed Plumber in Wilmington, NC',
    description:
      'Trusted plumbing professionals serving Wilmington, NC. Emergency repairs, installations, and maintenance. Available 24/7.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interHeading.variable} ${interBody.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}