import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext"; 

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const greatVibes = Great_Vibes({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Akee-roi Collections | Luxury Footwear",
  description: "Elegant heels, sandals, and shoes for the sophisticated woman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${greatVibes.variable} bg-[#FDFBF7] text-gray-900`}>
        <CartProvider>
        <Navbar />  
          {children}
          <Footer />
          </CartProvider>
      </body>
    </html>
  );
}