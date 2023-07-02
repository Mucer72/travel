import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../router/paths";

const BlogItem = ({ specs }) => {
  return (
    <section>
    <div class={`box showtotop ${specs.timeDelay}`}>
      <img src={specs.img} alt="" />
      <div class="content">
        <h3>
          <i class="fas fa-map-marker-alt"></i>
          {specs.title}
        </h3>
        <div>
        <p>{specs.description}</p>
          <Link to={`${specs.path}/${specs.link}`} class="btn">
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BlogItem;
