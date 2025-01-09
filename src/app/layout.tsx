import React from 'react';
import { Radio_Canada } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.scss';

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-radio-canada',
});

export const metadata: Metadata = {
  title: 'Magnus The Capybara',
  description: 'Meet real $magnus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={radioCanada.variable}>
      <body>{children}</body>
    </html>
  );
}
