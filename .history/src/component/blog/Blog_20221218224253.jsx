import "./Blog.css";
import { AiOutlineStar } from "react-icons/ai";

function Blog() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">My Blogs</h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              src="https://www.mycarpaltunnel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/03/Musician-in-Texas-Finds-Carpal-Tunnel-Relief.png.webp"
              alt=""
            />
          </div>
          <div className="content">
            <a href="#" className="title">
              tasty and refreshing coffee
            </a>
            <span>by admin / 21st may, 2021</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              dicta.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
