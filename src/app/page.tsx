import Hero from "@/components/hero/hero";
import ItemsGrid from "@/components/items/itemsGrid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <ItemsGrid />
    </div>
  );
}
