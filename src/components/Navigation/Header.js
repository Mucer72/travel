import React from "react";
const Header = ({ blog }) => {
  return (
    <section class="home" id="home">
    <img
      class="mainbackground"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${blog.headImage})`,
        filter: 'blur(0.2rem)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
      alt="."
    />

    <div class="content">
      <h3>{blog.title}</h3>
      <p style={{ fontStyle: 'italic' }}>
        {blog.titleDesc}
      </p>
    </div>
  </section>
    
  );
};

export default Header;
