import { useLoaderData } from "react-router-dom";
import AllTouristCard from "../AllTouristCard/AllTouristCard";

const AllTouristSport = () => {
  const cardData = useLoaderData();

  return (
    <div className="mb-10">
      <div className="grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((data) => (
          <AllTouristCard key={data._id} data={data}></AllTouristCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSport;
