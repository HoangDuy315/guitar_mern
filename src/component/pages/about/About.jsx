import "./About.css";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

function About() {
  return (
    <div className="about">
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
              <button>Read More</button>
            </div>
          </div>
          <div className="social">
            <i>
              <BsFacebook />
            </i>
            <i>
              <BsTwitter />
            </i>
            <i>
              <BsInstagram />
            </i>
            <i>
              <BsGithub />
            </i>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://th.bing.com/th/id/R.2ad5043af3a68c1945b6b9a74c260584?rik=iiiJtMkzahZLfg&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
