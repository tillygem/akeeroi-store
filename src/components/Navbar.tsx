"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-4 md:top-6 left-0 right-0 mx-auto w-[95%] max-w-6xl z-50">
        
        <div className="bg-[#800020]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-2xl rounded-full px-6 md:px-8">
          
          <div className="flex justify-between items-center h-14">
            
            {/* LEFT: BRAND LOGO */}
            <Link href="/" className="flex flex-col items-start group">
              <span className="font-serif text-lg md:text-xl text-white font-bold tracking-wide leading-none group-hover:text-[#D4AF37] transition-colors">
                Akee-roi
              </span>
              <span className="font-script text-[#D4AF37] text-sm md:text-base -mt-1 ml-1 group-hover:text-white transition-colors">
                Collections
              </span>
            </Link>

            <div className="hidden md:flex space-x-12 items-center">
              <Link href="/shop" className="text-white/90 hover:text-[#D4AF37] font-medium tracking-widest uppercase text-xs md:text-sm transition-colors relative group">
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/brand" className="text-white/90 hover:text-[#D4AF37] font-medium tracking-widest uppercase text-xs md:text-sm transition-colors relative group">
                Brand
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
              </Link>
            </div>

            {/* RIGHT: ICONS */}
            <div className="flex items-center space-x-5">
              <button className="text-white/90 hover:text-[#D4AF37] transition-colors">
                <Search strokeWidth={1.5} size={20} />
              </button>

              <div className="relative cursor-pointer text-white/90 hover:text-[#D4AF37] transition-colors">
                <ShoppingCart strokeWidth={1.5} size={20} />
                <span className="absolute -top-1 -right-2 bg-[#D4AF37] text-[#800020] text-[10px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>

              {/* Hamburger (Mobile) */}
              <button 
                className="md:hidden text-white hover:text-[#D4AF37] focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 bg-[#800020]/95 backdrop-blur-md border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="px-4 py-4 space-y-3 flex flex-col items-center">
                <Link 
                  href="/shop" 
                  className="text-sm font-medium text-white hover:text-[#D4AF37] tracking-widest uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
                <div className="w-8 h-px bg-[#D4AF37]/30"></div>
                <Link 
                  href="/brand" 
                  className="text-sm font-medium text-white hover:text-[#D4AF37] tracking-widest uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  Brand
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}