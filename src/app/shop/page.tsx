import { client } from "@/sanity/lib/client";
import ProductCard from "@/components/ProductCard";

// Fetch from Sanity ONLY
async function getSanityProducts() {
  const query = `
    *[_type == "product"] {
      "id": id, 
      name,
      price,
      category,
      "coverImage": coverImage.asset->url,
      "images": images[].asset->url,
      isNew
    }
  `;
  const products = await client.fetch(query);
  return products;
}

export default async function Shop() {
  const products = await getSanityProducts();

  return (
    <div className="min-h-screen bg-white pb-20">
      
      <div className="bg-[#800020] text-white pt-32 pb-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-serif mb-2">The Collection</h1>
        <p className="text-white/80 uppercase tracking-widest text-xs md:text-sm">
          Handcrafted Luxury for Her
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}