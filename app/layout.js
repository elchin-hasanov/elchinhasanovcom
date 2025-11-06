import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Poppins({
  variable: "--font-display",
  weight: ["400","500","600","700","800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Elchin Hasanov",
  description: "Personal website of Elchin Hasanov",
  icons: {
    icon: [
      { url: "/eh.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/eh.svg" type="image/svg+xml" />
        <title>Elchin Hasanov</title>
      </head>
  <body className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
