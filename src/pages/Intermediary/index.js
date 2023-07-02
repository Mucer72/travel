import { useParams } from "react-router-dom";
import "../../css/foodndrink.css";
import Header from "../../components/Navigation/Header";
import About from "../../components/Navigation/About";
import { blogData } from "./setting";
import ScrollToTop from "../../../src/components/LoadingScreen/ScrollToTop";
import "../../css/intermediary.css";

const Intermediary = () => {
  let { id } = useParams();
  const data = blogData[id];
  console.log(data);
  return (
    <>
      <Header blog={data.header}/>
      <About specs={data.abouts}/>
    </>
  );
};

export default ScrollToTop(Intermediary);
