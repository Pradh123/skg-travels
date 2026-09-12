import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Welcome",
  description: "Welcome to SKG",
  icons: {
    icon: "/skg-favicon.png",
    shortcut: "/skg-favicon.png",
    apple: "/skg-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
