import { useEffect, useState } from "react";

const serverUrl = import.meta.env.VITE_serverUrl;
const TouristSport = () => {
  const [touristSports, setTouristSports] = useState([]);
  useEffect(() => {
    fetch(`${serverUrl}/travels`)
      .then((res) => res.json())
      .then((data) => {
        setTouristSports(data.slice(0, 6));
      })
      .catch((error) => {
        console.error("touristSports.jsx", error);
      });
  }, []);

  console.log(touristSports);
  return (
    <div className="my-10">
      <h1 className="text-5xl font-bold text-center">Tourist sports</h1>
    </div>
  );
};

export default TouristSport;
