import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../router/paths";
import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <div class={`box showtotop ${blog.timeDelay}`}>
      <img src={`${blog.img}`} alt="." />
      <div class="content">
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <Link to={`${PATH_DASHBOARD.FoodAndDrink}/${blog.link}`} class="btn">
            Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;