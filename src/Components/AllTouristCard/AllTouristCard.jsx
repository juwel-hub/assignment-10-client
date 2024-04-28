import { Link, useParams } from "react-router-dom";

const AllTouristCard = ({ data }) => {
  const { id } = useParams();
  const {
    _id,
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
  } = data;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{touristSport}</h2>
          <p className="font-semibold ">
            <span className="text-xl font-semibold mr-3">Average Cost:</span>
            {averageCost}
          </p>
          <p className="font-semibold ">
            <span className="text-xl font-semibold mr-3">
              Total Visitors Per Year:
            </span>
            {visitors}
          </p>
          <p className="font-semibold ">
            <span className="text-xl font-semibold mr-3">Travel Time:</span>
            {seasonality}
          </p>
          <p className="font-semibold ">
            <span className="text-xl font-semibold mr-3">Seasonality:</span>
            {travelTime}
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/viewDetails/${id}`}
              className="btn bg-green-500 text-xl font-bold text-white "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristCard;
