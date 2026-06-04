"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, Cookie } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-brown-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-brown-600 rounded-full flex items-center justify-center group-hover:bg-brown-700 transition-colors">
              <Cookie className="w-5 h-5 text-cream" />
            </div>
            <div className="leading-tight">
              <span className="block text-brown-800 font-extrabold text-lg tracking-tight">
                Cookies &amp; Shakes
              </span>
              <span className="block text-brown-500 text-xs font-medium -mt-1">Co.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brown-700 hover:text-brown-900 font-medium text-sm transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-brown-100 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6 text-brown-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce-once">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 rounded-full hover:bg-brown-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-brown-700" />
              ) : (
                <Menu className="w-6 h-6 text-brown-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-brown-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 px-4 text-brown-700 hover:text-brown-900 hover:bg-brown-50 rounded-xl font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="flex items-center gap-2 py-3 px-4 text-brown-700 hover:text-brown-900 hover:bg-brown-50 rounded-xl font-medium transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <ShoppingCart className="w-5 h-5" />
            Cart
            {totalItems > 0 && (
              <span className="ml-auto bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
}
