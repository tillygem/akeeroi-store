"use client";

import Link from "next/link";
import Image from "next/image"; 
import { Mail, MapPin, ArrowUp } from "lucide-react";

const TikTokIcon = ({ size = 20, color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color}
    className="transition-colors"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-linear-to-b from-[#420010] to-[#250005] text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* LUXURY WATERMARK */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03]">
        <h1 className="text-[18vw] font-serif font-bold text-white tracking-widest leading-none whitespace-nowrap">
          AKEE-ROI
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* FOOTER GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mb-20">
          
          {/* COLUMN 1: Brand Identity */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start space-y-6">
             <Link href="/" className="group">
              <div className="flex flex-col">
                <span className="font-serif text-3xl md:text-4xl text-white tracking-widest uppercase hover:text-[#D4AF37] transition-colors">
                  Akee-roi
                </span>
                <span className="text-[#D4AF37] text-xs font-sans tracking-[0.3em] uppercase mt-1">
                  Collections
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
              Elevating your stride with handcrafted elegance. Designed for the woman who commands the room.
            </p>
          </div>

          {/* COLUMN 2: Explore */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg text-[#D4AF37] tracking-widest uppercase border-b border-[#D4AF37]/20 pb-2 inline-block">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li><Link href="/shop" className="hover:text-white hover:translate-x-1 transition-all inline-block">New Arrivals</Link></li>
              <li><Link href="/shop?cat=flats" className="hover:text-white hover:translate-x-1 transition-all inline-block">Signature Flats</Link></li>
              <li><Link href="/shop?cat=heels" className="hover:text-white hover:translate-x-1 transition-all inline-block">Luxury Heels</Link></li>
              <li><Link href="/brand" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Story</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Assistance */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg text-[#D4AF37] tracking-widest uppercase border-b border-[#D4AF37]/20 pb-2 inline-block">
              Assistance
            </h3>
            <ul className="space-y-3 text-sm text-white/70 font-light">
             <li><Link href="/shipping-delivery" className="hover:text-white hover:translate-x-1 transition-all inline-block">Shipping & Delivery</Link></li>
             <li><Link href="/returns-exchanges" className="hover:text-white hover:translate-x-1 transition-all inline-block">Returns & Exchanges</Link></li>
             <li><Link href="/size-guide" className="hover:text-white hover:translate-x-1 transition-all inline-block">Size Guide</Link></li>
             <li><Link href="/faqs" className="hover:text-white hover:translate-x-1 transition-all inline-block">FAQs</Link></li>
            </ul>
           </div>

            {/* COLUMN 4: Connect */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <h3 className="font-serif text-lg text-[#D4AF37] tracking-widest uppercase border-b border-[#D4AF37]/20 pb-2 inline-block">
              Connect
            </h3>
            
            <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3 text-white/70 text-sm font-light">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Accra, Ghana</span>
                </div>

                {/* Email */}
                <a 
                href="mailto:akeeroicollections@gmail.com" 
                className="flex items-start gap-3 text-white/70 text-sm font-light hover:text-white transition-colors"
                >
                <Mail size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="break-all">akeeroicollections@gmail.com</span>
                </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex gap-4">
              <a 
                href="https://www.tiktok.com/@akeeroicollection?_r=1&_t=ZN-92ZnjEyVVBK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#420010] transition-all duration-300"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-light uppercase tracking-wider">
          
          <p>&copy; {new Date().getFullYear()} Akee-roi Collections.</p>
          
          <div className="flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500">
             
             {/* Visa */}
             <div className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity cursor-help" title="Secure Payment">
                <Image 
                  src="/images/visa.png" 
                  alt="Visa" 
                  width={40} 
                  height={24} 
                  className="object-contain h-full w-auto" 
                />
             </div>
             
             {/* Mastercard */}
             <div className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity cursor-help" title="Secure Payment">
                <Image 
                  src="/images/mastercard.png" 
                  alt="Mastercard" 
                  width={40} 
                  height={24} 
                  className="object-contain h-full w-auto" 
                />
             </div>
             
             {/* MoMo */}
             <div className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity cursor-help" title="Secure Payment">
                <Image 
                  src="/images/momo.png" 
                  alt="MoMo" 
                  width={40} 
                  height={24} 
                  className="object-contain h-full w-auto" 
                />
             </div>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            Back to Top 
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}