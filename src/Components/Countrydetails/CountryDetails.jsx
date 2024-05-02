import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState({});
  const { id } = useParams();
  const details = useLoaderData();

  useEffect(() => {
    const singleData = details.find((hero) => hero._id == id);
    setCountryDetails(singleData);
  }, [details, id]);
  console.log(countryDetails);
  const {
    tourist_sport_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    image_url,
  } = countryDetails;

  return (
    <div className="my-10 m-3 flex items-center justify-center min-h-screen">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-3/4" src={image_url} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="md:flex   md:justify-around">
            <div className="md:w-2/4">
              <h2 className="card-title text-3xl">{country_name}</h2>
              <p className="font-semibold ">
                <span className="text-xl font-semibold mr-3">
                  Average Cost:
                </span>
                {tourist_sport_name}
              </p>
              <p className="font-semibold ">
                <span className="text-xl font-semibold mr-3">
                  Total Visitors Per Year:
                </span>
                {average_cost}
              </p>
              <p className="font-semibold ">
                <span className="text-xl font-semibold mr-3">Travel Time:</span>
                {seasonality}
              </p>
              <p className="font-semibold ">
                <span className="text-xl font-semibold mr-3">Seasonality:</span>
                {short_description}
              </p>
            </div>
            <div className="md:w-2/4">
              <p className="font-semibold ">
                <span className="text-xl font-semibold mr-3">
                  Tourist Sport:
                </span>
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
