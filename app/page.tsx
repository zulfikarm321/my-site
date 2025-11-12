import { MarkdownRenderer } from "@/app/components/markdown";
import PostList from "@/app/components/PostList";

export default function Home() {
  return (
    <>
      <MarkdownRenderer filePath="bio.md" />
      <hr className="my-10" />
      <h2 className="mb-5">My Latest Post</h2>
      <PostList />
    </>
  );
}
