const VideoReview = ({blog}) => {
  return (
    <section class="item videoreview" id="videoreview">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">Video tham khảo trải nghiệm</li>
      </ul>
      <div class="box-container showtotop delay-04">
          <div class="videoYT">
          <iframe
            src={blog.videoLink}
            title="YouTube video player"
            frameborder="0"
            width="600" height="450" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="box">
          <div class="content">
            <h3>{blog.title}</h3>
            <p>
              {blog.cont}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReview;
