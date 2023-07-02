import React from "react";
const SpecialitySuggest = ({ blog }) =>{
  return (
    <section class="item about" id="about">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">{blog.title}</li>
      </ul>
      <div class="box-container">
        <div class={`box showtotop ${blog.imgDelay}`}>
          <img src={blog.image} alt="" />
        </div>
        <div  class={`box showtotop ${blog.contentDelay}`}
              style={{ ...blog.styleContent }}>
          <div class="content">
          {blog.content.map((content) => (
          <>
            <p>
              {content.line}
            </p>
          </>
        ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialitySuggest;
