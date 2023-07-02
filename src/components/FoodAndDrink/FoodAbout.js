import React from "react";
const SpecialityAbout = ({ blog }) =>{
  return (
    <section class="item aboutsection" id="aboutsection">
      <div class="box-container">
      {blog.map((content) => (
          <>
          <div class={`box showtotop ${content.imgDelay}`}>
            <img src={content.image} alt="" />
          <div
              class={`box showtotop ${content.contentDelay}`}
              style={{ ...content.styleContent }}
            >
              <div class="content">
                <h3>{content.title}</h3>
                <p>{content.content}</p>
              </div>
            </div>
          </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default SpecialityAbout;
