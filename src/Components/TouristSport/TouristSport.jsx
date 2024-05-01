import { useEffect, useState } from "react";
import TouristSportCard from "../TouristSportCard/TouristSportCard";

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
      <h1 className="text-5xl font-bold text-center my-10">Tourist sports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 m-3">
        {touristSports.map((sport) => (
          <TouristSportCard key={sport._id} sport={sport}></TouristSportCard>
        ))}
      </div>
    </div>
  );
};

export default TouristSport;
