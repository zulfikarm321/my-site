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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
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
    </>
  );
}
