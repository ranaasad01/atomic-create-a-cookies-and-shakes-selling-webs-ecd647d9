"use client";

import Link from "next/link";
import { Cookie, Camera as Instagram, MessageCircle as Twitter, Globe as Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-brown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-white font-extrabold text-lg">Cookies &amp; Shakes</span>
                <span className="block text-brown-300 text-xs -mt-1">Co.</span>
              </div>
            </Link>
            <p className="text-brown-300 text-sm leading-relaxed mb-6">
              Freshly baked cookies and hand-crafted milkshakes made with love and the finest ingredients. Delivered to your door.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-brown-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-brown-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-brown-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Our Menu" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/cart", label: "My Cart" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brown-300 hover:text-pink-300 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Menu</h3>
            <ul className="space-y-3">
              {[
                { href: "/menu?category=cookies", label: "Fresh Cookies" },
                { href: "/menu?category=shakes", label: "Milkshakes" },
                { href: "/menu?category=bundles", label: "Combo Bundles" },
                { href: "/menu", label: "View All" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brown-300 hover:text-pink-300 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                <span className="text-brown-300 text-sm">123 Bakery Lane, Sweet Street, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="tel:+15551234567" className="text-brown-300 hover:text-pink-300 text-sm transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="mailto:hello@cookiesandshakes.co" className="text-brown-300 hover:text-pink-300 text-sm transition-colors">
                  hello@cookiesandshakes.co
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-brown-800 rounded-xl">
              <p className="text-brown-300 text-xs font-medium">Hours</p>
              <p className="text-white text-sm mt-1">Mon–Fri: 8am – 9pm</p>
              <p className="text-white text-sm">Sat–Sun: 9am – 10pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brown-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brown-400 text-sm">
            © {new Date().getFullYear()} Cookies &amp; Shakes Co. All rights reserved.
          </p>
          <p className="text-brown-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" /> and lots of butter
          </p>
        </div>
      </div>
    </footer>
  );
}
