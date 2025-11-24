import { MarkdownRenderer } from "@/app/components/markdown";
import PostList from "@/app/components/PostList";
import { getAllPosts } from "./lib/posts";
import { createClient } from "./lib/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const posts = getAllPosts();
  // const cookieStore = cookies();
  // const supabase = await createClient(cookieStore);

  // const { data: posts, error } = await supabase.from("posts").select();

  // console.log("Posts from Supabase:", JSON.stringify(posts, null, 2));

  return (
    <>
      <MarkdownRenderer filePath="bio.md" />
      <hr className="my-10" />
      <h2 className="mb-5">My Latest Post</h2>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <PostList posts={posts} perPage={5} />
    </>
  );
}
