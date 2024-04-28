const AddTouristSport = () => {
  return (
    <div>
      <h1>add tourist</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className=" shrink-0  shadow-2xl border border-green-500 rounded-lg bg-base-100">
            <form className="card-body">
              <div className="lg:flex flex-col  justify-center gap-5">
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">
                        Country Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Country Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">
                        Tourist Sport Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Tourist sport"
                      name="touristSport"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">
                        Location
                      </span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">
                        Average Cost
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Average Cost"
                      name="averageCost"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">
                        Description
                      </span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Description "
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-bold">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Use image URl"
                      name="image"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          Travel Time
                        </span>
                      </label>
                      <input
                        type="text"
                        name="travelTime"
                        placeholder="Travel Time"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          Total Visitors per Year
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Total visitors"
                        name="visitors"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          User Email
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          User Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="User Name"
                        name="name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-xl font-bold">
                          Email
                        </span>
                      </label>
                      <input
                        type="text"
                        name=""
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white text-xl font-bold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSport;
