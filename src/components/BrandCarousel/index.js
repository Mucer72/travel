import Slider from "react-slick";
import { getOriginURL } from "../../handler";

const BrandCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section class="item review" id="review">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">Thương hiệu tiêu biểu</li>
      </ul>
      <div class="swiper review-slider">
        <Slider {...settings}>
          <div class="swiper-slide">
            <img src={`${getOriginURL}/images/1.jpg`} alt="" />
          </div>
          <div class="swiper-slide">
            <img src={`${getOriginURL}/images/2.jpg`} alt="" />
          </div>
          <div class="swiper-slide">
            <img src={`${getOriginURL}/images/3.jpg`} alt="" />
          </div>
          <div class="swiper-slide">
            <img src={`${getOriginURL}/images/4.jpg`} alt="" />
          </div>
          <div class="swiper-slide">
            <img src={`${getOriginURL}/images/5.jpg`} alt="" />
          </div>
          <div class="swiper-slide">
            <img src={`${getOriginURL}/images/6.jpg`} alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BrandCarousel;
