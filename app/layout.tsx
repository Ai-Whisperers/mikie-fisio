import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikie Fisioterapia | Fisioterapia Especializada para Mujeres',
  description:
    'Fisioterapia especializada para mujeres en Asunción, Paraguay. Atención prenatal, postparto, suelo pélvico y más. Agenda tu consulta.',
  keywords: [
    'fisioterapia',
    'mujeres',
    'prenatal',
    'postparto',
    'suelo pélvico',
    'Asunción',
    'Paraguay',
    'rehabilitación',
    'drenaje linfático',
  ],
  authors: [{ name: 'Mikie Moyano Nakamura' }],
  creator: 'Mikie Fisioterapia',
  publisher: 'Mikie Fisioterapia',
  robots: 'index, follow',
  openGraph: {
    title: 'Mikie Fisioterapia | Fisioterapia Especializada para Mujeres',
    description:
      'La única fisioterapia en Asunción que entiende verdaderamente el cuerpo femenino. Especialista en mujeres, prenatal y postparto.',
    type: 'website',
    locale: 'es_PY',
    url: 'https://mikiefisioterapia.com',
    siteName: 'Mikie Fisioterapia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mikie Fisioterapia - Especializada en Mujeres',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikie Fisioterapia | Fisioterapia Especializada para Mujeres',
    description:
      'Fisioterapia que entiende el cuerpo femenino. Prenatal, postparto, suelo pélvico en Asunción.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#14b8a6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}