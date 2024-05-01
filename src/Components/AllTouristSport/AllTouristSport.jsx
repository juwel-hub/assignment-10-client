import { useLoaderData } from "react-router-dom";
import AllTouristCard from "../AllTouristCard/AllTouristCard";

const AllTouristSport = () => {
  const cardData = useLoaderData();

  return (
    <div className="mb-10">
      <div className="dropdown flex flex-col items-center my-10">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 text-xl font-bold bg-orange-300"
        >
          Sorting
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Sort with avg cost</a>
          </li>
        </ul>
      </div>
      <div className="grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((data) => (
          <AllTouristCard key={data._id} data={data}></AllTouristCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSport;
