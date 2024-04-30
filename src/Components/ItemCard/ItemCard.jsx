import { Link, useParams } from "react-router-dom";

const ItemCard = ({ item }) => {
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
  } = item;
  return (
    <div className="flex items-center justify-center my-10 ">
      <table className="table-auto border border-collapse w-3/4  ">
        <thead className="">
          <tr>
            <th>Country</th>
            <th>Location</th>
            <th>AverageCost</th>
            <th>Travel Time</th>
            <th>Update btn</th>
            <th>Delete btn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{country}</td>
            <td>{location}</td>
            <td>{averageCost}</td>
            <td>{travelTime}</td>
            <td>
              <Link to={`/updateData/:${_id}`}>
                <button className="btn bg-green-500 text-white">Update</button>
              </Link>
            </td>
            <td>
              <button className="btn bg-red-400 text-white"> Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemCard;
