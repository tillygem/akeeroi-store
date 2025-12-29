export default function SizeGuide() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#800020] mb-6">
          Find Your Perfect Fit
        </h1>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Our shoes are true to size. Use the chart below to convert your size. If you have a wider foot, we recommend sizing up for maximum comfort.
        </p>

        {/* The Size Table */}
        <div className="overflow-x-auto bg-white shadow-xl rounded-xl border border-[#D4AF37]/20">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-[#800020] text-white">
                <th className="py-5 px-4 font-serif text-lg tracking-widest border-r border-white/20">EU (Akee-roi)</th>
                <th className="py-5 px-4 font-serif text-lg tracking-widest border-r border-white/20">UK</th>
                <th className="py-5 px-4 font-serif text-lg tracking-widest border-r border-white/20">US</th>
                <th className="py-5 px-4 font-serif text-lg tracking-widest">CM (Approx)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* Row 37 */}
              <tr className="border-b border-gray-100 hover:bg-[#FDFBF7] transition-colors">
                <td className="py-4 font-bold text-[#800020]">37</td>
                <td className="py-4">4</td>
                <td className="py-4">6</td>
                <td className="py-4">23.5</td>
              </tr>
              {/* Row 38 */}
              <tr className="border-b border-gray-100 hover:bg-[#FDFBF7] transition-colors">
                <td className="py-4 font-bold text-[#800020]">38</td>
                <td className="py-4">5</td>
                <td className="py-4">7</td>
                <td className="py-4">24.0</td>
              </tr>
              {/* Row 39 */}
              <tr className="border-b border-gray-100 hover:bg-[#FDFBF7] transition-colors">
                <td className="py-4 font-bold text-[#800020]">39</td>
                <td className="py-4">6</td>
                <td className="py-4">8</td>
                <td className="py-4">24.5</td>
              </tr>
              {/* Row 40 */}
              <tr className="border-b border-gray-100 hover:bg-[#FDFBF7] transition-colors">
                <td className="py-4 font-bold text-[#800020]">40</td>
                <td className="py-4">7</td>
                <td className="py-4">9</td>
                <td className="py-4">25.0</td>
              </tr>
              {/* Row 41 */}
              <tr className="border-b border-gray-100 hover:bg-[#FDFBF7] transition-colors">
                <td className="py-4 font-bold text-[#800020]">41</td>
                <td className="py-4">8</td>
                <td className="py-4">10</td>
                <td className="py-4">26.0</td>
              </tr>
              {/* Row 42 */}
              <tr className="hover:bg-[#FDFBF7] transition-colors">
                <td className="py-4 font-bold text-[#800020]">42</td>
                <td className="py-4">9</td>
                <td className="py-4">11</td>
                <td className="py-4">26.5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 p-6 border border-dashed border-[#800020]/30 rounded-lg inline-block">
          <h3 className="text-[#800020] font-bold uppercase text-sm mb-2">Still unsure?</h3>
          <p className="text-sm text-gray-500">
            Contact us on WhatsApp or Email, and we will help you choose the right size.
          </p>
        </div>

      </div>
    </section>
  );
}