import Link from "next/link";
import { getPosts } from "@/services/notion";
import ReactMarkdown from 'react-markdown'

export default async function BlogHome() {
  const posts = await getPosts()

  return (
    <div className="h-dvh">
      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
          <li key={post.id} className="flex flex-col">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            {post.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}
