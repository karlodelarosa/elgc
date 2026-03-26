import type { Metadata } from 'next';
import { Anton, Montserrat, Six_Caps } from 'next/font/google';
import { TopMenu } from '@/components/menu/top-menu.component';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton has only one weight (400)
  variable: '--font-anton', // Custom CSS variable
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Load specific weights
  variable: '--font-montserrat',
});

const sixCaps = Six_Caps({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-six-caps',
});

export const metadata: Metadata = {
  title: 'ELGC',
  description: 'ELGC Official Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${anton.variable} ${montserrat.variable} ${sixCaps.variable} antialiased`}
      >
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
