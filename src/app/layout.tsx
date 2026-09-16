import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bolt Motorcycles | Authorised Royal Enfield Dealership',
  description:
    'Bolt Motorcycles is an authorised Royal Enfield dealership established in 2021. Explore Royal Enfield motorcycles, book test rides, calculate EMI, and schedule authorised service.',
  keywords: [
    'Bolt Motorcycles',
    'Royal Enfield Dealership',
    'Royal Enfield Classic 350',
    'Hunter 350',
    'Himalayan 450',
    'Meteor 350',
    'Bullet 350',
    'Royal Enfield Service Center',
    'Test Ride Royal Enfield',
  ],
  openGraph: {
    title: 'Bolt Motorcycles | Authorised Royal Enfield Dealership',
    description:
      'Committed to delivering an exceptional motorcycle-buying and ownership experience since 2021. Pure Motorcycling starts at Bolt.',
    siteName: 'Bolt Motorcycles',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;1,6..12,400;1,6..12,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
