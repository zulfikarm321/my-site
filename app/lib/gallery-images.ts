import fs from "fs";
import path from "path";

const galleryDir = path.join(process.cwd(), "public/gallery");

// ambil file-file yang ada
const files = fs.readdirSync(galleryDir);

// filter biar cuma ambil file image aja
const images = files
  .filter((file) => file.match(/\.(png|jpg|jpeg|webp|gif)$/i))
  .map((file) => ({
    src: `/gallery/${file}`,
    alt: file.replace(/\.(png|jpg|jpeg|webp|gif)$/i, ""), // jadikan nama file sebagai alt
  }));

export default images;
