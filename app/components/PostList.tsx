import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function PostList() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Link
          key={post.title}
          href={`/posts/${post.slug}`}
          className="block border-b border-gray-200 dark:border-gray-800 pb-3 hover:text-blue-500 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h4>{post.title}</h4>
            <time
              dateTime={post.date}
              className="italic text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </Link>
      ))}
    </div>
  );
}
