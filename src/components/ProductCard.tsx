"use client";

import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 

  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.coverImage];

  // Auto-scroll logic
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setCurrentImageIndex(index);
  };

  return (
    <Link 
      href={`/product/${product.id}`} 
      className="group block"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* IMAGE CONTAINER */}
      <div className="relative w-full aspect-4/5 bg-gray-100 rounded-lg overflow-hidden mb-4">
        
        {/* Main Image */}
        <Image
          src={images[currentImageIndex]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* SWIPE ARROWS (Only show if multiple images exist) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full text-[#800020] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full text-[#800020] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* LUXURY TAG (For items 400+) */}
        {product.price >= 400 && (
          <div className="absolute top-2 right-2 bg-[#D4AF37] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
            Luxury
          </div>
        )}

        {/* SIZE BADGE (Bottom Left Overlay) */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-gray-600 uppercase tracking-wide z-10">
          Size 37 - 42
        </div>
      </div>

      {/* DETAILS */}
      <div className="text-left space-y-1">
        <p className="text-xs text-gray-400 uppercase tracking-widest">{product.category}</p>
        
        <h3 className="text-gray-900 font-medium text-sm md:text-base truncate group-hover:text-[#800020] transition-colors">
          {product.name}
        </h3>
        
        <div className="flex justify-between items-end">
          <p className="text-gray-800 font-semibold text-sm">
            GHS {product.price.toFixed(2)}
          </p>

          {/* COLOR DOTS INDICATOR */}
          {images.length > 1 && (
            <div className="flex gap-1">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => selectImage(e, idx)}
                  className={`w-2.5 h-2.5 rounded-full border border-gray-300 transition-all ${
                    currentImageIndex === idx ? "bg-[#800020] scale-110" : "bg-gray-200 hover:bg-gray-400"
                  }`}
                  aria-label={`Select color ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}