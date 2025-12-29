export default function ReturnsExchanges() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#800020] mb-8 text-center">
          Returns & Exchanges
        </h1>
        <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-16"></div>

        <div className="space-y-10 text-gray-800 font-light leading-relaxed">
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#D4AF37]/20">
            <h2 className="text-lg font-bold text-[#800020] mb-4 uppercase tracking-wide">Our Policy</h2>
            <p className="mb-4">
              At Akee-roi Collections, we uphold the highest standards of quality. 
              <strong> We do not offer returns or exchanges for change of mind, wrong size selection, or color preference.</strong>
            </p>
            <p>
              We strongly advise all customers to review our <a href="/size-guide" className="text-[#D4AF37] underline underline-offset-4 hover:text-[#800020]">Size Guide</a> carefully and verify their order details before completing a purchase.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-[#800020] mb-3 uppercase tracking-widest">Defective Items</h2>
            <p>
              We inspect every pair before it leaves our boutique. However, in the rare event that you receive a defective item:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
              <li>Please inspect your package <strong>immediately upon delivery</strong> while the dispatch rider is present.</li>
              <li>If you notice a defect, please hand the item back to the dispatch rider instantly.</li>
              <li>Once the rider leaves, we cannot accept any claims regarding defects or damages.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}