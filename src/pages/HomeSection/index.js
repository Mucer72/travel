import { useContext } from "react";
import Icon1 from "../../assets/icons/Icon1";
import ControlsVideo from "../../components/homePage/ControlsVideo";
import FoodAndDrink from "../../components/homePage/FoodAndDrink";
import Specialities from "../../components/homePage/Speciality";
import TouristAttractions from "../../components/homePage/TouristAttractions";
import "../../css/home.css";
import ScrollToTop from "../../../src/components/LoadingScreen/ScrollToTop";
import { GlobalStateContext } from "../../handler/useReducer";

const HomeSection = () => {
  const { contentTranslated } = useContext(GlobalStateContext);
  console.log(contentTranslated, "8907states");
  return (
    <>
      <section class="home_video" id="home_video">
        <div class="content">
          <span>
            <Icon1 />
          </span>
          <p style={{ fontStyle: "italic" }}>
            {contentTranslated.contentBanner}
          </p>
          <a href="#" class="btn">
            {contentTranslated.buttonContent}
          </a>
        </div>
        <ControlsVideo />
      </section>
      <TouristAttractions />
      <FoodAndDrink />
      <Specialities />
    </>
  );
};

export default ScrollToTop(HomeSection);
