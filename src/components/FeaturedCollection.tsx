"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// MOCK DATA 
const PRODUCTS = [
  { id: 1, name: "Teal Knit Flat", price: 250, category: "flat", collection: "new", image: "/images/ak-250.jpeg" },
  { id: 2, name: "Brown Gem Slingback", price: 300, category: "flat", collection: "best", image: "/images/ak-300-10.jpeg" },
  { id: 3, name: "Bronze Mesh Mule", price: 400, category: "flat", collection: "luxury", image: "/images/ak-400.jpeg" },
  { id: 4, name: "Burgundy Gold Flat", price: 250, category: "flat", collection: "new", image: "/images/ak-250-18.jpeg" },
  { id: 5, name: "Noir Crystal Edition", price: 300, category: "flat", collection: "best", image: "/images/ak-300.jpeg" },
  { id: 6, name: "Cream Gold Slingback", price: 400, category: "flat", collection: "luxury", image: "/images/ak-400-12.jpeg" },
  { id: 7, name: "Pink Knit Comfort", price: 250, category: "flat", collection: "new", image: "/images/ak-250-15.jpeg" },
  { id: 8, name: "Midnight Sphere Flat", price: 300, category: "flat", collection: "best", image: "/images/ak-300-2.jpeg" },
];

export default function FeaturedCollection() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [filterType, setFilterType] = useState("all"); 

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-[#800020] mb-2">
          Curated Collection
        </h2>
        <p className="text-gray-500 text-sm uppercase tracking-widest">
          Find your perfect pair
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="relative flex flex-wrap justify-center gap-4 md:gap-8 mb-12 z-20">
        
        {/* COLLECTIONS DROPDOWN */}
        <div className="relative">
          <button 
            onClick={() => toggleDropdown("collection")}
            className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-800 hover:text-[#800020] transition-colors"
          >
            Collections <ChevronDown size={16} />
          </button>
          
          <AnimatePresence>
            {activeDropdown === "collection" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden z-30"
              >
                <div className="flex flex-col text-sm text-gray-600">
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Latest Arrivals</button>
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Best Sellers</button>
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Limited Edition</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* TYPE DROPDOWN */}
        <div className="relative">
          <button 
            onClick={() => toggleDropdown("type")}
            className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-800 hover:text-[#800020] transition-colors"
          >
            Type <ChevronDown size={16} />
          </button>
          
          <AnimatePresence>
            {activeDropdown === "type" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden z-30"
              >
                <div className="flex flex-col text-sm text-gray-600">
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">All Shoes</button>
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Flats & Sandals</button>
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Heels (Coming Soon)</button>
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Boots</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PRICE DROPDOWN */}
        <div className="relative">
          <button 
            onClick={() => toggleDropdown("price")}
            className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-800 hover:text-[#800020] transition-colors"
          >
            Price <ChevronDown size={16} />
          </button>
          
          <AnimatePresence>
            {activeDropdown === "price" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden z-30"
              >
                <div className="flex flex-col text-sm text-gray-600">
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Low (Under 250 GHS)</button>
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Medium (250 - 350 GHS)</button>
                  <button className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">High (400 GHS+)</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-8 max-w-7xl mx-auto">
        {PRODUCTS.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
            {/* IMAGE CARD */}
            <div className="relative w-full aspect-4/5 bg-gray-100 rounded-md overflow-hidden mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {product.price === 250 && (
                <div className="absolute top-2 left-2 bg-white/90 text-[10px] font-bold px-2 py-1 uppercase tracking-wider text-[#800020]">
                  New
                </div>
              )}
            </div>

            {/* PRODUCT INFO */}
            <div className="text-left">
              <h3 className="text-gray-900 font-medium text-sm md:text-base truncate group-hover:text-[#800020] transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                GHS {product.price.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* BROWSE ALL BUTTON */}
      <div className="mt-16 text-center">
        <Link href="/shop" className="inline-block border border-[#800020] text-[#800020] px-10 py-3 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#800020] hover:text-white transition-all">
          Browse All Products
        </Link>
      </div>

    </section>
  );
}