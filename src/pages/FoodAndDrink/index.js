import { useParams } from "react-router-dom";
import Header from "../../components/Speciality/Header";
import FoodAbout from "../../components/FoodAndDrink/FoodAbout";
import FoodSuggest from "../../components/FoodAndDrink/FoodSuggest";
import FoodPost from "../../components/FoodAndDrink/FoodPost";
import "../../css/foodndrink.css";
import { blogData } from "./setting";
import ScrollToTop from "../../../src/components/LoadingScreen/ScrollToTop";

const Speciality = () => {
  let { id } = useParams();
  const data = blogData[id];
  console.log(data);
  return (
    <>
      <Header blog={data.header}/>
      <FoodAbout blog={data.abouts}/>
      <FoodSuggest blog={data.experience}/>
      <FoodPost blog={data.post}/>
    </>
  );
};

export default ScrollToTop(Speciality);
