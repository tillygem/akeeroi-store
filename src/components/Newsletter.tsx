"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero-bg.png" 
          alt="Exclusive Access Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-xl px-6 text-center text-white">
        
        {status === "success" ? (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="text-[#D4AF37] w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-wide text-white">
              Welcome Aboard.
            </h2>
            <p className="text-gray-300 font-light">
              You've been added to our exclusive list. Check your email for a welcome gift.
            </p>
          </div>
        ) : (
          /* FORM STATE */
          <>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-wide">
              Unlock Exclusive Access
            </h2>
            
            <p className="text-gray-300 text-sm md:text-base mb-10 font-sans tracking-wide leading-relaxed">
              Be the first to know about new drops, limited editions, and private sales.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 md:gap-0 w-full">
              
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full md:flex-1 bg-transparent border-b border-white/50 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors text-center md:text-left"
              />

              {/* Gold Button */}
              <button 
                type="submit"
                disabled={status === "loading"}
                className="mt-6 md:mt-0 md:ml-4 flex items-center gap-2 text-[#D4AF37] hover:text-white uppercase tracking-widest text-xs font-bold transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <>
                    Join The Club
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </form>

            {status === "error" && (
              <p className="text-red-400 text-xs mt-4">Something went wrong. Please try again.</p>
            )}

            <p className="text-white/40 text-[10px] mt-6 uppercase tracking-widest">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}

      </div>
    </section>
  );
}