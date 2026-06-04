"use client";

import Link from "next/link";
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brown-50">
      <Link href={"/menu/" + product.id} className="block relative overflow-hidden">
        <div className="aspect-square bg-gradient-to-br from-cream to-brown-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link href={"/menu/" + product.id}>
            <h3 className="font-bold text-brown-800 text-base leading-tight hover:text-brown-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <span className="text-brown-700 font-extrabold text-base shrink-0">
            {"$" + product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-brown-500 text-sm line-clamp-2 mb-3">{product.description}</p>

        <div className="flex items-center gap-1 mb-4">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-brown-700 text-xs font-semibold">{product.rating}</span>
          <span className="text-brown-400 text-xs">{"(" + product.reviewCount + ")"}</span>
        </div>

        <button
          onClick={() => addItem(product)}
          className="w-full flex items-center justify-center gap-2 bg-brown-700 hover:bg-brown-800 active:scale-95 text-white font-semibold text-sm py-2.5 rounded-2xl transition-all duration-200"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
