"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Banknote, Lock, Check } from 'lucide-react';
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");

  const deliveryFee = totalPrice >= 25 ? 0 : 3.99;
  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + deliveryFee + tax;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    deliveryNotes: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 1500);
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 text-center">
        <div className="text-7xl mb-6">🛒</div>
        <h1 className="font-display text-3xl font-extrabold text-brown-800 mb-3">Nothing to checkout</h1>
        <p className="text-brown-500 mb-6">Your cart is empty. Add some treats first!</p>
        <Link href="/menu" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-2xl transition-colors">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/cart" className="inline-flex items-center gap-2 text-brown-600 hover:text-brown-800 font-medium text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        <h1 className="font-display text-4xl font-extrabold text-brown-800 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-brown-50">
                <h2 className="font-display text-xl font-bold text-brown-800 mb-5">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brown-700 text-sm font-semibold mb-1.5">First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-brown-700 text-sm font-semibold mb-1.5">Last Name *</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="Doe" />
                  </div>
                  <div>
                    <label className="block text-brown-700 text-sm font-semibold mb-1.5">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-brown-700 text-sm font-semibold mb-1.5">Phone *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="(555) 000-0000" />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-brown-50">
                <h2 className="font-display text-xl font-bold text-brown-800 mb-5">Delivery Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-brown-700 text-sm font-semibold mb-1.5">Street Address *</label>
                    <input name="address" value={form.address} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="123 Main Street" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1">
                      <label className="block text-brown-700 text-sm font-semibold mb-1.5">City *</label>
                      <input name="city" value={form.city} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="Los Angeles" />
                    </div>
                    <div>
                      <label className="block text-brown-700 text-sm font-semibold mb-1.5">State *</label>
                      <input name="state" value={form.state} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="CA" />
                    </div>
                    <div>
                      <label className="block text-brown-700 text-sm font-semibold mb-1.5">ZIP Code *</label>
                      <input name="zip" value={form.zip} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="90210" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-brown-700 text-sm font-semibold mb-1.5">Delivery Notes (optional)</label>
                    <textarea name="deliveryNotes" value={form.deliveryNotes} onChange={handleChange} rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800 resize-none" placeholder="Leave at door, ring bell, etc." />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-brown-50">
                <h2 className="font-display text-xl font-bold text-brown-800 mb-5">Payment Method</h2>
                <div className="flex gap-3 mb-5">
                  <button type="button" onClick={() => setPaymentMethod("card")}
                    className={"flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-all " +
                      (paymentMethod === "card" ? "border-pink-500 bg-pink-50 text-pink-600" : "border-brown-200 text-brown-500 hover:border-brown-300")}>
                    <CreditCard className="w-4 h-4" />
                    Credit / Debit Card
                  </button>
                  <button type="button" onClick={() => setPaymentMethod("cash")}
                    className={"flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-all " +
                      (paymentMethod === "cash" ? "border-pink-500 bg-pink-50 text-pink-600" : "border-brown-200 text-brown-500 hover:border-brown-300")}>
                    <Banknote className="w-4 h-4" />
                    Cash on Delivery
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-brown-700 text-sm font-semibold mb-1.5">Card Number</label>
                      <input name="cardNumber" value={form.cardNumber} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="1234 5678 9012 3456" maxLength={19} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-brown-700 text-sm font-semibold mb-1.5">Expiry Date</label>
                        <input name="cardExpiry" value={form.cardExpiry} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="MM / YY" maxLength={7} />
                      </div>
                      <div>
                        <label className="block text-brown-700 text-sm font-semibold mb-1.5">CVC</label>
                        <input name="cardCvc" value={form.cardCvc} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800" placeholder="123" maxLength={4} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-brown-400">
                      <Lock className="w-3.5 h-3.5" />
                      Your payment information is encrypted and secure.
                    </div>
                  </div>
                )}

                {paymentMethod === "cash" && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700">
                    Pay with cash when your order arrives. Please have the exact amount ready.
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-brown-50 sticky top-24">
                <h2 className="font-display text-xl font-bold text-brown-800 mb-5">Order Summary</h2>
                <div className="space-y-3 mb-5 max-h-48 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-brown-50 shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-brown-800 text-xs font-semibold line-clamp-1">{item.product.name}</p>
                        <p className="text-brown-400 text-xs">x{item.quantity}</p>
                      </div>
                      <span className="text-brown-700 text-xs font-bold shrink-0">
                        {"$" + (item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-brown-100 pt-4 space-y-2 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-brown-500">Subtotal</span>
                    <span className="font-semibold text-brown-700">{"$" + totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brown-500">Delivery</span>
                    <span className="font-semibold text-brown-700">
                      {deliveryFee === 0 ? <span className="text-green-600">FREE</span> : "$" + deliveryFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brown-500">Tax</span>
                    <span className="font-semibold text-brown-700">{"$" + tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-brown-800 pt-2 border-t border-brown-100">
                    <span>Total</span>
                    <span className="text-xl">{"$" + orderTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-all duration-200 hover:scale-105"
                >
                  {loading ? (
                    "Placing Order..."
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
                      Place Order
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
