import GalleryModal from "@/app/components/GalleryModal";
import Image from "next/image";

const images = [
  {
    src: "/gallery/image-1.webp",
    alt: "Sunset over the hills",
  },
  {
    src: "/gallery/image-2.webp",
    alt: "City skyline at night",
  },
  {
    src: "/gallery/image-3.webp",
    alt: "Forest trail in autumn",
  },
  {
    src: "/gallery/image-4.webp",
    alt: "Mountain peak with clouds",
  },
];

export default function GalleryPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6 text-center">Gallery</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        A small collection of still moments — pieces of time I wanted to keep.
      </p>

      <GalleryModal images={images} />
    </>
  );
}
