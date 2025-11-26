import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Syd&Eats - Premium Food Concierge in Tel Aviv",
  description: "I'll book the restaurant, you show up hungry. Sydney Wolff's premium food concierge service connects you with Tel Aviv's finest dining experiences.",
  keywords: ["food concierge", "Tel Aviv restaurants", "restaurant reservations", "dining concierge", "Sydney Wolff", "premium dining", "Tel Aviv food", "Israel restaurants"],
  authors: [{ name: "Sydney Wolff" }],
  openGraph: {
    title: "Syd&Eats - Premium Food Concierge in Tel Aviv",
    description: "I'll book the restaurant, you show up hungry. Premium dining experiences curated by Sydney Wolff.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
