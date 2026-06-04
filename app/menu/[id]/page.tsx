'use client';

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, ShoppingCart, Plus, Minus, Check } from 'lucide-react';
import { products } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 text-center">
        <div className="text-7xl mb-6">🍪</div>
        <h1 className="font-display text-3xl font-extrabold text-brown-800 mb-3">Product Not Found</h1>
        <p className="text-brown-500 mb-6">We could not find that item on our menu.</p>
        <Link href="/menu" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-2xl transition-colors">
          Back to Menu
        </Link>
      </div>
    );
  }

  function handleAddToCart() {
    addItem(product as Product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-brown-600 hover:text-brown-800 font-medium text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-5 left-5 bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="text-pink-500 font-bold text-sm uppercase tracking-widest capitalize mb-2">
              {product.category}
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-brown-800 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={"w-5 h-5 " + (s <= Math.round(product.rating) ? "text-amber-400 fill-amber-400" : "text-brown-200")}
                  />
                ))}
              </div>
              <span className="font-bold text-brown-800">{product.rating}</span>
              <span className="text-brown-400 text-sm">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-brown-600 text-lg leading-relaxed mb-6">{product.longDescription}</p>

            {/* Price */}
            <div className="text-3xl font-extrabold text-brown-800 mb-6">
              ${product.price.toFixed(2)}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brown-700 font-semibold">Quantity:</span>
              <div className="flex items-center gap-3 bg-brown-50 rounded-2xl px-4 py-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center hover:bg-brown-100 transition-colors"
                >
                  <Minus className="w-4 h-4 text-brown-700" />
                </button>
                <span className="w-8 text-center font-bold text-brown-800">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center hover:bg-brown-100 transition-colors"
                >
                  <Plus className="w-4 h-4 text-brown-700" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={"flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg mb-4 " +
                (added ? "bg-green-500 shadow-green-200" : "bg-pink-500 hover:bg-pink-600 shadow-pink-200") + " text-white"}
            >
              {added ? (
                <><Check className="w-6 h-6" /> Added to Cart!</>
              ) : (
                <><ShoppingCart className="w-6 h-6" /> Add to Cart — ${(product.price * quantity).toFixed(2)}</>
              )}
            </button>

            <Link
              href="/cart"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-brown-700 border-2 border-brown-200 hover:border-brown-400 transition-colors"
            >
              View Cart
            </Link>

            {/* Meta */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {product.calories && (
                <div className="bg-white rounded-2xl p-4 border border-brown-50">
                  <p className="text-brown-400 text-xs mb-1">Calories</p>
                  <p className="font-bold text-brown-800">{product.calories} kcal</p>
                </div>
              )}
              {product.allergens && product.allergens.length > 0 && (
                <div className="bg-white rounded-2xl p-4 border border-brown-50">
                  <p className="text-brown-400 text-xs mb-1">Allergens</p>
                  <p className="font-bold text-brown-800 text-sm">{product.allergens.join(", ")}</p>
                </div>
              )}
            </div>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mt-4 bg-white rounded-2xl p-4 border border-brown-50">
                <p className="text-brown-400 text-xs mb-2">Ingredients</p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="bg-brown-50 text-brown-600 text-xs font-medium px-3 py-1 rounded-full">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
