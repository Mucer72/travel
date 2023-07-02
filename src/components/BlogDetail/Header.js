import React from "react";
const Header = ({ blog }) => {
  return (
    <section class="home_detail_blog" id="home_detail_blog">
      <img
        class="mainbackground"
        alt="blog-detail-img"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${blog.headImage})`,
          filter: "blur(0.2rem)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div class="content_detail_blog">
        <h3>{blog.title}</h3>
        <p style={{ fontStyle: "italic" }}>{blog.titleDesc}</p>
      </div>
      <div class="subpicture">
        {blog.subPic.map((sub) => (
          <div class={sub.class}>
            <img src={sub.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
