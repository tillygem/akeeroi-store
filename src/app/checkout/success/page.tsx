"use client";

import Link from "next/link";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-center">
      
      {/* Success Icon Animation */}
      <div className="mb-6">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-600 w-12 h-12" />
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-[#800020] mb-4">
        Order Received!
      </h1>
      
      <p className="text-gray-600 text-lg max-w-md mx-auto mb-8 font-light">
        Thank you for shopping with Akee-roi Collections. Your order has been successfully placed.
      </p>

      {/* Action Card */}
      <div className="bg-white p-8 rounded-xl shadow-xl border border-[#D4AF37]/20 max-w-md w-full mb-10">
        <div className="flex flex-col items-center space-y-4">
          <Mail className="text-[#D4AF37] w-10 h-10" />
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest">
            Check Your Email
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We have sent a confirmation email to your inbox containing your <strong>Order ID</strong> and <strong>Payment Instructions</strong>.
          </p>
          <div className="bg-[#FDFBF7] px-4 py-2 rounded text-xs text-[#800020] font-medium border border-[#800020]/10">
            Please make payment to confirm delivery.
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <Link 
        href="/" 
        className="flex items-center gap-2 text-[#800020] hover:text-black transition-colors font-medium tracking-wide uppercase text-sm"
      >
        <ArrowRight size={16} /> Continue Shopping
      </Link>

    </main>
  );
}