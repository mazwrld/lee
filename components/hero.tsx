"use client";

import fog from "@/assets/fog.jpeg";
import green from "@/assets/green.jpeg";
import hubble from "@/assets/hubble.jpeg";
import mars from "@/assets/mars.jpeg";
import range from "@/assets/range.jpeg";
import shine from "@/assets/shine.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [fog, green, hubble, mars, range, shine];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            key={currentImage}
            src={images[currentImage]!.src}
            alt="hero image"
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-1000"
          />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
