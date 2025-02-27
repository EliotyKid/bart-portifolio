import { getPost } from "@/services/notion"
import ReactMarkdown from 'react-markdown'

export default async function BlogPost({params}: {params: {slug: string}}){
  const post = await getPost(params.slug)
  return(
    <div className="h-dvh">
      <ReactMarkdown
        components={{}}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  )
}