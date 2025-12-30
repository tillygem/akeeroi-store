"use client";

import { useState, useMemo, Suspense } from "react"; 
import { useSearchParams, useRouter } from "next/navigation"; 
import { Filter } from "lucide-react";
import { PRODUCTS } from "@/data/products"; 
import ProductCard from "@/components/ProductCard"; 

function ShopContent() {
  const searchParams = useSearchParams(); 
  const searchQuery = searchParams.get('q'); 
  const router = useRouter(); 

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("default");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // FILTERING LOGIC
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      
      // Filter by Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!product.name.toLowerCase().includes(query) && !product.category.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Filter by Category
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Filter by Price Range
      if (selectedPriceRange !== "all") {
        if (selectedPriceRange === "under-250") return product.price < 250;
        if (selectedPriceRange === "250-350") return product.price >= 250 && product.price <= 350;
        if (selectedPriceRange === "over-350") return product.price > 350;
      }

      return true;
    }).sort((a, b) => {
      // 3. Sorting
      if (sortOrder === "price-asc") return a.price - b.price;
      if (sortOrder === "price-desc") return b.price - a.price;
      return 0; 
    });
  }, [selectedCategory, selectedPriceRange, sortOrder, searchQuery]);

  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-24 pb-20">
      
      {/* HEADER */}
      <div className="bg-[#800020] text-white py-12 px-6 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-serif">
          {searchQuery ? `Results for "${searchQuery}"` : "The Collection"} 
        </h1>
        <p className="text-white/70 mt-2 font-light tracking-wide uppercase text-sm">
          {filteredProducts.length} Exclusive Pairs Found
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR FILTERS */}
        <aside className="hidden md:block w-64 shrink-0 space-y-8 sticky top-32 h-fit">
          
          {/* Categories */}
          <div>
            <h3 className="font-serif text-[#800020] text-lg mb-4 border-b border-[#D4AF37]/30 pb-2">Category</h3>
            <div className="flex flex-col space-y-3 text-gray-600">
              {["all", "flats", "heels", "sandals", "slippers"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left capitalize hover:text-[#800020] transition-colors ${selectedCategory === cat ? "font-bold text-[#800020]" : ""}`}
                >
                  {cat === "all" ? "View All" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="font-serif text-[#800020] text-lg mb-4 border-b border-[#D4AF37]/30 pb-2">Price</h3>
            <div className="flex flex-col space-y-3 text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer hover:text-[#800020]">
                <input type="radio" name="price" checked={selectedPriceRange === "all"} onChange={() => setSelectedPriceRange("all")} className="accent-[#800020]" />
                <span>All Prices</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-[#800020]">
                <input type="radio" name="price" checked={selectedPriceRange === "under-250"} onChange={() => setSelectedPriceRange("under-250")} className="accent-[#800020]" />
                <span>Under 250 GHS</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-[#800020]">
                <input type="radio" name="price" checked={selectedPriceRange === "250-350"} onChange={() => setSelectedPriceRange("250-350")} className="accent-[#800020]" />
                <span>250 - 350 GHS</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-[#800020]">
                <input type="radio" name="price" checked={selectedPriceRange === "over-350"} onChange={() => setSelectedPriceRange("over-350")} className="accent-[#800020]" />
                <span>Over 350 GHS</span>
              </label>
            </div>
          </div>
        </aside>

        {/* MOBILE FILTER TOGGLE */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <button 
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm uppercase tracking-wide"
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="relative">
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              className="appearance-none bg-transparent border-none text-sm font-medium focus:outline-none text-right pr-4"
            >
              <option value="default">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* MOBILE FILTER DRAWER */}
        {isMobileFilterOpen && (
          <div className="md:hidden bg-white p-6 rounded-lg shadow-xl mb-8 border border-[#D4AF37]/20">
             <h3 className="font-bold text-[#800020] mb-4">Category</h3>
             <div className="flex flex-wrap gap-2 mb-6">
                {["all", "flats", "heels", "sandals", "slippers"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setIsMobileFilterOpen(false); }}
                    className={`px-4 py-2 rounded-full text-xs uppercase border ${selectedCategory === cat ? "bg-[#800020] text-white border-[#800020]" : "border-gray-300 text-gray-600"}`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
             <h3 className="font-bold text-[#800020] mb-4">Price</h3>
             <div className="space-y-2">
                <button onClick={() => setSelectedPriceRange("all")} className={`block text-sm ${selectedPriceRange === "all" ? "text-[#800020] font-bold" : "text-gray-600"}`}>All Prices</button>
                <button onClick={() => setSelectedPriceRange("under-250")} className={`block text-sm ${selectedPriceRange === "under-250" ? "text-[#800020] font-bold" : "text-gray-600"}`}>Under 250 GHS</button>
                <button onClick={() => setSelectedPriceRange("250-350")} className={`block text-sm ${selectedPriceRange === "250-350" ? "text-[#800020] font-bold" : "text-gray-600"}`}>250 - 350 GHS</button>
                <button onClick={() => setSelectedPriceRange("over-350")} className={`block text-sm ${selectedPriceRange === "over-350" ? "text-[#800020] font-bold" : "text-gray-600"}`}>Over 350 GHS</button>
             </div>
          </div>
        )}

        {/* MAIN PRODUCT GRID */}
        <div className="flex-1">
          
          <div className="hidden md:flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
             <span className="text-gray-500 text-sm">Showing {filteredProducts.length} Products</span>
             <div className="flex items-center gap-2">
               <span className="text-sm text-gray-500">Sort by:</span>
               <select 
                  value={sortOrder} 
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
             </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 text-lg">
                  {searchQuery ? `No results found for "${searchQuery}".` : "No products found in this category."}
                </p>
                <button onClick={() => {setSelectedCategory("all"); setSelectedPriceRange("all"); router.push('/shop')}} className="text-[#800020] underline mt-2">Clear Filters</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FDFBF7] pt-32 flex justify-center">
        <p className="text-[#800020] animate-pulse">Loading Collection...</p>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}