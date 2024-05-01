import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const serverUrl = import.meta.env.VITE_serverUrl;

const ItemCard = ({ item, handleDelete }) => {
  const { _id, country, location, averageCost, travelTime } = item;

  return (
    <tr>
      <td>{country}</td>
      <td>{location}</td>
      <td>{averageCost}</td>
      <td>{travelTime}</td>
      <td>
        <Link to={`/updateData/${_id}`}>
          <button className="btn bg-green-500 text-white">Update</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-400 text-white"
        >
          {" "}
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ItemCard;
