export interface Product {
  id: string;
  name: string;
  price: number;
  category: "heels" | "flats" | "sandals" | "slippers";
  coverImage: string;
  images?: string[]; 
  isNew?: boolean;
}

export const PRODUCTS: Product[] = [
  // --- CATEGORY: FLATS ---
  {
    id: "ak-200-grp1",
    name: "Classic Everyday Flat",
    price: 200,
    category: "flats",
    coverImage: "/images/ak-200-1.jpeg",
    images: ["/images/ak-200-1.jpeg", "/images/ak-200-2.jpeg", "/images/ak-200-3.jpeg"]
  },
  {
    id: "ak-200-grp2",
    name: "Vibrant Comfort Shoe",
    price: 200,
    category: "flats",
    coverImage: "/images/ak-200-5.jpeg",
    images: ["/images/ak-200-5.jpeg", "/images/ak-200-6.jpeg", "/images/ak-200-7.jpeg", "/images/ak-200-8.jpeg"]
  },
  {
    id: "ak-250-grp1",
    name: "Signature Slingback Flat",
    price: 250,
    category: "flats",
    coverImage: "/images/ak-250.jpeg",
    images: ["/images/ak-250.jpeg", "/images/ak-250-1.jpeg", "/images/ak-250-2.jpeg", "/images/ak-250-5.jpeg", "/images/ak-250-8.jpeg", "/images/ak-250-9.jpeg"]
  },
  {
    id: "ak-250-grp2",
    name: "Earth Tone Slingback",
    price: 250,
    category: "flats",
    coverImage: "/images/ak-250-3.jpeg",
    images: ["/images/ak-250-3.jpeg", "/images/ak-250-4.jpeg"]
  },
  {
    id: "ak-250-grp3",
    name: "Bold Slingback Flat",
    price: 250,
    category: "flats",
    coverImage: "/images/ak-250-10.jpeg",
    images: ["/images/ak-250-10.jpeg", "/images/ak-250-11.jpeg", "/images/ak-250-15.jpeg"]
  },
  {
    id: "ak-250-grp4",
    name: "Mesh Detail Flat",
    price: 250,
    category: "flats",
    coverImage: "/images/ak-250-43.jpeg",
    images: ["/images/ak-250-43.jpeg", "/images/ak-250-44.jpeg", "/images/ak-250-45.jpeg"]
  },
  {
    id: "ak-250-singles-1",
    name: "Chic Slingback Flat",
    price: 250,
    category: "flats",
    coverImage: "/images/ak-250-6.jpeg",
    images: ["/images/ak-250-6.jpeg", "/images/ak-250-7.jpeg"]
  },
  {
    id: "ak-250-singles-2",
    name: "Minimalist Slingback",
    price: 250,
    category: "flats",
    coverImage: "/images/ak-250-12.jpeg",
    images: ["/images/ak-250-12.jpeg", "/images/ak-250-13.jpeg", "/images/ak-250-14.jpeg"]
  },
  {
    id: "ak-300-grp1",
    name: "Vivid Slingback Flat",
    price: 300,
    category: "flats",
    coverImage: "/images/ak-300-4.jpeg",
    images: ["/images/ak-300-4.jpeg", "/images/ak-300-5.jpeg"]
  },
  {
    id: "ak-300-singles-flat",
    name: "Elegant Slingback",
    price: 300,
    category: "flats",
    coverImage: "/images/ak-300-6.jpeg",
    images: ["/images/ak-300-6.jpeg", "/images/ak-300-7.jpeg", "/images/ak-300-8.jpeg", "/images/ak-300-9.jpeg", "/images/ak-300-12.jpeg"]
  },
  {
    id: "ak-300-singles-new",
    name: "Classic Low Heel",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-40.jpeg",
    images: ["/images/ak-300-40.jpeg"] 
  },
  {
    id: "ak-350-grp-loafers",
    name: "Classic Loafer",
    price: 350,
    category: "flats",
    coverImage: "/images/ak-350-39.jpeg",
    images: ["/images/ak-350-39.jpeg", "/images/ak-350-40.jpeg", "/images/ak-350-41.jpeg", "/images/ak-350-42.jpeg", "/images/ak-350-43.jpeg"]
  },
  {
    id: "ak-350-grp-pointed",
    name: "Pointed Ballet Flat",
    price: 350,
    category: "flats",
    coverImage: "/images/ak-350-28.jpeg",
    images: ["/images/ak-350-28.jpeg", "/images/ak-350-29.jpeg", "/images/ak-350-30.jpeg", "/images/ak-350-31.jpeg", "/images/ak-350-32.jpeg", "/images/ak-350-33.jpeg", "/images/ak-350-34.jpeg"]
  },
  {
    id: "ak-350-singles-new",
    name: "Premium Comfort Heel",
    price: 350,
    category: "heels",
    coverImage: "/images/ak-350-46.jpeg",
    images: ["/images/ak-350-46.jpeg"] 
  },
  {
    id: "ak-400-grp-stones",
    name: "Crystal Embellished Flat",
    price: 400,
    category: "flats",
    coverImage: "/images/ak-400.jpeg",
    images: ["/images/ak-400.jpeg", "/images/ak-400-1.jpeg", "/images/ak-400-2.jpeg", "/images/ak-400-3.jpeg"]
  },
  {
    id: "ak-400-grp-designs",
    name: "Metallic Sheen Flat",
    price: 400,
    category: "flats",
    coverImage: "/images/ak-400-5.jpeg",
    images: ["/images/ak-400-5.jpeg", "/images/ak-400-6.jpeg", "/images/ak-400-7.jpeg", "/images/ak-400-14.jpeg", "/images/ak-400-21.jpeg"]
  },

  // --- CATEGORY: HEELS ---
  {
    id: "ak-300-grp-high",
    name: "Elevated Slingback",
    price: 300,
    category: "flats", // Kept as flats per original file
    coverImage: "/images/ak-300-10.jpeg",
    images: ["/images/ak-300-10.jpeg", "/images/ak-300-11.jpeg"]
  },
  {
    id: "ak-300-grp-block",
    name: "Low Block Heel",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-16.jpeg",
    images: ["/images/ak-300-16.jpeg", "/images/ak-300-17.jpeg", "/images/ak-300-18.jpeg"]
  },
  {
    id: "ak-300-grp-floral",
    name: "Floral Stiletto",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-20.jpeg",
    images: ["/images/ak-300-20.jpeg", "/images/ak-300-21.jpeg"]
  },
  {
    id: "ak-300-grp-kitten",
    name: "Kitten Heel Pump",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-25.jpeg",
    images: ["/images/ak-300-25.jpeg", "/images/ak-300-26.jpeg"]
  },
  {
    id: "ak-350-grp-kitten-sling",
    name: "Elegant Kitten Slingback",
    price: 350,
    category: "heels",
    coverImage: "/images/ak-350.jpeg",
    images: ["/images/ak-350.jpeg", "/images/ak-350-1.jpeg", "/images/ak-350-2.jpeg", "/images/ak-350-3.jpeg", "/images/ak-350-4.jpeg"]
  },
  {
    id: "ak-500-luxury",
    name: "Luxury Block Heel",
    price: 500,
    category: "heels",
    coverImage: "/images/ak-500.jpeg",
    images: ["/images/ak-500.jpeg"]
  },
  {
    id: "ak-500-high",
    name: "Statement High Heel",
    price: 500,
    category: "heels",
    coverImage: "/images/ak-500-1.jpeg",
    images: ["/images/ak-500-1.jpeg"]
  },
  {
    id: "ak-350-grp-pencil-block",
    name: "Pencil-Shoe Block Heel",
    price: 350,
    category: "heels",
    coverImage: "/images/ak-350-52.jpeg",
    images: ["/images/ak-350-52.jpeg", "/images/ak-350-53.jpeg", "/images/ak-350-54.jpeg", "/images/ak-350-55.jpeg"]
  },
  {
    id: "ak-300-grp-sling-block",
    name: "Classic Slingback Block Heel",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-41.jpeg",
    images: ["/images/ak-300-41.jpeg"]
  },
  // --- NEW HEELS ADDED HERE ---
  {
    id: "ak-300-double-sling",
    name: "Burgundy Double-Sling Heel",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-42.jpeg",
    images: ["/images/ak-300-42.jpeg"]
  },
  {
    id: "ak-300-glitter-block",
    name: "Glitter Block Heel",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-43.jpeg",
    images: ["/images/ak-300-43.jpeg", "/images/ak-300-44.jpeg", "/images/ak-300-45.jpeg", "/images/ak-300-46.jpeg"]
  },
  {
    id: "ak-300-bow-pencil",
    name: "Bow Pencil Heel",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-47.jpeg",
    images: ["/images/ak-300-47.jpeg", "/images/ak-300-48.jpeg"]
  },
  {
    id: "ak-300-pencil-sling",
    name: "Classic Pencil Slingback",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-49.jpeg",
    images: ["/images/ak-300-49.jpeg", "/images/ak-300-50.jpeg"]
  },
  {
    id: "ak-250-block-sling",
    name: "Modern Block Slingback",
    price: 250,
    category: "heels",
    coverImage: "/images/ak-250-55.jpeg",
    images: ["/images/ak-250-55.jpeg", "/images/ak-250-56.jpeg"]
  },
  {
    id: "ak-300-tiger-pencil",
    name: "Tiger Print Stiletto",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-52.jpeg",
    images: ["/images/ak-300-52.jpeg"]
  },
  {
    id: "ak-300-cotton-pencil",
    name: "Textured Black Stiletto",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-53.jpeg",
    images: ["/images/ak-300-53.jpeg"]
  },
  {
    id: "ak-300-glitter-chain",
    name: "Glitter Chain Stiletto",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-54.jpeg",
    images: ["/images/ak-300-54.jpeg"]
  },
  {
    id: "ak-300-front-strap",
    name: "Front-Strap Pencil Heel",
    price: 300,
    category: "heels",
    coverImage: "/images/ak-300-56.jpeg",
    images: ["/images/ak-300-56.jpeg", "/images/ak-300-57.jpeg"]
  },

  // --- CATEGORY: SANDALS ---
  {
    id: "ak-250-grp-sandal-1",
    name: "Essential Strap Sandal",
    price: 250,
    category: "sandals",
    coverImage: "/images/ak-250-16.jpeg",
    images: ["/images/ak-250-16.jpeg", "/images/ak-250-17.jpeg", "/images/ak-250-18.jpeg", "/images/ak-250-19.jpeg"]
  },
  {
    id: "ak-250-grp-sandal-2",
    name: "Monochrome Sandal",
    price: 250,
    category: "sandals",
    coverImage: "/images/ak-250-24.jpeg",
    images: ["/images/ak-250-24.jpeg", "/images/ak-250-25.jpeg"]
  },
  {
    id: "ak-370-grp-stones",
    name: "Jeweled Strap Sandal",
    price: 370,
    category: "sandals",
    coverImage: "/images/ak-370-1.jpeg",
    images: ["/images/ak-370-1.jpeg", "/images/ak-370-2.jpeg", "/images/ak-370-3.jpeg", "/images/ak-370-4.jpeg", "/images/ak-370-5.jpeg", "/images/ak-370-6.jpeg", "/images/ak-370-7.jpeg", "/images/ak-370-8.jpeg", "/images/ak-370-9.jpeg"]
  },
  {
    id: "ak-250-gold-glitter",
    name: "Gold Glitter Slingback Sandal",
    price: 250,
    category: "sandals",
    coverImage: "/images/ak-250-53.jpeg",
    images: ["/images/ak-250-53.jpeg"]
  },
  {
    id: "ak-250-elongated-glitter",
    name: "Elongated Glitter Sandal",
    price: 250,
    category: "sandals",
    coverImage: "/images/ak-250-54.jpeg",
    images: ["/images/ak-250-54.jpeg"]
  },
  {
    id: "ak-250-striped-sandal",
    name: "Striped Slingback Sandal",
    price: 250,
    category: "sandals",
    coverImage: "/images/ak-250-48.jpeg",
    images: ["/images/ak-250-48.jpeg", "/images/ak-250-49.jpeg", "/images/ak-250-50.jpeg", "/images/ak-250-51.jpeg"]
  },
  {
    id: "ak-350-luxe-glitter",
    name: "Luxe Glittering Sandal",
    price: 350,
    category: "sandals",
    coverImage: "/images/ak-350-47.jpeg",
    images: ["/images/ak-350-47.jpeg", "/images/ak-350-48.jpeg"]
  },
  // --- NEW SANDALS ADDED HERE ---
  {
    id: "ak-250-multi-brown",
    name: "Multi-Tone Brown Sandal",
    price: 250,
    category: "sandals",
    coverImage: "/images/ak-250-57.jpeg",
    images: ["/images/ak-250-57.jpeg"]
  },
  {
    id: "ak-300-print-sandal",
    name: "Brown Print Sandal",
    price: 300,
    category: "sandals",
    coverImage: "/images/ak-300-51.jpeg",
    images: ["/images/ak-300-51.jpeg"]
  },
  {
    id: "ak-300-black-red-sandal",
    name: "Bold Two-Tone Sandal",
    price: 300,
    category: "sandals",
    coverImage: "/images/ak-300-55.jpeg",
    images: ["/images/ak-300-55.jpeg"]
  },

  // --- CATEGORY: SLIPPERS ---
  {
    id: "ak-200-grp-net",
    name: "Breathable Net Mule",
    price: 200,
    category: "slippers",
    coverImage: "/images/ak-200-9.jpeg",
    images: ["/images/ak-200-9.jpeg", "/images/ak-200-10.jpeg", "/images/ak-200-11.jpeg", "/images/ak-200-12.jpeg"] 
  },
  {
    id: "ak-250-grp-slide",
    name: "Daily Comfort Slide",
    price: 250,
    category: "slippers",
    coverImage: "/images/ak-250-33.jpeg",
    images: ["/images/ak-250-33.jpeg", "/images/ak-250-34.jpeg"]
  },
  {
    id: "ak-300-grp-glossy",
    name: "Glossy Slide",
    price: 300,
    category: "slippers",
    coverImage: "/images/ak-300-36.jpeg",
    images: ["/images/ak-300-36.jpeg", "/images/ak-300-37.jpeg"]
  },
  {
    id: "ak-350-grp-pastel",
    name: "Pastel Comfort Slide",
    price: 350,
    category: "slippers",
    coverImage: "/images/ak-350-21.jpeg",
    images: ["/images/ak-350-21.jpeg", "/images/ak-350-22.jpeg", "/images/ak-350-23.jpeg", "/images/ak-350-24.jpeg", "/images/ak-350-25.jpeg", "/images/ak-350-49.jpeg", "/images/ak-350-50.jpeg", "/images/ak-350-51.jpeg"]
  },
  {
    id: "ak-250-pearl-slipper",
    name: "Pearl Embellished Slipper",
    price: 250,
    category: "slippers",
    coverImage: "/images/ak-250-52.jpeg",
    images: ["/images/ak-250-52.jpeg"]
  }
];