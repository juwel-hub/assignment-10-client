import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ItemCard from "../ItemCard/ItemCard";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setItem] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myProduct/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItem(data);
        });
    }
  }, [user]);
  // const {
  //   _id,
  //   country,
  //   touristSport,
  //   location,
  //   averageCost,
  //   description,
  //   image,
  //   travelTime,
  //   visitors,
  //   seasonality,
  //   email,
  //   name,
  // } = items;
  return (
    <div>
      {items?.map((item) => (
        <ItemCard key={item._id} item={item}></ItemCard>
      ))}
    </div>
  );
};

export default MyList;
