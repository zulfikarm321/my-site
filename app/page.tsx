import { MarkdownRenderer } from "@/app/components/markdown";
import PostList from "@/app/components/PostList";
import { getAllPosts } from "./lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <MarkdownRenderer filePath="bio.md" />
      <hr className="my-10" />
      <h2 className="mb-5">My Latest Post</h2>
      <PostList posts={posts} perPage={5} />
    </>
  );
}
