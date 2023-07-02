const Map = ({blog}) => {
    return (
      <section class="item MapReview" id="MapReview">
        <ul class="heading showtotop delay-02">
          <li id="sectionHeader">Bản đồ</li>
        </ul>
        <div class="box-container showtotop delay-04">
            <iframe 
            src={blog.source} 
            width="100%" 
            height="100%" 
            style={{border:"0"}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
      </section>
    );
  };
  
  export default Map;