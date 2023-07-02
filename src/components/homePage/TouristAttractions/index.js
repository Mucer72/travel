import React from "react";
import BlogItem from "./BlogItem";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../router/paths";
import { useBlogs } from "./setting";
import { GlobalStateContext } from "../../../handler/useReducer";
import { useContext } from "react";

const TouristAttractions = () => {
  const blogs = useBlogs();
  const { contentTranslated } = useContext(GlobalStateContext);

  return (
    <section className="item touristAttractions" id="touristAttractions">
      <ul className="heading showtotop delay-02">
        <li id="sectionHeader">{contentTranslated.prominentPlace}</li>
      </ul>
      <div className="sub-heading showtotop delay-04">
        <p>{contentTranslated.prominentPlaceDescribe}</p>
      </div>
      <div className="box-container">
        {blogs.map((blog) => (
          <BlogItem key={blog.title} blog={blog} />
        ))}
      </div>
      <Link
        to={`${PATH_DASHBOARD.Intermediary}/1`}
        className="btnDetail showtotop delay-16"
      >
        Xem thêm
      </Link>
    </section>
  );
};

export default TouristAttractions;
