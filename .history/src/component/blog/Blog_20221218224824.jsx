import "./Blog.css";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function Blog() {
  return (
    <div className="about">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h2>My Blogs</h2>
          </div>
          <div className="content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis itaque sequi excepturi dolor, ducimus cupiditate
              aliquid enim ea veritatis adipisci iste minus illum cum fugiat,
              magnam nulla in amet libero!
            </p>
            <div className="button">
              <button>More Detail</button>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://www.mycarpaltunnel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/03/Musician-in-Texas-Finds-Carpal-Tunnel-Relief.png.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
