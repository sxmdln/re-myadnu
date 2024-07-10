import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "myADNU",
  description: "Fake myADNU website as a practice for Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
