import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sydandeats.com'),
  title: "Syd&Eats - Premium Food Concierge in Tel Aviv",
  description: "I'll book the restaurant, you show up hungry. Sydney Wolff's premium food concierge service connects you with Tel Aviv's finest dining experiences.",
  keywords: ["food concierge", "Tel Aviv restaurants", "restaurant reservations", "dining concierge", "Sydney Wolff", "premium dining", "Tel Aviv food", "Israel restaurants"],
  authors: [{ name: "Sydney Wolff" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Syd&Eats - Premium Food Concierge in Tel Aviv",
    description: "I'll book the restaurant, you show up hungry. Premium dining experiences curated by Sydney Wolff.",
    type: "website",
    locale: "en_US",
    url: 'https://sydandeats.com',
    siteName: 'Syd&Eats',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Syd&Eats - Premium Food Concierge Service'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syd&Eats - Premium Food Concierge in Tel Aviv',
    description: "I'll book the restaurant, you show up hungry.",
    images: ['/twitter-image.jpg'],
    creator: '@sydandeats',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Syd&Eats",
    "description": "Premium food concierge service in Tel Aviv",
    "founder": {
      "@type": "Person",
      "name": "Sydney Wolff"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tel Aviv",
      "addressCountry": "IL"
    },
    "areaServed": {
      "@type": "City",
      "name": "Tel Aviv"
    },
    "priceRange": "$$$",
    "url": "https://sydandeats.com",
    "image": "https://sydandeats.com/og-image.jpg",
    "servesCuisine": "International",
    "serviceType": "Restaurant Reservation Service"
  };

  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}
