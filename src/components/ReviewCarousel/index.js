import Slider from "react-slick";
import { getOriginURL } from "../../handler";

const ReviewCarousel = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section class="item review" id="review">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">Cảm nhận của du khách</li>
      </ul>
      <div class="swiper review-slider">
        <Slider {...settings}>
          <div class="swiper-slide  showtotop delay-04">
            <div class="box">
              <img src={`${getOriginURL}/images/pic1.png`} alt="" />
              <h3>Ái Ngọc</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis iusto maiores nihil enim neque animi vel quis
                perspiciatis provident quod saepe sed autem illo, atque dolorem,
                quos aliquid perferendis consectetur!
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div class="swiper-slide  showtotop delay-04">
            <div class="box">
              <img src={`${getOriginURL}/images/pic2.png`} alt="" />
              <h3>Bảo Khanh</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis iusto maiores nihil enim neque animi vel quis
                perspiciatis provident quod saepe sed autem illo, atque dolorem,
                quos aliquid perferendis consectetur!
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div class="swiper-slide  showtotop delay-04">
            <div class="box">
              <img src={`${getOriginURL}/images/pic3.png`} alt="" />
              <h3>Quỳnh Như</h3>
              <p>
                Lorem ipsum l dolor sit o lamet consectetur v adipisicing elit e.
                Veritatis iusto y maiores nihil o enim neque u animi vel quis
                perspiciatis provident quod saepe sed autem illo, atque dolorem,
                quos aliquid perferendis consectetur!
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div class="swiper-slide  showtotop delay-04">
            <div class="box">
              <img src={`${getOriginURL}/images/pic4.png`} alt="" />
              <h3>Ánh Minh</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis iusto maiores nihil enim neque animi vel quis
                perspiciatis provident quod saepe sed autem illo, atque dolorem,
                quos aliquid perferendis consectetur!
              </p>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ReviewCarousel;
