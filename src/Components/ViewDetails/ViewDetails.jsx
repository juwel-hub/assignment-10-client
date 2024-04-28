import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const travelerHero = useLoaderData();
  const [travelData, setTravelData] = useState({});

  useEffect(() => {
    const singleData = travelerHero.find((hero) => hero._id == id);
    setTravelData(singleData);
  }, [travelerHero, id]);
  console.log(travelData);
  const {
    country,
    touristSport,
    location,
    averageCost,
    description,
    image,
    travelTime,
    visitors,
    seasonality,
  } = travelData;
  return (
    <div className="my-10 m-3 flex items-center justify-center min-h-screen">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-3/4" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="md:flex   md:justify-around">
            <div className="md:w-2/4">
              <h2 className="card-title text-3xl">{country}</h2>
              <p className="font-semibold ">
                <span className="text-xl font-semibold mr-3">
                  Average Cost:
                </span>
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
            </div>
            <div className="md:w-2/4">
              <p className="font-semibold ">
                <span className="text-xl font-semibold mr-3">
                  Tourist Sport:
                </span>
                {touristSport}
              </p>
              <p className="font-semibold ">
                <span className="text-xl font-semibold mr-3">Location:</span>
                {location}
              </p>
              <p className="font-semibold ">
                <span className="text-xl  mr-3">Description:</span>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
