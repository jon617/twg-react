import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const neue = localFont({
  src: '../public/fonts/neue2.ttf',
  variable: '--font-neue',
});
const norwester = localFont({
  src: '../public/fonts/norwester.ttf',
  variable: '--font-norwester',
});
export const metadata: Metadata = {
  title: "wassp",
  description: "multibeam sonar products & solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${neue.variable} ${norwester.variable} font-neue ${inter.className}`}>{children}</body>
    </html>
  );
}
