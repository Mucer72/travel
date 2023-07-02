import React from "react";
import BlogItem from "./BlogItem";
import { specs } from "./setting";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../router/paths";

const FoodAndDrink = () => {
  return (
    <section class="item foodAndDrink" id="foodAndDrink">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">Ẩm Thực</li>
      </ul>
      <div class="sub-heading showtotop delay-04">
        <p>
          Dù là đặc sản Đà Lạt truyền thống hay món ăn đường phố Đà Lạt đầy ngẫu
          hứng <br /> ẩm thực địa phương tại đây vẫn sở hữu sức hút không thể
          phủ nhận
        </p>
      </div>
      <div class="box-container">
        {specs.map((blog) => (
          <BlogItem key={blog.title} blog={blog} />
        ))}
      </div>
      <Link to={`${PATH_DASHBOARD.Intermediary}/2`} class="btnDetail showtotop delay-16">
      Xem thêm
      </Link>
    </section>
  );
};

export default FoodAndDrink;