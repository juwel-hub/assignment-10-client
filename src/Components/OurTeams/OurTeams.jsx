import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const OurTeams = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-center my-5">Our Team</h1>
      <div className="md:flex items-center m-3 gap-5">
        <div className=" border p-5 shadow-lg rounded-lg">
          <img src="/10-1.jpg" alt="" />
          <h1 className="text-xl font-bold mt-3">Contact us with</h1>
          <h1 className="flex items-center gap-5 text-2xl my-3 text-orange-300">
            <a href="">
              <FaInstagramSquare />
            </a>
            <a href="">
              <FaFacebookSquare />
            </a>
            <a href="">
              <FaSquareTwitter />
            </a>
            <a href="">
              <FaSquareWhatsapp />
            </a>
          </h1>
        </div>
        <div className=" border p-5 shadow-lg rounded-lg">
          <img src="/11.jpg" alt="" />
          <h1 className="text-xl font-bold mt-3">Contact us with</h1>
          <h1 className="flex items-center gap-5 text-2xl my-3 text-orange-300">
            <a href="">
              <FaInstagramSquare />
            </a>
            <a href="">
              <FaFacebookSquare />
            </a>
            <a href="">
              <FaSquareTwitter />
            </a>
            <a href="">
              <FaSquareWhatsapp />
            </a>
          </h1>
        </div>
        <div className=" border p-5 shadow-lg rounded-lg">
          <img src="/12-1.jpg" alt="" />
          <h1 className="text-xl font-bold mt-3">Contact us with Expert</h1>
          <h1 className="flex items-center gap-5 text-2xl my-3 text-orange-300">
            <a href="">
              <FaInstagramSquare />
            </a>
            <a href="">
              <FaFacebookSquare />
            </a>
            <a href="">
              <FaSquareTwitter />
            </a>
            <a href="">
              <FaSquareWhatsapp />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
