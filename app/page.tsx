import { MarkdownRenderer } from "@/app/components/markdown";
import PostList from "@/app/components/PostList";
import { getAllPosts } from "./lib/posts";
// import { supabaseServer } from "./lib/supabase/server";

export default async function Home() {
  const posts = getAllPosts();
  // const supabase = await supabaseServer();

  // const { data: posts } = await supabase
  //   .from("posts")
  //   .select("*")
  //   .order("created_at", { ascending: false });

  return (
    <>
      <MarkdownRenderer filePath="bio.md" />
      <hr className="my-10" />
      <h2 className="mb-5">My Latest Post</h2>
      <PostList posts={posts} perPage={5} />
    </>
  );
}
