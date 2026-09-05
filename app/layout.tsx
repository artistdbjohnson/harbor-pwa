import type { Metadata, Viewport } from 'next';
import './globals.css';
import CrisisBar from '@/components/CrisisBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Harbor — Postpartum depression and psychosis help',
    template: '%s · Harbor',
  },
  description:
    'Help and prevention for postpartum depression and postpartum psychosis. Crisis numbers, warning signs, partner guidance. Not a diagnostic tool.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Harbor',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/icons/icon-192.png',
    apple: '/icons/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Roboto+Condensed:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col pb-14">
        <CrisisBar />
        <div className="flex-1">{children}</div>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js'))}`,
          }}
        />
      </body>
    </html>
  );
}
