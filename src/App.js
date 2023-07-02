import { useEffect, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BrandCarousel from "./components/BrandCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReviewCarousel from "./components/ReviewCarousel";
import { languageContent } from "./handler/language";
import GlobalStateReducer from "./handler/useReducer";
import Router from "./router";

const INITIAL_STATE = {
  currentCountry: "vn",
  contentTranslated: languageContent["vn"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "countryUpdate":
      return {
        ...state,
        contentTranslated: languageContent[action.country],
        currentCountry: action.country,
      };

    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const handleKeyScroll = (event) => {
    let items = document.querySelectorAll(".item");
    let navheader = document.getElementById("header");

    if (window.scrollY > 200) {
      navheader.classList.add("tofixed");
    } else {
      navheader.classList.remove("tofixed");
    }
    items.forEach((item) => {
      if (item.offsetTop - window.scrollY < 400) {
        item.classList.add("actives");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleKeyScroll);

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleKeyScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <GlobalStateReducer initialState={state} dispatch={dispatch}>
        <>
          <Header />
          <Router />
          <ReviewCarousel />
          <BrandCarousel />
          <Footer />
        </>
      </GlobalStateReducer>
    </BrowserRouter>
  );
}

export default App;
