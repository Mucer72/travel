const TouristAttractionAbout = ({ blog }) => {
  return (
    <section class="item about" id="about">
      <div class="box-container">
        {blog.map((content) => (
          <>
            <div class={`box showtotop ${content.imgDelay}`}>
              <img src={content.image} alt="" />
            </div>
            <div
              class={`box showtotop ${content.contentDelay}`}
              style={{ ...content.styleContent }}
            >
              <div class="content">
                <h3>{content.title}</h3>
                <p>{content.content}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default TouristAttractionAbout;
