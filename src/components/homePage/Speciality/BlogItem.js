import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../router/paths";
import React from "react";

const BlogItem = ({ specs }) => {
  return (
    <div class={`box showtotop ${specs.timeDelay}`}>
      <img src={`${specs.img}`} alt="." />
      <div class="content">
        <h3>{specs.title}</h3>
        <p>{specs.description}</p>
        <Link to={`${PATH_DASHBOARD.speciality}/${specs.link}`} class="btn">
            Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;