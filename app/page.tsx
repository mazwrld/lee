import background from "@/assets/mars.jpeg";
import TransparentCard from "@/components/card";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden">
      <Image src={background} fill alt="hero image" className="object-cover" />
      <div className="absolute bottom-20 left-20">
        <TransparentCard />
      </div>
    </main>
  );
}
