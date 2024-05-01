import { useEffect, useState } from "react";
import BlogArticleCard from "../BlogArticlaCard/BlogArticleCard";
const serverUrl = import.meta.env.VITE_serverUrl;
const BlogArticle = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`${serverUrl}/blogs`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  console.log(info);
  return (
    <div className="my-10 ">
      <h1 className="text-5xl font-bold text-center">Blog & Article</h1>
      <p className="text-xl text-center mt-5">
        This is my Blog and Article section . Those people who want to explore
        <br /> tourism and want to know about more and read this blog.
      </p>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 m-3">
        {info.map((inf) => (
          <BlogArticleCard key={inf.id} inf={inf}></BlogArticleCard>
        ))}
      </div>
    </div>
  );
};

export default BlogArticle;
