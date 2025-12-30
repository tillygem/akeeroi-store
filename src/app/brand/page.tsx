import Image from "next/image";
import { Gem, Hammer, HeartHandshake } from "lucide-react"; 

export default function BrandPage() {
  return (
    <main className="bg-[#FDFBF7]">
      
      {/* 1. BRAND HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/brand-hero.png" 
          alt="Akee-roi Brand Essence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#420010]/60" /> 
        
        <div className="relative z-10 text-center text-white px-6 pt-20">
          <span className="block text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-4">
            The Story
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-wide mb-6">
            Command Every Room.
          </h1>
          <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
        </div>
      </section>


      {/* 2. THE NARRATIVE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative h-125 w-full rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/ak-300-1.jpeg"
              alt="Global Sourcing"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl font-serif text-[#800020] mb-8 leading-tight">
              Sourced from the Finest. <br />
              <span className="italic text-[#D4AF37]">Curated for You.</span>
            </h2>
            <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
              <p>
                Akee-roi Collections is built on a simple promise: exceptional quality without compromise. We scour the globe to source footwear from the finest international collections, selecting only pieces that meet our rigorous standards for craftsmanship and style.
              </p>
              <p>
                Made from high-quality materials and designed for lasting comfort, our selections are more than just shoes—they are an investment in your confidence. We bring global luxury and timeless elegance directly to your doorstep in Accra.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 3. OUR PHILOSOPHY */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#800020] uppercase tracking-widest mb-4">
              The Akee-roi Standard
            </h2>
             <p className="text-gray-500 max-w-xl mx-auto">
                We believe luxury isn't defined by a price tag, but by the feeling it gives you.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Hammer size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#800020]">Premium Materials</h3>
              <p className="text-gray-600 font-light">
                Every pair is chosen for its superior material quality and finish, ensuring you walk with both comfort and durability.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Gem size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#800020]">Accessible Luxury</h3>
              <p className="text-gray-600 font-light">
                Our mission is to democratize elegance. We bring you high-end aesthetics without the traditional luxury markup.
              </p>
            </div>

             {/* Feature 3 */}
             <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <HeartHandshake size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#800020]">Confidence In Every Step</h3>
              <p className="text-gray-600 font-light">
                We curate footwear that empowers. When you wear Akee-roi, you don't just walk; you arrive.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 4. VISUAL MOODBOARD */}
      <section className="py-24 px-4 bg-[#FDFBF7]">
         <div className="text-center mb-12">
            <h2 className="text-2xl font-serif text-[#800020] uppercase tracking-widest">
              The Aesthetic
            </h2>
             <a href="https://www.tiktok.com/@akeeroicollection" target="_blank" className="text-[#D4AF37] text-sm hover:underline mt-2 inline-block">
                @akeeroicollections
             </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
             <div className="relative aspect-square group overflow-hidden rounded-lg">
               <Image src="/images/brand-ig-1.png" alt="Moodboard 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
             </div>
             <div className="relative aspect-square group overflow-hidden rounded-lg">
               <Image src="/images/brand-ig-2.png" alt="Moodboard 2" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
             </div>
             <div className="relative aspect-square group overflow-hidden rounded-lg">
               <Image src="/images/brand-ig-3.png" alt="Moodboard 3" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
             </div>
             <div className="relative aspect-square group overflow-hidden rounded-lg">
               <Image src="/images/brand-ig-4.png" alt="Moodboard 4" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
             </div>
          </div>
      </section>

    </main>
  );
}