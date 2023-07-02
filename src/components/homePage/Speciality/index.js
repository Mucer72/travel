import React from "react";
import BlogItem from "../Speciality/BlogItem";
import { specs } from "../Speciality/setting";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../router/paths";

const Specialities = () => {
  return (
    <section class="item foodAndDrink" id="foodAndDrink">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">Đặc Sản</li>
      </ul>
      <div class="sub-heading showtotop delay-04">
        <p>
        Đặc sản Đà Lạt là những món ngon nổi tiếng vô cùng hấp dẫn <br/> Không chỉ ở Việt Nam mà ngay cả những khách nước ngoài cũng đều muốn thử qua.
        </p>
      </div>
      <div class="box-container">
        {specs.map((blog) => (
          <BlogItem key={blog.title} specs={blog} />
        ))}
      </div>
      <Link to={`${PATH_DASHBOARD.Intermediary}/3`} class="btnDetail showtotop delay-16">
      Xem thêm
      </Link>
    </section>
  );
};

export default Specialities;