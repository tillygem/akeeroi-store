"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react"; 

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/shoes.png" 
          alt="Luxury Heels Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 pt-28">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs md:text-base mb-3 block">
            New Collection 2025
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none mb-5 drop-shadow-lg">
            Walk in <br />
            <span className="italic">Luxury.</span>
          </h1>
          
          <p className="text-gray-200 text-base md:text-2xl font-sans leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover the finest selection of handcrafted heels designed for the woman who commands the room.
          </p>
          
          <div className="flex flex-row gap-4 justify-center pb-4 items-center">
            
            <Link href="/shop" className="group flex items-center justify-center gap-2 bg-[#800020] text-white px-6 py-3 rounded-full text-base font-medium transition-all hover:bg-[#6b001b] shadow-xl hover:shadow-[#800020]/40">
              <ShoppingBag size={18} />
              Shop
            </Link>
            
            <Link href="/brand" className="group flex items-center justify-center gap-2 border border-white/50 text-white px-6 py-3 rounded-full text-base font-medium transition-all hover:bg-white hover:text-[#800020]">
              Brand
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}