import React from "react";
import BlogItem from "./BlogItem";
const About = ({specs}) => {
  return (
    <section class="item intermediary" id="intermediary">
      <div class="box-container">
        {specs.map((blog) => (
          <BlogItem key={blog.title} specs={blog} />
        ))}
      </div>
    </section>
  );
};

export default About;