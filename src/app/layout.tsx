import type { Metadata } from 'next';
import './globals.scss';
import React from 'react';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
