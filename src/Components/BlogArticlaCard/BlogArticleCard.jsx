import { useEffect } from "react";

const BlogArticleCard = ({ inf }) => {
  const { img, title, description, post_date } = inf;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>
            <span className="text-xl font-semibold">Post Date:</span>{" "}
            {post_date}
          </p>
          <div className="card-actions">
            <button className="btn bg-green-500 text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticleCard;
