import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff", weight: "400" },
    { path: "./fonts/Satoshi-Light.woff", weight: "100" },
    { path: "./fonts/Satoshi-Light.woff2", weight: "100" },
  ],
});

export const metadata: Metadata = {
  title: "Dev meetup",
  description: "A meetup for developers to share knowledge and network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-3">
      <body className={`${satoshi.className} antialiased container`}>
        {children}
      </body>
    </html>
  );
}
