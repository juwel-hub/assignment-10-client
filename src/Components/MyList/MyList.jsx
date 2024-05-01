import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ItemCard from "../ItemCard/ItemCard";

const serverUrl = import.meta.env.VITE_serverUrl;

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setItem] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`${serverUrl}/myProduct/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItem(data);
        });
    }
  }, [user]);

  return (
    <div>
      {items?.map((item) => (
        <ItemCard key={item._id} item={item}></ItemCard>
      ))}
    </div>
  );
};

export default MyList;
