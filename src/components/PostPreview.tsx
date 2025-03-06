import Link from "next/link"

interface PostPreviewProps {
  title: string
  summary: string
  slug: string
  id: string
}



const PostPreview = (props: PostPreviewProps) => {

  return ( 
    <Link href={`/blog/${props.slug}`} >
      <div className="size-80 bg-slate-200 hover:bg-slate-50 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 transition-all duration-300">
        <h1 className="text-xl text-center">{props.title}</h1>
        <p>{props.summary}</p>
      </div>
    </Link>
   );
}
 
export default PostPreview;