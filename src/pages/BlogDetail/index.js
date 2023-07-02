import { useParams } from "react-router-dom";
import Header from "../../components/BlogDetail/Header";
import TouristAttractionAbout from "../../components/BlogDetail/TouristAttractionAbout";
import TouristAttractionOutStanding from "../../components/BlogDetail/TouristAttractionOutStanding";
import VR from "../../components/BlogDetail/VR";
import VideoReview from "../../components/BlogDetail/VideoReview";
import Map from "../../components/BlogDetail/Map";
import "../../css/foodndrink.css";
import { blogData } from "./setting";
import ScrollToTop from "../../../src/components/LoadingScreen/ScrollToTop";

const BlogDetail = () => {
  let { id } = useParams();
  const data = blogData[id];
  console.log(data);
  return (
    <>
      <Header blog={data.header} />
      <TouristAttractionAbout blog={data.abouts} />
      <VR blog={data.vr} />
      <VideoReview blog={data.experience} />
      <Map blog={data.map}/>
      <TouristAttractionOutStanding />
    </>
  );
};

export default ScrollToTop(BlogDetail);
