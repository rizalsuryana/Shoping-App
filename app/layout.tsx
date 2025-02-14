import type { Metadata } from "next";
import { Ovo } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Home/Footer";
import StoreProvider from "@/StoreProvider/StoreProvider";

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
    <StoreProvider>
    <ClerkProvider>
    <html lang="en">
      <body
        className={ovo.className}
        >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
        </ClerkProvider>
          </StoreProvider>
  );
}
