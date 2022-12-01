import React, { useState } from "react";
import "./Signup.css";
import SU from "../imgButton/signup1.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // handle inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = user;
    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("This email has been used!!!");
      } else {
        window.alert("Signup Successfully!!!");
        history.pushState("/login");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div id="bg1" class="d-flex">
        <div class="container">
          <div class="row justify-content-center">
            <div class="">
              <form
                action=""
                className="form"
                onSubmit={handleSubmit}
                method="POST"
              >
                <img src={SU} alt="Signup" />
                <h1 className="sup">SIGN UP</h1>
                <input
                  type="Name"
                  className="box"
                  placeholder="Type your fullname"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
                <input
                  type="Email"
                  className="box"
                  placeholder="Type your email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <input
                  type="Password"
                  className="box"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
                <button
                  className="submit btn btn-outline-warning"
                  type="submit"
                >
                  Sign Up
                </button>
                <NavLink to="/login" className="login_again">
                  Login
                </NavLink>
                <a
                  href="https://www.facebook.com/profile.php?id=100007746304417"
                  className="icons me-1 ms-3 text-warning fw-bold"
                >
                  <i class="fa fa-facebook-f"></i>
                  <a href="/" className="icons me-1 ms-4 text-warning fw-bold">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="/" className="icons me-1 ms-3 text-warning fw-bold">
                    <i class="fa fa-google"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/hoangduy315/"
                    className="icons me-1 ms-3 text-warning fw-bold"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="/" className="icons me-1 ms-3 text-warning fw-bold">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/HoangDuy315"
                    className="icons me-1 ms-3 text-warning fw-bold"
                  >
                    <i class="fa fa-github"></i>
                  </a>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
