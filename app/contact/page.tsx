"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brown-800 to-brown-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-pink-500/20 text-pink-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-pink-500/30">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold mb-5">
            We Would Love to Hear From You
          </h1>
          <p className="text-brown-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question about an order, a special request, or just want to say hi? We are here and happy to help. Reach out any time.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info Cards */}
            <div className="space-y-5">
              <h2 className="font-display text-2xl font-extrabold text-brown-800 mb-6">Contact Info</h2>

              {[
                {
                  icon: <MapPin className="w-5 h-5 text-pink-500" />,
                  bg: "bg-pink-50",
                  title: "Visit Us",
                  lines: ["123 Bakery Lane", "Sweet Street, Los Angeles", "CA 90210"],
                },
                {
                  icon: <Phone className="w-5 h-5 text-amber-500" />,
                  bg: "bg-amber-50",
                  title: "Call Us",
                  lines: ["(555) 123-4567", "Mon–Fri: 8am – 9pm", "Sat–Sun: 9am – 10pm"],
                },
                {
                  icon: <Mail className="w-5 h-5 text-brown-500" />,
                  bg: "bg-brown-50",
                  title: "Email Us",
                  lines: ["hello@cookiesandshakes.co", "orders@cookiesandshakes.co"],
                },
                {
                  icon: <Clock className="w-5 h-5 text-green-500" />,
                  bg: "bg-green-50",
                  title: "Opening Hours",
                  lines: ["Monday – Friday: 8am – 9pm", "Saturday – Sunday: 9am – 10pm", "Public Holidays: 10am – 8pm"],
                },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-brown-50 flex gap-4">
                  <div className={"w-10 h-10 rounded-xl flex items-center justify-center shrink-0 " + card.bg}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="font-bold text-brown-800 text-sm mb-1">{card.title}</p>
                    {card.lines.map((line, j) => (
                      <p key={j} className="text-brown-500 text-xs">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-brown-50">
                <h2 className="font-display text-2xl font-extrabold text-brown-800 mb-2">Send Us a Message</h2>
                <p className="text-brown-500 text-sm mb-7">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-9 h-9 text-green-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brown-800 mb-2">Message Sent!</h3>
                    <p className="text-brown-500 text-sm max-w-sm">
                      Thanks for reaching out! We will get back to you within 24 hours. In the meantime, feel free to browse our menu.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-brown-700 text-sm font-semibold mb-1.5">Your Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800"
                        />
                      </div>
                      <div>
                        <label className="block text-brown-700 text-sm font-semibold mb-1.5">Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-brown-700 text-sm font-semibold mb-1.5">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800 bg-white"
                      >
                        <option value="">Select a subject...</option>
                        <option value="order">Order Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="catering">Catering Request</option>
                        <option value="allergy">Allergy Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-brown-700 text-sm font-semibold mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm text-brown-800 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-all duration-200 hover:scale-105"
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-brown-100 to-brown-200 rounded-3xl overflow-hidden h-64 flex items-center justify-center relative">
            <img
              src="https://gisgeography.com/wp-content/uploads/2020/06/Los-Angeles-Things-To-Do.jpg"
              alt="Our location in Los Angeles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brown-900/40 flex items-center justify-center">
              <div className="bg-white rounded-2xl px-6 py-4 text-center shadow-xl">
                <MapPin className="w-6 h-6 text-pink-500 mx-auto mb-1" />
                <p className="font-bold text-brown-800 text-sm">123 Bakery Lane</p>
                <p className="text-brown-500 text-xs">Los Angeles, CA 90210</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-brown-50 to-pink-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-extrabold text-brown-800 mb-3">Frequently Asked Questions</h2>
            <p className="text-brown-500">Quick answers to the questions we hear most often.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How far in advance should I order?",
                a: "For standard orders, we recommend ordering at least 2 hours in advance. For large catering orders (50+ items), please give us 48 hours notice.",
              },
              {
                q: "Do you offer gluten-free or vegan options?",
                a: "Yes! We have a growing range of gluten-free cookies and dairy-free shakes. Look for the dietary labels on our menu page, or contact us for custom requests.",
              },
              {
                q: "What is your delivery radius?",
                a: "We currently deliver within a 10-mile radius of our Los Angeles kitchen. Enter your address at checkout to confirm availability.",
              },
              {
                q: "Can I customize my order?",
                a: "Absolutely! Leave a note in the delivery instructions field at checkout, or contact us directly for special requests like custom messages or ingredient substitutions.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-brown-50">
                <h3 className="font-bold text-brown-800 mb-2">{faq.q}</h3>
                <p className="text-brown-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
