"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation"; 
import { Star, Truck, ShieldCheck, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast"; 

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { addToCart } = useCart(); 

  const product = PRODUCTS.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FDFBF7]">
        <h2 className="text-2xl font-serif text-[#800020] mb-4">Product Not Found</h2>
        <Link href="/shop" className="text-sm underline text-gray-500">Back to Shop</Link>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.coverImage];

  const handleAddToCart = (checkoutImmediately = false) => {
    if (!selectedSize) {
      toast.error("Please select a size first", {
        style: {
          border: '1px solid #D4AF37',
          padding: '16px',
          color: '#800020',
        },
        iconTheme: {
          primary: '#D4AF37',
          secondary: '#FFFAEE',
        },
      });
      return;
    }

    // Add to Global Cart
    addToCart({
      id: `${product.id}-${selectedSize}-${currentImageIndex}`, 
      productId: product.id,
      name: product.name,
      price: product.price,
      image: images[currentImageIndex], 
      size: selectedSize,
      quantity: quantity,
    });

    if (checkoutImmediately) {
      router.push("/checkout"); 
    } else {
      // CUSTOM LUXURY TOAST 
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-[#FDFBF7] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-[#D4AF37]`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="shrink-0 pt-0.5">
                {/* Small thumbnail of the shoe added */}
                <div className="relative h-10 w-10 rounded-md overflow-hidden">
                  <Image
                    src={images[currentImageIndex]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-[#800020]">
                  Added to Cart
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {product.name} (Size {selectedSize})
                </p>
                <Link href="/checkout" className="mt-2 block text-xs font-bold text-[#D4AF37] hover:text-[#800020] uppercase tracking-wider">
                  View Bag →
                </Link>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#800020] hover:text-[#D4AF37] focus:outline-none"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ), { duration: 4000 });
    }
  };

  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* BREADCRUMB */}
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-8">
          <Link href="/shop" className="hover:text-[#800020]">Shop</Link> / 
          <span className="text-[#800020] ml-1 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: MAIN IMAGE DISPLAY */}
          <div className="space-y-4">
            <div className="relative w-full aspect-4/5 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
              <Image
                src={images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
               {product.price >= 400 && (
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-lg">
                  Luxury Edition
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: DETAILS & ACTIONS */}
          <div className="flex flex-col h-full">
            
            <h1 className="text-3xl md:text-4xl font-serif text-[#420010] mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="text-2xl font-light text-gray-900">
                GHS {product.price.toFixed(2)}
              </p>
              <div className="flex items-center gap-1 text-[#D4AF37] text-xs">
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <span className="text-gray-400 ml-1">(5.0)</span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 mb-8"></div>

            {/* DESCRIPTION */}
            <div className="mb-8">
               <p className="text-gray-600 font-light leading-relaxed">
                 Elevate your collection with the <strong>{product.name}</strong>. 
                 Sourced from the finest international collections, this {product.category} combines 
                 timeless aesthetics with modern comfort.
               </p>
            </div>

            {/* COLOR SELECTOR */}
            {images.length > 1 && (
              <div className="mb-8">
                <span className="text-sm font-bold uppercase tracking-wider text-[#420010] mb-3 block">
                  Select Style / Color
                </span>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-16 shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                        currentImageIndex === idx 
                          ? "border-[#800020] ring-1 ring-[#800020] opacity-100 scale-105" 
                          : "border-gray-200 opacity-70 hover:opacity-100 hover:border-[#800020]"
                      }`}
                    >
                      <Image src={img} alt={`Color ${idx}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SIZE SELECTOR */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                 <span className="text-sm font-bold uppercase tracking-wider text-[#420010]">Select Size (EU)</span>
                 <Link href="/size-guide" className="text-xs text-[#D4AF37] underline hover:text-[#800020]">Size Guide</Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {[37, 38, 39, 40, 41, 42].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all text-sm font-medium ${
                      selectedSize === size 
                        ? "bg-[#800020] text-white border-[#800020] shadow-lg scale-110" 
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#800020] hover:text-[#800020]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="flex items-center gap-4 mb-8">
               <span className="text-sm font-bold uppercase tracking-wider text-[#420010]">Quantity</span>
               <div className="flex items-center border border-gray-300 rounded-full w-max px-4 py-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-400 hover:text-[#800020]">
                    <Minus size={16} />
                  </button>
                  <span className="mx-4 w-4 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-[#800020]">
                    <Plus size={16} />
                  </button>
               </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-3 mb-10">
               {/* Add to Cart */}
               <button 
                  onClick={() => handleAddToCart(false)}
                  className="w-full bg-white border border-[#420010] text-[#420010] py-4 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-[#FDFBF7] transition-all"
               >
                 Add to Cart
               </button>

               {/* Buy Now */}
               <button 
                  onClick={() => handleAddToCart(true)}
                  className="w-full bg-[#420010] text-white py-4 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-black transition-all shadow-xl flex justify-center items-center gap-2"
               >
                 <ShoppingBag size={18} />
                 Checkout Now
               </button>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 bg-white p-4 rounded-lg border border-gray-100">
               <div className="flex items-center gap-3">
                  <Truck size={20} className="text-[#D4AF37]" />
                  <span>1-7 Day Delivery within Ghana</span>
               </div>
               <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-[#D4AF37]" />
                  <span>Quality Checked in Accra & Kumasi</span>
               </div>
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-32">
           <h2 className="text-2xl font-serif text-[#800020] mb-8 text-center">You May Also Love</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {PRODUCTS
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map(related => (
                  <Link href={`/product/${related.id}`} key={related.id} className="group">
                     <div className="relative w-full aspect-4/5 bg-gray-100 rounded-lg overflow-hidden mb-3">
                        <Image src={related.coverImage} alt={related.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <h3 className="text-sm font-medium text-gray-900 truncate group-hover:text-[#800020]">{related.name}</h3>
                     <p className="text-xs text-gray-500">GHS {related.price.toFixed(2)}</p>
                  </Link>
                ))
              }
           </div>
        </div>

      </div>
    </main>
  );
}