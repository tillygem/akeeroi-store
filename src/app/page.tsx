import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import Newsletter from "@/components/Newsletter";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCollection />
      <Newsletter />
      <div className="grow">
      </div>
    </div>
  );
}