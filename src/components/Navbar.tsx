"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { ShoppingCart, Search, Menu, X, Home, HelpCircle, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext"; 

const TikTokIcon = ({ size = 20, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Navbar() {
  const router = useRouter(); // Initialize Router
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for Search Bar
  const [searchQuery, setSearchQuery] = useState(""); 
  const { cartCount } = useCart(); 

  // Handle Search Submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false); 
      setIsOpen(false); 
      router.push(`/shop?q=${encodeURIComponent(searchQuery)}`); 
      setSearchQuery(""); 
    }
  };

  return (
    <>
      <nav className="absolute top-4 md:top-6 left-0 right-0 mx-auto w-[95%] max-w-6xl z-50">
        
        <div className="bg-[#800020]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-2xl rounded-full px-6 md:px-8 relative overflow-hidden">
          
          <div className="flex justify-between items-center h-14">
            
            {!isSearchOpen ? (
              <>
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
                  {/* Search Trigger */}
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="text-white/90 hover:text-[#D4AF37] transition-colors"
                  >
                    <Search strokeWidth={1.5} size={20} />
                  </button>

                  <Link href="/checkout" className="relative cursor-pointer text-white/90 hover:text-[#D4AF37] transition-colors">
                    <ShoppingCart strokeWidth={1.5} size={20} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-2 bg-[#D4AF37] text-[#800020] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
                        {cartCount}
                      </span>
                    )}
                  </Link>

                  <button 
                    className="md:hidden text-white hover:text-[#D4AF37] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
                  </button>
                </div>
              </>
            ) : (
              /* SEARCH BAR OVERLAY */
              <motion.form 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full flex items-center gap-4"
                onSubmit={handleSearch}
              >
                <Search className="text-[#D4AF37] w-5 h-5 shrink-0" />
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search for shoes..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none text-white placeholder-white/50 focus:outline-none text-sm md:text-base font-medium"
                />
                <button 
                  type="button" 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-white/70 hover:text-white"
                >
                  <X size={20} />
                </button>
              </motion.form>
            )}

          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isOpen && !isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="md:hidden mt-3 bg-[#800020]/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl origin-top"
            >
              <div className="px-6 py-8 flex flex-col items-center text-center space-y-6">
                
                {/* Navigation Links */}
                <div className="flex flex-col gap-4 w-full">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 text-sm font-medium text-white hover:text-[#D4AF37] tracking-widest uppercase py-2">
                    <Home size={16} /> Home
                  </Link>
                  <Link href="/shop" onClick={() => setIsOpen(false)} className="text-sm font-medium text-white hover:text-[#D4AF37] tracking-widest uppercase py-2">
                    Shop Collection
                  </Link>
                  <Link href="/brand" onClick={() => setIsOpen(false)} className="text-sm font-medium text-white hover:text-[#D4AF37] tracking-widest uppercase py-2">
                    Our Brand
                  </Link>
                  <Link href="/faqs" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 text-sm font-medium text-white hover:text-[#D4AF37] tracking-widest uppercase py-2">
                    <HelpCircle size={16} /> FAQs
                  </Link>
                </div>

                {/* Divider */}
                <div className="w-16 h-px bg-[#D4AF37]/30"></div>

                {/* Contact Info */}
                <div className="space-y-3 text-white/70 text-xs font-light tracking-wide">
                   <div className="flex items-center justify-center gap-2">
                      <MapPin size={14} className="text-[#D4AF37]" />
                      <span>Accra & Kumasi, Ghana</span>
                   </div>
                   <div className="flex items-center justify-center gap-2">
                      <Mail size={14} className="text-[#D4AF37]" />
                      <a href="mailto:akeeroicollections@gmail.com" className="hover:text-white">akeeroicollections@gmail.com</a>
                   </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-5 pt-2">
                   <a href="https://www.tiktok.com/@akeeroicollection?_r=1&_t=ZN-92ZnjEyVVBK" target="_blank" className="text-white hover:text-[#D4AF37] transition-transform hover:scale-110">
                     <TikTokIcon size={22} />
                   </a>
                   <a href="https://www.instagram.com/akee_roi_?igsh=MTQ0YWZrNXN1czM0YQ==" target="_blank" className="text-white hover:text-[#D4AF37] transition-transform hover:scale-110">
                     <Instagram size={22} />
                   </a>
                   <a href="https://wa.me/233243449961" target="_blank" className="text-white hover:text-[#D4AF37] transition-transform hover:scale-110">
                     <Phone size={22} />
                   </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}