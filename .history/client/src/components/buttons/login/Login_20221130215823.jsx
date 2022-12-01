import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Login Successfully");
        window.location.reload();
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Login</h1>
          <div>
            <div className="login-input-form">
              <span className="login-input-span">Username</span>
              <input
                type="Email"
                className="boxx"
                placeholder="Type your email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-input-form">
              <span className="login-input-span">Password</span>
              <input
                type="Password"
                className="boxx"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn-login">
              {/* <NavLink className="btn__login-route" to="/home" onClick={this}> */}
              Login
              {/* </NavLink> */}
            </button>
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
                <i class="fa fa-google google"></i>
                <i class="fa fa-facebook facebook"></i>
                <i class="fa fa-twitter twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
