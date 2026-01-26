"use client";

import { useState } from "react";
import FolderPicker from "@/app/components/FolderPicker";
import GalleryGrid, { ImgItem } from "@/app/components/GalleryGrid";

export default function Page() {
  const [images, setImages] = useState<ImgItem[]>([]);
  const [selected, setSelected] = useState<ImgItem | null>(null);

  const handleFiles = (files: File[]) => {
    const imgs = files
      .filter((f) => f.type.startsWith("image/"))
      .map((f) => ({
        id: crypto.randomUUID(),
        name: f.name,
        url: URL.createObjectURL(f),
        file: f,
      }));
    setImages(imgs);
  };

  return (
    <main className="p-6">
      <div className="mb-4 flex gap-3">
        <FolderPicker onFiles={handleFiles} />
        {/* you can add FolderPickerFS here as alternative */}
      </div>

      <GalleryGrid images={images} onOpen={setSelected} />
    </main>
  );
}
