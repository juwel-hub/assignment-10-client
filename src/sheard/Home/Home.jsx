// import Header from "../../Components/Header/Header";

import BlogArticle from "../../Components/BlogArticle/BlogArticle";
import Country from "../../Components/Country/Country";
import Header from "../../Components/Header/Header";
import OurTeams from "../../Components/OurTeams/OurTeams";
import TouristSport from "../../Components/TouristSport/TouristSport";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <TouristSport></TouristSport>
      <Country></Country>
      <BlogArticle></BlogArticle>
      <OurTeams></OurTeams>
    </div>
  );
};

export default Home;
