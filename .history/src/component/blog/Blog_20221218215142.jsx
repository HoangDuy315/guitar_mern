import "./Blog.css";
import { AiOutlineStar } from "react-icons/ai";

function Blog() {
  return (
    <section className="blog">
      <h1 className="title">My Blog</h1>
      <div className="box-container">
        <div className="box">
          <img
            src="https://www.mycarpaltunnel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/03/Musician-in-Texas-Finds-Carpal-Tunnel-Relief.png.webp"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
            quidem architecto dolore, dicta quam omnis veniam officiis eos
            laboriosam ex natus dolorum possimus aperiam dolores voluptatum eum
            pariatur et.
          </p>
          <h3>Harry Maguire</h3>
          <div className="stars">
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
          </div>
        </div>
      </div>

      {/* blog 2 */}

      <div className="box-container">
        <div className="box">
          <img
            src="https://www.mycarpaltunnel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/03/Musician-in-Texas-Finds-Carpal-Tunnel-Relief.png.webp"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
            quidem architecto dolore, dicta quam omnis veniam officiis eos
            laboriosam ex natus dolorum possimus aperiam dolores voluptatum eum
            pariatur et.
          </p>
          <h3>Harry Maguire</h3>
          <div className="stars">
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
          </div>
        </div>
      </div>

      {/* blog 3 */}

      <div className="box-container">
        <div className="box">
          <img
            src="https://www.mycarpaltunnel.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/03/Musician-in-Texas-Finds-Carpal-Tunnel-Relief.png.webp"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
            quidem architecto dolore, dicta quam omnis veniam officiis eos
            laboriosam ex natus dolorum possimus aperiam dolores voluptatum eum
            pariatur et.
          </p>
          <h3>Harry Maguire</h3>
          <div className="stars">
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
            <i>
              <AiOutlineStar className="icon" />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
