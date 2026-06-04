"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  const deliveryFee = totalPrice > 0 ? (totalPrice >= 25 ? 0 : 3.99) : 0;
  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 text-center">
        <div className="text-8xl mb-6">🛒</div>
        <h1 className="font-display text-4xl font-extrabold text-brown-800 mb-3">Your cart is empty</h1>
        <p className="text-brown-500 text-lg mb-8 max-w-md">
          Looks like you have not added anything yet. Head to our menu and find something delicious!
        </p>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 bg-brown-700 hover:bg-brown-800 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105"
        >
          Browse Menu
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-7 h-7 text-brown-700" />
          <h1 className="font-display text-4xl font-extrabold text-brown-800">
            Your Cart
          </h1>
          <span className="bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            {totalItems} {totalItems !== 1 ? "items" : "item"}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-3xl p-5 shadow-sm border border-brown-50 flex gap-5"
              >
                <Link href={"/menu/" + item.product.id} className="shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brown-50">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link href={"/menu/" + item.product.id}>
                        <h3 className="font-bold text-brown-800 hover:text-brown-600 transition-colors line-clamp-1">
                          {item.product.name}
                        </h3>
                      </Link>
                      <span className="text-brown-400 text-xs capitalize">{item.product.category}</span>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1.5 rounded-xl hover:bg-red-50 text-brown-400 hover:text-red-500 transition-colors shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-brown-500 text-xs mt-1 line-clamp-1">{item.product.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 bg-brown-50 rounded-xl px-3 py-1.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-brown-100 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-brown-700" />
                      </button>
                      <span className="w-6 text-center font-bold text-brown-800 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-brown-100 transition-colors"
                      >
                        <Plus className="w-3 h-3 text-brown-700" />
                      </button>
                    </div>
                    <span className="font-extrabold text-brown-800">
                      {"$" + (item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-brown-600 hover:text-brown-800 font-medium text-sm transition-colors mt-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-brown-50 sticky top-24">
              <h2 className="font-display text-xl font-extrabold text-brown-800 mb-6">Order Summary</h2>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-brown-500">Subtotal ({totalItems} items)</span>
                  <span className="font-semibold text-brown-700">{"$" + totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brown-500">Delivery Fee</span>
                  <span className="font-semibold text-brown-700">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      "$" + deliveryFee.toFixed(2)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brown-500">Tax (8%)</span>
                  <span className="font-semibold text-brown-700">{"$" + tax.toFixed(2)}</span>
                </div>
              </div>

              {deliveryFee > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 text-xs text-amber-700">
                  Add <strong>{"$" + (25 - totalPrice).toFixed(2)}</strong> more for free delivery!
                </div>
              )}

              <div className="border-t border-brown-100 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-bold text-brown-800">Total</span>
                  <span className="font-extrabold text-brown-800 text-xl">{"$" + orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-pink-200"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-brown-400">
                <span>Secure Checkout</span>
                <span>|</span>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
