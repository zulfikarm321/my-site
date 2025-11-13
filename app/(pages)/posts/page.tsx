import PostList from "@/app/components/PostList";
import { getAllPosts } from "@/app/lib/posts";

const posts = () => {
  const posts = getAllPosts();

  return (
    <div>
      <h2 className="mb-5">My Posts</h2>
      <PostList posts={posts} perPage={10} />
    </div>
  );
};

export default posts;
