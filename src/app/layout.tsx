import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast"; 

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
          <Toaster 
            position="top-center" 
            toastOptions={{
              style: {
                background: '#333',
                color: '#fff',
              },
              success: {
                style: {
                  background: '#FDFBF7', 
                  color: '#800020',      
                  border: '1px solid #D4AF37', 
                  padding: '16px',
                },
                iconTheme: {
                  primary: '#D4AF37',
                  secondary: '#FDFBF7',
                },
              },
            }}
          />
          </CartProvider>
      </body>
    </html>
  );
}