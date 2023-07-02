import { getOriginURL } from "../../handler";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../router/paths";

const TouristAttractionOutStanding = () => {
  return (
    <section class="item touristAttractions" id="touristAttractions">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">Địa Điểm Nổi Bật</li>
      </ul>
      <div class="sub-heading showtotop delay-04">
        <p>
          Khám phá những địa điểm với đa dạng phong cách kiến trúc <br /> cùng
          thiên nhiên hùng vĩ tại Đà Lạt{" "}
        </p>
      </div>
      <div class="box-container">
        <div class="box showtotop delay-08">
          <img src={`${getOriginURL}/images/p-2.jpg`} alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i>Ga Đà Lạt
            </h3>
            <p>
              Nhà ga Đà Lạt với lối thiết kế đường ray xe lửa hiếm có. Lối kiến
              trúc cổ kính mang phong cách đông dương. Thu hút khách du lịch
              trong và ngoài nước đến tham quan.
            </p>

            <p>
            <Link to={`${PATH_DASHBOARD.blogDetail}/2`} class="btn">
            Xem thêm
            </Link>
            </p>
          </div>
        </div>

        <div class="box showtotop delay-1">
          <img src={`${getOriginURL}/images/p-3.jpg`} alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i>Suối Vàng
            </h3>
            <p>
              Suối vàng Đà Lạt là một điểm đến không mới. Khu du lịch Thung lũng
              Vàng Đà Lạt mang đến cảm giác rộng lớn với không khí trong lành.
            </p>

            <p>
            <Link to={`${PATH_DASHBOARD.blogDetail}/3`} class="btn">
            Xem thêm
          </Link>
            </p>
          </div>
        </div>

        <div class="box showtotop delay-12">
          <img src={`${getOriginURL}/images/p-4.jpg`} alt="" />
          <div class="content">
            <h3>
              <i class="fas fa-map-marker-alt"></i>Dinh 1
            </h3>
            <p>
              Dinh 1 Đà Lạt hay còn gọi là King Palace. Dinh Bảo Đại 1 lại là
              một trong những địa điểm gắn liền với cuộc đời vua Bảo Đại, cũng
              là nơi có phong cảnh đẹp nhất trong 3 dinh.
            </p>

            <p>
            <Link to={`${PATH_DASHBOARD.blogDetail}/4`} class="btn">
            Xem thêm
          </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristAttractionOutStanding;
