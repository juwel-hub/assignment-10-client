import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ItemCard from "../ItemCard/ItemCard";
import Swal from "sweetalert2";
const serverUrl = import.meta.env.VITE_serverUrl;

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${serverUrl}/myProduct/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItems(data);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
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
        fetch(`${serverUrl}/deleteData/${id}`, {
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

              setItems((prevItems) =>
                prevItems.filter((item) => item._id !== id)
              );
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
          {items?.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></ItemCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
