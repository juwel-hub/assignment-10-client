const BlogDetails = () => {
  return (
    <div>
      <div className="my-10 m-3 flex items-center justify-center min-h-screen">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="w-3/4" src="" alt="Movie" />
          </figure>
          <div className="card-body">
            <div className="md:flex   md:justify-around">
              <div className="md:w-2/4">
                <h2 className="card-title text-3xl">cou</h2>
                <p className="font-semibold ">
                  <span className="text-xl font-semibold mr-3">
                    Average Cost:
                  </span>
                </p>
                <p className="font-semibold ">
                  <span className="text-xl font-semibold mr-3">
                    Total Visitors Per Year:
                  </span>
                </p>
                <p className="font-semibold ">
                  <span className="text-xl font-semibold mr-3">
                    Travel Time:
                  </span>
                </p>
                <p className="font-semibold ">
                  <span className="text-xl font-semibold mr-3">
                    Seasonality:
                  </span>
                </p>
              </div>
              <div className="md:w-2/4">
                <p className="font-semibold ">
                  <span className="text-xl font-semibold mr-3">
                    Tourist Sport:
                  </span>
                </p>
                <p className="font-semibold ">
                  <span className="text-xl font-semibold mr-3">Location:</span>
                  {location}
                </p>
                <p className="font-semibold ">
                  <span className="text-xl  mr-3">Description:</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
