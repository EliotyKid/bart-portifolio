import { getPosts } from "@/services/notion";
import PostPreview from "@/components/PostPreview";



const BlogList = async () => {
  const posts = await getPosts()
  
  return ( 
    <div className="w-full bg-slate-400 p-4 flex flex-wrap gap-4 justify-center">
      
        {posts.map((post) => (
          // <li key={post.id} className="flex flex-col">
          //   <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          //   {post.summary}
          // </li>
          
          <PostPreview
            id= {post.id}
            title={post.title}
            summary={post.summary}
            slug= {post.slug}
            key={post.id}
          />
        ))}
           
    </div>
   );
}
 
export default BlogList;