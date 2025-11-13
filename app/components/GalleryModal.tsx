"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function GalleryModal({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setSelected(img.src)}>
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <Image
              src={selected}
              alt="Selected photo"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg object-contain w-full max-h-[80vh] mx-auto"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-15 right-3 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full backdrop-blur-sm transition text-center"
              aria-label="Close">
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
