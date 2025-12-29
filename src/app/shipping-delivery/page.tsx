export default function ShippingDelivery() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-serif text-[#800020] mb-8 text-center">
          Shipping & Delivery
        </h1>
        <p className="text-gray-500 text-center mb-16 italic font-serif">
          Bringing luxury directly to your doorstep.
        </p>

        {/* Content */}
        <div className="space-y-12 text-gray-800 font-light leading-relaxed">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-medium text-[#800020] mb-3 uppercase tracking-widest">Standard Delivery</h2>
            <p>
              We process and ship orders with the utmost care. For standard orders within Ghana, please allow <strong>1 to 7 business days</strong> for your handcrafted pieces to arrive. We partner with trusted courier services to ensure your items are handled safely.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-medium text-[#800020] mb-3 uppercase tracking-widest">Same-Day Delivery</h2>
            <p>
              Need it for tonight? Same-day delivery is available for orders placed before <strong>12:00 PM</strong> within the <strong>Accra Metropolis</strong>. Please select "Express Delivery" at checkout or contact our support team to expedite your order.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-medium text-[#800020] mb-3 uppercase tracking-widest">Delivery Fees</h2>
            <p>
              Delivery charges vary depending on your specific location and the size of your order. The final shipping cost will be calculated at checkout before payment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}