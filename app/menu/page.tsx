"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from 'lucide-react';
import { products } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { Category } from "@/lib/types";

type FilterCategory = "all" | Category;

const categories: { value: FilterCategory; label: string; emoji: string }[] = [
  { value: "all", label: "All Items", emoji: "🍽️" },
  { value: "cookies", label: "Cookies", emoji: "🍪" },
  { value: "shakes", label: "Milkshakes", emoji: "🥤" },
  { value: "bundles", label: "Bundles", emoji: "🎁" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, search, sort]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-brown-800 to-brown-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold mb-4">Our Menu</h1>
          <p className="text-brown-200 text-lg max-w-xl mx-auto">
            Freshly baked cookies and hand-crafted milkshakes — made from scratch every single day. Find your new favorite.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cookies, shakes..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-brown-200 bg-white text-brown-800 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-sm"
            />
          </div>
          <div className="relative">
            <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="pl-10 pr-8 py-3.5 rounded-2xl border border-brown-200 bg-white text-brown-700 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm appearance-none cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={
                "flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200 " +
                (activeCategory === cat.value
                  ? "bg-brown-700 text-white shadow-md"
                  : "bg-white text-brown-600 border border-brown-200 hover:border-brown-400")
              }
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-brown-500 text-sm mb-6">
          Showing <span className="font-bold text-brown-700">{filtered.length}</span> item{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "all" && (
            <span> in <span className="font-bold text-brown-700">{categories.find((c) => c.value === activeCategory)?.label}</span></span>
          )}
        </p>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display text-2xl font-bold text-brown-700 mb-2">No results found</h3>
            <p className="text-brown-500 mb-6">Try a different search term or category.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-2xl transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
