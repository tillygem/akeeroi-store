"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/data/products"; // <--- Import Real Data
import ProductCard from "@/components/ProductCard"; // <--- Import Smart Card

export default function FeaturedCollection() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Select 8 specific "Hero" products to display on the homepage
  // You can change these IDs to whichever ones you want to feature!
  const FEATURED_ITEMS = [
    "ak-250-grp1",       // Signature Slingback
    "ak-300-grp-high",   // Heel
    "ak-200-grp1",       // Classic Flat
    "ak-400-grp-stones", // Luxury Stone Flat
    "ak-350-grp-loafers",// Loafer
    "ak-300-grp-floral", // Floral Heel
    "ak-250-grp-sandal-1", // Sandal
    "ak-350-grp-kitten-sling" // Kitten Heel
  ];

  // Filter the full list to get only these 8 items
  const displayProducts = PRODUCTS.filter(p => FEATURED_ITEMS.includes(p.id));

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

      {/* FILTER BAR (Visual Navigation) */}
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
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Latest Arrivals</Link>
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Best Sellers</Link>
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Limited Edition</Link>
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
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">All Shoes</Link>
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Flats & Sandals</Link>
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Heels</Link>
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
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Low (Under 250 GHS)</Link>
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">Medium (250 - 350 GHS)</Link>
                  <Link href="/shop" className="px-4 py-3 text-left hover:bg-gray-50 hover:text-[#800020]">High (400 GHS+)</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* REAL PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 max-w-7xl mx-auto">
        {displayProducts.map((product) => (
          // Using the Smart Component here ensures Swiping & Links work perfectly!
          <ProductCard key={product.id} product={product} />
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