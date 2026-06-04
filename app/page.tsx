import Link from "next/link";
import { ArrowRight, Star, Cookie, Clock, Truck, Award, ChevronRight } from 'lucide-react';
import { getFeaturedProducts, testimonials } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-brown-800 via-brown-700 to-brown-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-pink-500/30">
                <Cookie className="w-4 h-4" />
                Freshly Baked Daily
              </span>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
                Cookies &amp; Shakes
                <span className="block text-pink-300">Made with Love</span>
              </h1>
              <p className="text-brown-200 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
                Indulge in our freshly baked cookies and hand-crafted milkshakes. Made from scratch every morning with premium ingredients and delivered warm to your door.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-pink-500/30"
                >
                  Order Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 transition-all duration-200"
                >
                  View Menu
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-2">
                  {["bg-pink-400", "bg-amber-400", "bg-brown-400", "bg-pink-300"].map((c, i) => (
                    <div key={i} className={"w-9 h-9 rounded-full border-2 border-brown-700 " + c} />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-brown-300 text-sm mt-0.5">Loved by 10,000+ customers</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-amber-400/20 rounded-5xl" />
                <img
                  src="https://i0.wp.com/thehungrykitchenblog.com/wp-content/uploads/2022/08/Boozy-Cookies-and-Cream-Milkshake-1-2.jpg?fit=1365%2C2048&ssl=1"
                  alt="Delicious cookies and milkshakes"
                  className="w-full h-full object-cover rounded-5xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-brown-800 font-bold text-sm">Fresh Today</p>
                      <p className="text-brown-500 text-xs">Baked this morning</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-brown-800 font-bold">4.9/5</span>
                  </div>
                  <p className="text-brown-500 text-xs mt-0.5">2,400+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="bg-brown-800 text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {[
              { icon: <Clock className="w-5 h-5 text-pink-300" />, text: "Baked Fresh Daily" },
              { icon: <Truck className="w-5 h-5 text-pink-300" />, text: "Fast Delivery" },
              { icon: <Award className="w-5 h-5 text-pink-300" />, text: "Premium Ingredients" },
              { icon: <Star className="w-5 h-5 text-pink-300" />, text: "10,000+ Happy Customers" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-brown-200">
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-pink-500 font-bold text-sm uppercase tracking-widest">Our Favorites</span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-brown-800 mt-2 mb-4">
            Featured Treats
          </h2>
          <p className="text-brown-500 text-lg max-w-xl mx-auto">
            Hand-picked by our bakers — the most loved cookies and shakes on our menu right now.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-brown-700 hover:bg-brown-800 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105"
          >
            View Full Menu
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-gradient-to-br from-brown-50 to-pink-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pink-500 font-bold text-sm uppercase tracking-widest">Why We're Different</span>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-brown-800 mt-2 mb-4">
              The Cookies &amp; Shakes Difference
            </h2>
            <p className="text-brown-500 text-lg max-w-xl mx-auto">
              We don't cut corners. Every cookie is baked to order, every shake is hand-crafted, and every delivery is packed with care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "🧈",
                title: "Real Butter, Always",
                desc: "We use only European-style cultured butter in every single cookie. No margarine, no shortcuts — just rich, golden flavor in every bite.",
              },
              {
                emoji: "🍫",
                title: "Premium Chocolate",
                desc: "Our chocolate chips and chunks are sourced from Belgian and Valrhona chocolatiers. The difference is unmistakable from the very first bite.",
              },
              {
                emoji: "🥛",
                title: "Farm-Fresh Dairy",
                desc: "Every milkshake is made with whole milk and ice cream from local dairy farms. Creamy, fresh, and never from concentrate.",
              },
              {
                emoji: "⏰",
                title: "Baked to Order",
                desc: "We bake in small batches throughout the day so your cookies arrive warm and gooey — never sitting on a shelf for hours.",
              },
              {
                emoji: "🚀",
                title: "Fast Delivery",
                desc: "Our insulated packaging keeps cookies warm and shakes cold during delivery. Most orders arrive within 45 minutes.",
              },
              {
                emoji: "💚",
                title: "No Artificial Anything",
                desc: "No artificial flavors, colors, or preservatives. What you taste is exactly what went in — real ingredients, real flavor.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-display font-bold text-xl text-brown-800 mb-2">{item.title}</h3>
                <p className="text-brown-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-pink-500 font-bold text-sm uppercase tracking-widest">Happy Customers</span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-brown-800 mt-2 mb-4">
            What People Are Saying
          </h2>
          <p className="text-brown-500 text-lg max-w-xl mx-auto">
            Don't just take our word for it — here's what our regulars have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-white rounded-3xl p-7 shadow-sm border border-brown-50 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-brown-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-brown-200 flex items-center justify-center font-bold text-brown-700 text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-brown-800 text-sm">{t.name}</p>
                  <p className="text-brown-400 text-xs">{t.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {testimonials.slice(3).map((t) => (
            <div key={t.id} className="bg-white rounded-3xl p-7 shadow-sm border border-brown-50 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-brown-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-brown-200 flex items-center justify-center font-bold text-brown-700 text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-brown-800 text-sm">{t.name}</p>
                  <p className="text-brown-400 text-xs">{t.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="bg-brown-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "25+", label: "Cookie Varieties" },
              { number: "12+", label: "Shake Flavors" },
              { number: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl lg:text-5xl font-extrabold text-pink-300 mb-2">{stat.number}</p>
                <p className="text-brown-200 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-500 to-pink-600 rounded-4xl p-12 text-center text-white shadow-2xl shadow-pink-200">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-4">
            Ready to Treat Yourself?
          </h2>
          <p className="text-pink-100 text-lg mb-8 max-w-xl mx-auto">
            Browse our full menu of freshly baked cookies and hand-crafted shakes. Your perfect treat is just a few clicks away.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-10 py-4 rounded-2xl hover:bg-pink-50 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Shop the Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterSignup />
    </div>
  );
}
