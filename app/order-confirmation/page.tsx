import Link from "next/link";
import { CheckCircle, ArrowRight, Cookie, Clock, Mail } from 'lucide-react';

export default function OrderConfirmationPage() {
  const orderNumber = "CSC-" + Math.floor(10000 + Math.random() * 90000);

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-14 h-14 text-green-500" />
        </div>

        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-brown-800 mb-3">
          Order Confirmed!
        </h1>
        <p className="text-brown-500 text-lg mb-2">
          Thank you for your order. We are already getting your treats ready!
        </p>
        <p className="text-brown-400 text-sm mb-8">
          Order number: <span className="font-bold text-brown-700">{orderNumber}</span>
        </p>

        {/* Status Steps */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-brown-50 mb-8 text-left">
          <h2 className="font-display text-xl font-bold text-brown-800 mb-6 text-center">What Happens Next?</h2>
          <div className="space-y-5">
            {[
              {
                icon: <Mail className="w-5 h-5 text-pink-500" />,
                title: "Confirmation Email Sent",
                desc: "We have sent an order confirmation to your email with all the details.",
                done: true,
              },
              {
                icon: <Cookie className="w-5 h-5 text-amber-500" />,
                title: "Baking in Progress",
                desc: "Our bakers are preparing your fresh cookies and shakes right now.",
                done: false,
              },
              {
                icon: <Clock className="w-5 h-5 text-brown-500" />,
                title: "Out for Delivery",
                desc: "Your order will be delivered within 30-45 minutes in our insulated packaging.",
                done: false,
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={"w-10 h-10 rounded-xl flex items-center justify-center shrink-0 " + (step.done ? "bg-green-100" : "bg-brown-50")}>
                  {step.icon}
                </div>
                <div>
                  <p className="font-bold text-brown-800 text-sm">{step.title}</p>
                  <p className="text-brown-500 text-xs mt-0.5">{step.desc}</p>
                </div>
                {step.done && (
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto shrink-0 mt-0.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Estimated Time */}
        <div className="bg-gradient-to-br from-pink-50 to-brown-50 rounded-3xl p-6 mb-8 border border-pink-100">
          <p className="text-brown-500 text-sm mb-1">Estimated Delivery Time</p>
          <p className="font-display text-3xl font-extrabold text-brown-800">30 – 45 minutes</p>
          <p className="text-brown-400 text-xs mt-1">We will text you when your order is on its way!</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105"
          >
            Order More Treats
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white border border-brown-200 hover:border-brown-400 text-brown-700 font-bold px-8 py-4 rounded-2xl transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
