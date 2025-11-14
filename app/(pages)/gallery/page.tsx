import GalleryModal from "@/app/components/GalleryModal";
import images from "@/app/lib/gallery-images";

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
