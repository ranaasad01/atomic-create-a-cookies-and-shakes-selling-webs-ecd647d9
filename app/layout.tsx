import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Cookies & Shakes Co. — Freshly Baked Cookies & Hand-Crafted Milkshakes",
  description:
    "Order freshly baked cookies and hand-crafted milkshakes online. Delivered warm to your door. Classic Chocolate Chip, Triple Chocolate Shake, and more.",
  keywords: "cookies, milkshakes, bakery, delivery, chocolate chip, vanilla shake",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable + " " + nunito.variable}>
      <body className="bg-cream font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
