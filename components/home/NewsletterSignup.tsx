"use client";

import { useState } from "react";
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <section className="bg-gradient-to-br from-brown-50 to-cream py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-7 h-7 text-pink-500" />
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-brown-800 mb-3">
          Get Sweet Deals in Your Inbox
        </h2>
        <p className="text-brown-500 text-base mb-8">
          Subscribe to our newsletter and be the first to know about new flavors, limited-edition cookies, and exclusive discounts. No spam — just sweetness.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-2xl px-6 py-4">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-semibold">You are in! Check your inbox for a welcome treat.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-4 rounded-2xl border border-brown-200 bg-white text-brown-800 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 hover:bg-pink-600 disabled:opacity-60 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 whitespace-nowrap text-sm"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}

        <p className="text-brown-400 text-xs mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
