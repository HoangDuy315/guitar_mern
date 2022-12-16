import "./Blog.css";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h2>About Us</h2>
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
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href="#">
              <i>
                <BsFacebook />
              </i>
            </a>
            <a href="#">
              <i>
                <BsTwitter />
              </i>
            </a>
            <a href="#">
              <i>
                <BsInstagram />
              </i>
            </a>
            <a href="#">
              <i>
                <BsGithub />
              </i>
            </a>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2012/12/blogging.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
