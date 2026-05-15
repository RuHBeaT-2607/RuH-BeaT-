import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RUH 🫀BeaT',
  description: 'Cinematic AI quote posters powered by Gemini',
  openGraph: { title: 'RUH 🫀BeaT', description: 'Generate premium emotional posters in seconds' },
  twitter: { card: 'summary_large_image', title: 'RUH 🫀BeaT' }
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang='en'><body>{children}</body></html>; }
