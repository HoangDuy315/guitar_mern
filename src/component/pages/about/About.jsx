import "./About.css";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

function About() {
  return (
    <div className="about">
        <div className="container1">
            <h1 className="title1">Thông Tin Thành Viên</h1>
            <ul className="list-group">
                <li className="item">
                    <img className="avatar" src="https://upload-img-theta.vercel.app/hinhnen.jpg" alt="Avatar"/>
                    <h2 className="name">Bùi Đức Mạnh</h2>
                    <p className="desc">19521822</p>
                    <p className="role">Thành viên</p>
                </li>
                <li className="item">
                    <img className="avatar" src="https://upload-img-theta.vercel.app/hinhnen.jpg" alt="Avatar"/>
                    <h2 className="name">Lường Tiến Thuận Hải</h2>
                    <p className="desc">19521462</p>
                    <p className="role">Thành viên</p>
                </li>
                <li className="item">
                    <img className="avatar" src="https://upload-img-theta.vercel.app/hinhnen.jpg" alt="Avatar"/>
                    <h2 className="name">Nguyễn Hoàng Duy</h2>
                    <p className="desc">19521425</p>
                    <p className="role">Nhóm trưởng</p>
                </li>
                <li className="item">
                    <img className="avatar" src="https://upload-img-theta.vercel.app/hinhnen.jpg" alt="Avatar"/>
                    <h2 className="name">Nguyễn Hoàng Long</h2>
                    <p className="desc">19521787</p>
                    <p className="role">Thành viên</p>
                </li>

              </ul>
        </div>
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
