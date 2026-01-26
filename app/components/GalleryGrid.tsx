export type ImgItem = { id: string; name: string; url: string; file?: File };

export default function GalleryGrid({
  images,
  onOpen,
}: {
  images: ImgItem[];
  onOpen: (img: ImgItem) => void;
}) {
  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {images.map((img) => (
        <div
          key={img.id}
          className="relative cursor-pointer"
          onClick={() => onOpen(img)}>
          <img
            src={img.url}
            alt={img.name}
            className="w-full h-40 object-cover rounded"
          />
        </div>
      ))}
    </div>
  );
}
