import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'], 
});

export const metadata = {
  title: 'Veloura - Luxury Resorts, Hotels, Car Rentals, Flights & More',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
