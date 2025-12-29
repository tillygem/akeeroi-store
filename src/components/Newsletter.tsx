"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
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
        
        <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-wide">
          Unlock Exclusive Access
        </h2>
        
        <p className="text-gray-300 text-sm md:text-base mb-10 font-sans tracking-wide leading-relaxed">
          Be the first to know about new drops, limited editions, and private sales.
        </p>

        {/* FORM */}
        <form className="flex flex-col md:flex-row items-center gap-4 md:gap-0 w-full">
          
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full md:flex-1 bg-transparent border-b border-white/50 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors text-center md:text-left"
          />

          {/* Gold Button */}
          <button 
            type="submit"
            className="mt-6 md:mt-0 md:ml-4 flex items-center gap-2 text-[#D4AF37] hover:text-white uppercase tracking-widest text-xs font-bold transition-colors group"
          >
            Join The Club
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

        </form>

        <p className="text-white/40 text-[10px] mt-6 uppercase tracking-widest">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}