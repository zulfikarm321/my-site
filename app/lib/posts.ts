import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
}

const postsDir = path.join(process.cwd(), "app/md/posts");

/** Ambil semua file markdown + metadata-nya */
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      const fullPath = path.join(postsDir, file);
      const content = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(content);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "Unknown date",
      };
    });

  // Urutkan berdasarkan tanggal (terbaru dulu)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
