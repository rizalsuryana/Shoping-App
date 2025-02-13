import type { Metadata } from "next";
import { Ovo } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Nav";

const ovo = Ovo({subsets: ['latin'], weight: '400'});

export const metadata: Metadata = {
  title: "Shopping App | Next JS",
  description: "On development...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ovo.className}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
