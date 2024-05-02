import { useEffect, useState } from "react";
const serverUrl = import.meta.env.VITE_serverUrl;
const Country = () => {
  const [countriesData, setCountriesData] = useState([]);

  // useEffect(() => {
  //   fetch(`${serverUrl}/countriesData`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCountriesData(data);
  //     });
  // }, []);
  console.log(countriesData);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center"> Countries</h1>
      <div>
        {countriesData.map((country) => (
          <Country key={country._id} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Country;
