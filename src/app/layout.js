import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "SKG Travels | Cab Booking & Car Rentals",
  description:
    "Book local cabs, city-to-city rides, and car rentals with SKG Travels. Explore comfortable cars, transparent fares, and 24/7 support.",
  icons: {
    icon: "/skg-favicon.png",
    shortcut: "/skg-favicon.png",
    apple: "/skg-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className} data-scroll-behavior="smooth">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
