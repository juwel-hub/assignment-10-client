import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const serverUrl = import.meta.env.VITE_serverUrl;

const ItemCard = ({ item }) => {
  const [deleteItem, setDeleteItem] = useState(item);
  const {
    _id,
    country,
    location,
    averageCost,

    travelTime,
  } = deleteItem;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${serverUrl}/deleteData/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = deleteItem.filter((itm) => itm._id !== _id);

              setDeleteItem(remaining);
            }
          });
      }
    });
  };
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
        </tbody>
      </table>
    </div>
  );
};

export default ItemCard;
