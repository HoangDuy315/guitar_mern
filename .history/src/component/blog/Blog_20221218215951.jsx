import "./Blog.css";
import { AiOutlineStar } from "react-icons/ai";

function Blog() {
  return (
    <section class="blogs" id="blogs">
      <h1 class="heading">
        {" "}
        our <span>blogs</span>{" "}
      </h1>

      <div class="box-container">
        <div class="box">
          <div class="image">
            <img
              src="https://www.mycarpaltunnel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/03/Musician-in-Texas-Finds-Carpal-Tunnel-Relief.png.webp"
              alt=""
            />
          </div>
          <div class="content">
            <a href="#" class="title">
              tasty and refreshing coffee
            </a>
            <span>by admin / 21st may, 2021</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              dicta.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img
              src="https://www.mycarpaltunnel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/03/Musician-in-Texas-Finds-Carpal-Tunnel-Relief.png.webp"
              alt=""
            />
          </div>
          <div class="content">
            <a href="#" class="title">
              tasty and refreshing coffee
            </a>
            <span>by admin / 21st may, 2021</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              dicta.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img
              src="https://www.mycarpaltunnel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/03/Musician-in-Texas-Finds-Carpal-Tunnel-Relief.png.webp"
              alt=""
            />
          </div>
          <div class="content">
            <a href="#" class="title">
              tasty and refreshing coffee
            </a>
            <span>by admin / 21st may, 2021</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              dicta.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
