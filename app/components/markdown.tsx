import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import "../styles/post.css";

interface MarkdownRendererProps {
  filePath: string;
}

export async function MarkdownRenderer({ filePath }: MarkdownRendererProps) {
  const fullPath = path.join(process.cwd(), "app/md", filePath);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <div className="post" dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}
