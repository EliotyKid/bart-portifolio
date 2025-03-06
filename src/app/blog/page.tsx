
import BlogList from "./components/BlogList";
import SearchBlog from "./components/SearchBlog";
import { Suspense } from "react";

export default function BlogHome() {
  

  return (
    <div className="">
      {/* <SearchBlog/> */}
      <Suspense fallback={<p>Carregando posts...</p>}>
        <BlogList/>
      </Suspense>
    </div>
  );
}
