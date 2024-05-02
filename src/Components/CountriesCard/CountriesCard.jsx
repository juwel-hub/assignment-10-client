import { Link } from "react-router-dom";

const CountriesCard = ({ country }) => {
  const {
    id,
    _id,
    tourist_sport_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    image_url,
  } = country;
  return (
    <div>
      <Link to={`/countryDetails/${_id}`}>
        <div className="card bg-base-100 shadow-xl">
          <div className="px-10 pt-10">
            <img src={image_url} alt="Shoes" className="rounded-xl" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{country_name}</h2>
            <p>{short_description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountriesCard;
