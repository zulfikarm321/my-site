"use client";

import { useState } from "react";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  slug: string;
}

interface PostListProps {
  posts: Post[];
  perPage?: number;
}

export default function PostList({ posts, perPage = 10 }: PostListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // --- Sort posts berdasarkan tanggal ---
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedPosts.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + perPage);
  return (
    <div className="space-y-8">
      <div className="flex justify-end mb-10">
        <button
          onClick={() =>
            setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))
          }
          className="cursor-pointer px-3 py-1 bordered">
          Sort : {sortOrder === "newest" ? "latest" : "oldest"}
        </button>
      </div>
      {/* Daftar Postingan */}
      {currentPosts.map((post) => (
        <Link
          key={post.slug}
          href={`/posts/${post.slug}`}
          className="block border-b border-gray-200 dark:border-gray-800 pb-3 hover:text-blue-500 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h4>{post.title}</h4>
            <time dateTime={post.date} className="">
              {new Date(post.date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </Link>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 pt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="cursor-pointer px-3 py-1 rounded-md bordered text-sm disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors">
            prev
          </button>

          <span className="">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="cursor-pointer px-3 py-1 rounded-md border bordered text-sm disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors">
            next
          </button>
        </div>
      )}
    </div>
  );
}
