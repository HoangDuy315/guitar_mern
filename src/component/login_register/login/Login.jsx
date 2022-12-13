import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState, useEffect } from "react";
import ImgLogin from "../img/index.js";
import {Loading} from '../../index'


let dataUser = {
  name: String,
  password: String,
};
let random = Math.floor(Math.random() * ImgLogin.length);

function Login({ onLogin }) {
  const [inputName, setName] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [randomImg, setRandomImg] = useState(random)
    useEffect(() => {
      const inter = setInterval(()=> {
        random = Math.floor(Math.random() * ImgLogin.length);
        setRandomImg(random)
      }, 3000)
      return () =>      clearInterval(inter)
  },[randomImg])



  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dataUser = {
      name: inputName,
      password: inputPassword,
    };
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.status === 200) {
          
          localStorage.setItem('userId', data.id)

          onLogin(data.id);
          // alert("SuccessLogin");
          setIsLoading(false)
          navigate("/", { replace: true });
        } else {
          setIsLoading(false)
          alert("Tai khoan Hoac mat khau sai !");}
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <>
      <div className="login">
        <div className="login-left">
          {isloading? <div className="login-loading"><Loading /></div> : <></>}
          
          <form onSubmit={handleLogin}>
            <div className="login-content">
              <h1 className="login-title">Login</h1>
              <div className="login-input-form">
                <span className="login-input-span">Username</span>
                <input
                  type="text"
                  required
                  className="login-input-box"
                  placeholder="Nhap username"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="login-input-form">
                <span className="login-input-span">Password</span>
                <input
                  type="password"
                  required
                  className="login-input-box"
                  placeholder="Nhap Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button className="btn-login">Login</button>
              <div className="text__forgot mr-16">
                <span>Forgot Password ?</span>
              </div>
              <div className="login__register-link mr-16">
                <span className="">
                  Don't have account ? click{" "}
                  <NavLink className="navLink" to="/signup" onClick={this}>
                    <strong>Here</strong>
                  </NavLink>
                </span>
              </div>
              <div className="login__more">
                <span className="login__more-text">Login More</span>
                <div className="login__more-icon ">
                  <i className="fa fa-google google"></i>
                  <i className="fa fa-facebook facebook"></i>
                  <i className="fa fa-twitter twitter"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img src={ImgLogin[randomImg]} alt="Img Login" className="login-right__img" />
        </div>
      </div>
    </>
  );
}

export default Login;
