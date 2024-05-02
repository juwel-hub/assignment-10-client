// import { Link } from "react-router-dom";

const BlogArticleCard = ({ inf }) => {
  const { _id, id, img, title, description, post_date } = inf;
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
            {/* <Link to={`/blogDetails/${_id}`}> */}
            <a className="btn bg-green-500 text-white">Read more</a>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticleCard;
