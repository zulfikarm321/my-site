import { MarkdownRenderer } from "@/app/components/markdown";

interface PostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  return <MarkdownRenderer filePath={`/posts/${slug}.md`} />;
}
