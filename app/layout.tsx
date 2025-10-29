import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MOODCHANGER.AI',
  description: 'Transforming your mood, one insight at a time. A Flomad Labs product.',
  metadataBase: new URL('https://moodchanger.ai'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'MOODCHANGER.AI',
    description: 'Transforming your mood, one insight at a time. AI-powered mood transformation technology from Flomad Labs.',
    url: 'https://moodchanger.ai',
    siteName: 'MOODCHANGER.AI',
    images: [
      {
        url: '/og-pic.png',
        width: 1200,
        height: 630,
        alt: 'MOODCHANGER.AI - Transforming your mood, one insight at a time',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOODCHANGER.AI',
    description: 'Transforming your mood, one insight at a time. AI-powered mood transformation technology from Flomad Labs.',
    images: ['/og-pic.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
