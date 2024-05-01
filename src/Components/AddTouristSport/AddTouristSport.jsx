import Swal from "sweetalert2";

const AddTouristSport = () => {
  const serverUrl = import.meta.env.VITE_serverUrl;

  const handleAddToCard = (e) => {
    e.preventDefault();
    const form = e.target;
    const country = form.country.value;
    const touristSport = form.touristSport.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const description = form.description.value;
    const image = form.image.value;
    const travelTime = form.travelTime.value;
    const visitors = form.visitors.value;
    const seasonality = form.seasonality.value;
    const email = form.email.value;
    const name = form.name.value;
    const cardInfo = {
      country,
      touristSport,
      location,
      averageCost,
      description,
      image,
      travelTime,
      visitors,
      seasonality,
      email,
      name,
    };
    console.log(cardInfo);

    // send data to server
    fetch(`${serverUrl}/travels`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cardInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Card added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl mb-5 font-bold">Add to card!</h1>
          </div>
          <div className=" shrink-0  shadow-2xl border border-green-500 rounded-lg bg-base-100">
            <form onSubmit={handleAddToCard} className="card-body">
              <div className="md:flex   justify-center gap-5">
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
                          Seasonality
                        </span>
                      </label>
                      <input
                        type="text"
                        name="seasonality"
                        placeholder="Seasonality"
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
                        name="email"
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
