import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trevland - Travel Website',
  description: 'Explore with Trevland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}