import { getOriginURL } from "../../handler";
import { PATH_DASHBOARD } from "../../router/paths";

export const blogData = {
  1: {
    header: {
      headImage: `${getOriginURL}/images/p7.jpg`,
      title: "Địa Điểm Nổi Bật",
      titleDesc:
        "Khám phá những địa điểm với đa dạng phong cách kiến trúc cùng thiên nhiên hùng vĩ tại Đà Lạt",
    },
    abouts: [
      {
        title: "Chùa Linh Phước",
        description:
          "Chùa Linh Phước Đà Lạt còn được biết đến với tên Chùa Ve Chai ,các bạn chắc chắn có được trải nghiệm văn hoá, nghệ thuật độc đáo; đồng thời, mục sở thị lối kiến trúc cổ kính.",
        timeDelay: "delay-06",
        img: `${getOriginURL}/images/p-1.jpg`,
        path: `${PATH_DASHBOARD.blogDetail}`,
        link: "1",
      },
      {
        title: "Ga Đà Lạt",
        description:
          "Nhà ga Đà Lạt với lối thiết kế đường ray xe lửa hiếm có. Lối kiến trúc cổ kính mang phong cách đông dương. Thu hút khách du lịch trong và ngoài nước đến tham quan.",
        timeDelay: "delay-08",
        img: `${getOriginURL}/images/p-2.jpg`,
        path: `${PATH_DASHBOARD.blogDetail}`,
        link: "2",
      },
      {
        title: "Suối Vàng",
        description:
          "Suối vàng Đà Lạt là một điểm đến không mới. Khu du lịch Thung lũng Vàng Đà Lạt mang đến cảm giác rộng lớn với không khí trong lành.",
        timeDelay: "delay-1",
        img: `${getOriginURL}/images/p-3.jpg`,
        path: `${PATH_DASHBOARD.blogDetail}`,
        link: "3",
      },
      {
        title: "Dinh 1",
        description:
          "Dinh 1 Đà Lạt hay còn gọi là King Palace. Dinh Bảo Đại 1 lại là một trong những địa điểm gắn liền với cuộc đời vua Bảo Đại, cũng là nơi có phong cảnh đẹp nhất trong 3 dinh.",
        timeDelay: "delay-12",
        img: `${getOriginURL}/images/p-4.jpg`,
        path: `${PATH_DASHBOARD.blogDetail}`,
        link: "4",
      },
      {
        title: "Thác Datanla",
        description:
          "Nổi tiếng với vẻ đẹp hoang sơ, thơ mộng mà dữ dội, thác Datanla Đà Lạt là một trong những điểm tham quan du lịch có sức hút nhất tỉnh Lâm Đồng.",
        timeDelay: "delay-14",
        img: `${getOriginURL}/images/p-5.jpg`,
        path: `${PATH_DASHBOARD.blogDetail}`,
        link: "5",
      },
      {
        title: "Vườn Ánh Sáng Lumiere",
        description:
          "Nếu đã quen với một Đà Lạt xưa cổ, thì Lumiere Đà Lạt sẽ là một địa điểm check in mới với lối kiến trúc hiện đại tràn đầy sắc màu, và được giới trẻ hết sức quan tâm.",
        timeDelay: "delay-16",
        img: `${getOriginURL}/images/p-6.jpg`,
        path: `${PATH_DASHBOARD.blogDetail}`,
        link: "6",
      },
    ],
    experience: {
      title: "Điểm đến gợi ý",
      image: `${getOriginURL}/images/11-4.jpg`,
      imgDelay: "delay-06",
      contentDelay: "delay-08",
      styleContent: { gridColumnStart: 2, gridColumnEnd: 4 },
      
    },
    post: {
    title:"Bài viết tham khảo",
    image:`${getOriginURL}/images/11.jpg`,
   }
  },
  2: {
    header: {
      headImage: `${getOriginURL}/images/p8.jpg`,
      title: "Ẩm Thực",
      titleDesc:
        "Dù là đặc sản Đà Lạt truyền thống hay món ăn đường phố Đà Lạt đầy ngẫu hứng ẩm thực địa phương tại đây vẫn sở hữu sức hút không thể phủ nhận",
    },
    abouts: [
      {
        title: "Pizza Đà Lạt",
        description:
          "Bánh tráng nướng mỏng giòn cùng đa dạng topping.",
        timeDelay: "delay-06",
        img: `${getOriginURL}/images/11-1.jpg`,
        path: `${PATH_DASHBOARD.FoodAndDrink}`,
        link: "1",
      },
      {
        title: "Bánh căn",
        description:
          "Những chiếc bánh căn nóng hổi và bát nước chấm xíu mại thơm lừng.",
        timeDelay: "delay-08",
        img: `${getOriginURL}/images/12-2.jpg`,
        path: `${PATH_DASHBOARD.FoodAndDrink}`,
        link: "2",
      },
      {
        title: "Kem bơ",
        description:
          "Được làm từ loại bơ sáp tươi ngon ăn kèm với viên kem dừa và dừa sấy. ",
        timeDelay: "delay-1",
        img: `${getOriginURL}/images/14.jpg`,
        path: `${PATH_DASHBOARD.FoodAndDrink}`,
        link: "3",
      },
      {
        title: "Bánh mì xíu mại",
        description:
          "Bánh mì giòn kèm bát xíu mại nóng hổi.",
        timeDelay: "delay-12",
        img: `${getOriginURL}/images/15.jpg`,
        path: `${PATH_DASHBOARD.FoodAndDrink}`,
        link: "4",
      },
      {
        title: "Lẩu gà lá é",
        description:
          "Nồi lẩu gà lá é thơm nồng, cay cay và những miếng gà ngọt thịt.",
        timeDelay: "delay-14",
        img: `${getOriginURL}/images/17.jpg`,
        path: `${PATH_DASHBOARD.FoodAndDrink}`,
        link: "5",
      },
      {
        title: "Bánh ướt lòng gà",
        description:
          "Lớp ánh ướt mềm mại kết hợp cùng thịt gà thả vườn giòn dai",
        timeDelay: "delay-16",
        img: `${getOriginURL}/images/16.jpg`,
        path: `${PATH_DASHBOARD.FoodAndDrink}`,
        link: "6",
      },
    ],
    experience: {
      title: "Điểm đến gợi ý",
      image: `${getOriginURL}/images/14-4.jpg`,
      imgDelay: "delay-06",
      contentDelay: "delay-08",
      styleContent: { gridColumnStart: 2, gridColumnEnd: 4 },
    },
    post: {
    title:"Bài viết tham khảo",
    image:`${getOriginURL}/images/14-5.jpg`,
   }
  },
  3: {
    header: {
      headImage: `${getOriginURL}/images/p9.jpg`,
      title: "Đặc Sản",
      titleDesc:
        "Đặc sản Đà Lạt là những món ngon nổi tiếng vô cùng hấp dẫn không chỉ ở Việt Nam mà ngay cả những khách nước ngoài cũng đều muốn thử qua.",
    },
    abouts: [
      {
        title: "Pizza Đà Lạt",
        description:
          "Bánh tráng nướng mỏng giòn cùng đa dạng topping.",
        timeDelay: "delay-06",
        img: `${getOriginURL}/images/11-1.jpg`,
        path: `${PATH_DASHBOARD.speciality}`,
        link: "1",
      },
      {
        title: "Bánh căn",
        description:
          "Những chiếc bánh căn nóng hổi và bát nước chấm xíu mại thơm lừng.",
        timeDelay: "delay-08",
        img: `${getOriginURL}/images/12-2.jpg`,
        path: `${PATH_DASHBOARD.speciality}`,
        link: "2",
      },
      {
        title: "Kem bơ",
        description:
          "Được làm từ loại bơ sáp tươi ngon ăn kèm với viên kem dừa và dừa sấy. ",
        timeDelay: "delay-1",
        img: `${getOriginURL}/images/14.jpg`,
        path: `${PATH_DASHBOARD.speciality}`,
        link: "3",
      },
      {
        title: "Bánh mì xíu mại",
        description:
          "Bánh mì giòn kèm bát xíu mại nóng hổi.",
        timeDelay: "delay-12",
        img: `${getOriginURL}/images/15.jpg`,
        path: `${PATH_DASHBOARD.speciality}`,
        link: "4",
      },
      {
        title: "Lẩu gà lá é",
        description:
          "Nồi lẩu gà lá é thơm nồng, cay cay và những miếng gà ngọt thịt.",
        timeDelay: "delay-14",
        img: `${getOriginURL}/images/17.jpg`,
        path: `${PATH_DASHBOARD.speciality}`,
        link: "5",
      },
      {
        title: "Bánh ướt lòng gà",
        description:
          "Lớp ánh ướt mềm mại kết hợp cùng thịt gà thả vườn giòn dai",
        timeDelay: "delay-16",
        img: `${getOriginURL}/images/16.jpg`,
        path: `${PATH_DASHBOARD.speciality}`,
        link: "6",
      },
    ],
    experience: {
      title: "Điểm đến gợi ý",
      image: `${getOriginURL}/images/14-4.jpg`,
      imgDelay: "delay-06",
      contentDelay: "delay-08",
      styleContent: { gridColumnStart: 2, gridColumnEnd: 4 },
    },
    post: {
    title:"Bài viết tham khảo",
    image:`${getOriginURL}/images/14-5.jpg`,
   }
  },
  };
