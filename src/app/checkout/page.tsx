"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Loader2, ArrowLeft, Lock, Trash2, Minus, Plus } from "lucide-react"; 

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart, removeFromCart, updateQuantity } = useCart(); 
  const router = useRouter();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "", 
    address: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, cart, total: cartTotal }),
      });

      const data = await response.json();

      if (data.success) {
        clearCart(); 
        router.push("/checkout/success"); 
      } else {
        alert("Something went wrong placing the order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // If Cart is Empty
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-serif text-[#800020] mb-4">Your Bag is Empty</h2>
        <p className="text-gray-500 mb-8">It looks like you haven't made your choice yet.</p>
        <Link href="/shop" className="bg-[#420010] text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-black transition-all">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Link href="/shop" className="text-gray-400 hover:text-[#800020] transition-colors">
             <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-serif text-[#420010]">Secure Checkout</h1>
          <Lock size={16} className="text-[#D4AF37]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* FORM  */}
          <div>
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#800020] mb-4 uppercase tracking-wider">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-[#FDFBF7] border border-gray-200 p-3 rounded text-gray-800 focus:outline-none focus:border-[#800020]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="055 555 5555" className="w-full bg-[#FDFBF7] border border-gray-200 p-3 rounded text-gray-800 focus:outline-none focus:border-[#800020]" />
                  </div>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#800020] mb-4 uppercase tracking-wider">Delivery Details</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">First Name</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-[#FDFBF7] border border-gray-200 p-3 rounded text-gray-800 focus:outline-none focus:border-[#800020]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Last Name</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-[#FDFBF7] border border-gray-200 p-3 rounded text-gray-800 focus:outline-none focus:border-[#800020]" />
                  </div>
                </div>
                
                <div className="mb-4">
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">City / Region</label>
                   <input required type="text" name="city" value={formData.city} onChange={handleChange} placeholder="e.g., Accra, Kumasi, Tamale" className="w-full bg-[#FDFBF7] border border-gray-200 p-3 rounded text-gray-800 focus:outline-none focus:border-[#800020]" />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Delivery Address / Landmark</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleChange} placeholder="e.g., East Legon, Near Anc Mall" className="w-full bg-[#FDFBF7] border border-gray-200 p-3 rounded text-gray-800 focus:outline-none focus:border-[#800020]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Order Notes (Optional)</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} placeholder="Any special instructions?" className="w-full bg-[#FDFBF7] border border-gray-200 p-3 rounded text-gray-800 focus:outline-none focus:border-[#800020]" />
                </div>
              </div>
            </form>
          </div>

          {/* ORDER SUMMARY */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-xl border border-[#D4AF37]/20 sticky top-32">
              <h2 className="text-xl font-serif text-[#800020] mb-6">Order Summary</h2>

              {/* Items List */}
              <div className="space-y-6 mb-8 max-h-100 overflow-y-auto pr-2 scrollbar-hide">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start border-b border-gray-100 pb-6 last:border-0">
                    
                    {/* Image */}
                    <div className="relative w-20 h-24 bg-gray-100 rounded overflow-hidden shrink-0 shadow-sm">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>

                    {/* Details & Controls */}
                    <div className="flex-1 flex flex-col justify-between h-24 py-1">
                      
                      {/* Name & Size */}
                      <div className="flex justify-between items-start">
                        <div>
                           <h4 className="text-sm font-medium text-gray-900 leading-tight mb-1">{item.name}</h4>
                           <p className="text-xs text-gray-500">Size: {item.size}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors p-1"
                          title="Remove Item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      {/* Quantity Controls & Price */}
                      <div className="flex justify-between items-end mt-2">
                        
                        {/* +/- Controls */}
                        <div className="flex items-center border border-gray-200 rounded-full h-8 px-2 bg-[#FDFBF7]">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-full flex items-center justify-center text-gray-500 hover:text-[#800020]"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold text-gray-900 w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-full flex items-center justify-center text-gray-500 hover:text-[#800020]"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <div className="text-sm font-bold text-[#800020]">
                          GHS {(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>GHS {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="text-xs italic">Calculated after confirmation</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#800020] pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>GHS {cartTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting}
                className="w-full bg-[#420010] text-white py-4 rounded-lg uppercase tracking-widest text-sm font-bold hover:bg-black transition-all shadow-lg flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Processing...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}