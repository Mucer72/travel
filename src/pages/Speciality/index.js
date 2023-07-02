import { useParams } from "react-router-dom";
import Header from "../../components/Speciality/Header";
import SpecialityAbout from "../../components/Speciality/SpecialityAbout";
import SpecialitySuggest from "../../components/Speciality/SpecialitySuggest";
import SpecialityPost from "../../components/Speciality/SpecialityPost";
import "../../css/speciality.css";
import { blogData } from "./setting";
import ScrollToTop from "../../../src/components/LoadingScreen/ScrollToTop";

const Speciality = () => {
  let { id } = useParams();
  const data = blogData[id];
  console.log(data);
  return (
    <>
      <Header blog={data.header}/>
      <SpecialityAbout blog={data.abouts}/>
      <SpecialitySuggest blog={data.experience}/>
      <SpecialityPost blog={data.post}/>
    </>
  );
};

export default ScrollToTop(Speciality);
