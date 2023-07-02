import React from "react";
const SpecialityPost = ({ blog }) =>{
  return (
    <section class="item exp" id="exp">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">{blog.title}</li>
      </ul>
      <div class="box-container">
        <div class="box showtotop delay-04">
          <img src={blog.image} alt="" />
        </div>
        <div class="box showtotop delay-04" style={{ gridColumnStart: 2, gridColumnEnd: 4 }}>
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

export default SpecialityPost;