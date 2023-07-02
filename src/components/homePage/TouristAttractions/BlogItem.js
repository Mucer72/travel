import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../router/paths";

const BlogItem = ({ blog }) => {
  return (
    <div class={`box showtotop ${blog.timeDelay}`}>
      <img src={`${blog.img}`} alt="" />
      <div class="content">
        <h3>
          <i class="fas fa-map-marker-alt"></i>
          {blog.title}
        </h3>
        <p>{blog.description}</p>
        <p>
          <Link to={`${PATH_DASHBOARD.blogDetail}/${blog.link}`} class="btn">
            Xem thêm
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
