import { useContext, useState } from "react";
import { GlobalStateContext } from "../../../handler/useReducer";
import { getOriginURL } from "../../../handler";

export const useBlogs = () => {
  const { contentTranslated } = useContext(GlobalStateContext);
  const [blogs, setBlogs] = useState([
    {
      title: contentTranslated.LinhPhuocTittle,
      description: contentTranslated.LinhPhuocDescribe,
      timeDelay: "delay-06",
      img: `${getOriginURL}/images/p-1.jpg`,
      link: "1",
    },
    {
      title: "Ga Đà Lạt",
      description:
        "Nhà ga Đà Lạt với lối thiết kế đường ray xe lửa hiếm có. Lối kiến trúc cổ kính mang phong cách đông dương. Thu hút khách du lịch trong và ngoài nước đến tham quan.",
      timeDelay: "delay-08",
      img: `${getOriginURL}/images/p-2.jpg`,
      link: "2",
    },
    {
      title: "Suối Vàng",
      description:
        "Suối vàng Đà Lạt là một điểm đến không mới. Khu du lịch Thung lũng Vàng Đà Lạt mang đến cảm giác rộng lớn với không khí trong lành.",
      timeDelay: "delay-1",
      img: `${getOriginURL}/images/p-3.jpg`,
      link: "3",
    },
    {
      title: "Dinh 1",
      description:
        "Dinh 1 Đà Lạt hay còn gọi là King Palace. Dinh Bảo Đại 1 lại là một trong những địa điểm gắn liền với cuộc đời vua Bảo Đại, cũng là nơi có phong cảnh đẹp nhất trong 3 dinh.",
      timeDelay: "delay-12",
      img: `${getOriginURL}/images/p-4.jpg`,
      link: "4",
    },
    {
      title: "Thác Datanla",
      description:
        "Nổi tiếng với vẻ đẹp hoang sơ, thơ mộng mà dữ dội, thác Datanla Đà Lạt là một trong những điểm tham quan du lịch có sức hút nhất tỉnh Lâm Đồng.",
      timeDelay: "delay-14",
      img: `${getOriginURL}/images/p-5.jpg`,
      link: "5",
    },
    {
      title: "Vườn Ánh Sáng Lumiere",
      description:
        "Nếu đã quen với một Đà Lạt xưa cổ, thì Lumiere Đà Lạt sẽ là một địa điểm check in mới với lối kiến trúc hiện đại tràn đầy sắc màu, và được giới trẻ hết sức quan tâm.",
      timeDelay: "delay-16",
      img: `${getOriginURL}/images/p-6.jpg`,
      link: "6",
    },
  ]);

  return blogs;
};
