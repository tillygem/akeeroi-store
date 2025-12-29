"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ_DATA = [
  {
    question: "How long does delivery take?",
    answer: "Standard delivery within Ghana typically takes between 1 to 7 business days. For orders within Accra, same-day delivery is available if ordered before 12:00 PM."
  },
  {
    question: "Can I return my order if it doesn't fit?",
    answer: "Currently, we do not accept returns or exchanges for sizing issues. We highly recommend consulting our Size Guide before purchasing. If you are unsure, our team is happy to assist you."
  },
  {
    question: "Do you ship internationally?",
    answer: "We currently ship throughout Ghana. For international inquiries, please contact our support team directly via email to discuss potential shipping arrangements."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major mobile money networks (MTN Momo, Vodafone Cash, AirtelTigo) as well as Visa and Mastercard payments."
  },
  {
    question: "Can I pick up my order in person?",
    answer: "We are primarily an online boutique. However, arrangements can sometimes be made for pickups in Accra. Please contact us immediately after ordering if you prefer this option."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-32 pb-20 px-6 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-2xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#800020] mb-12 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#D4AF37]/30 rounded-lg bg-white overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-[#800020] text-lg">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-[#D4AF37]" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}