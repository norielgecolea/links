import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";


const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noriel Gecolea's Links",
  description: "My world.",
  openGraph: {
    title: "Noriel Gecolea's Links",
    description: "My world.",
    url: "https://links.norielgecolea.com",
    siteName: "Noriel Gecolea's Links",
    images: [
      {
        url: "https://links.norielgecolea.com/mecartoon.png", // replace with your desired preview image
        width: 630,
        height: 630,
        alt: "",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
