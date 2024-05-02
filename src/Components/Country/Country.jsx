import { useEffect, useState } from "react";
import CountriesCard from "../CountriesCard/CountriesCard";
const serverUrl = import.meta.env.VITE_serverUrl;

const Country = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(`${serverUrl}/countriesData`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountriesData(data);
      });
  }, []);
  console.log(countriesData);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center"> Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {countriesData.map((country) => (
          <CountriesCard key={country._id} country={country}></CountriesCard>
        ))}
      </div>
    </div>
  );
};

export default Country;
