import TransparentCard from "@/components/card";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden">
      <Hero />
      <div className="absolute bottom-20 left-20">
        <TransparentCard />
      </div>
    </main>
  );
}
