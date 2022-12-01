import "./Signup.css";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <form>
        <div className="signup-container">
          <div className="signup-content">
            <h1 className="signup-title">Sign Up</h1>
            <div className="signup-input-form">
              <span className="signup-input-span">Username</span>
              <input
                type="text"
                required
                className="signup-input-box"
                placeholder="Enter Username"
                onChange={(e) => e.target.value}
              ></input>
            </div>

            <div className="signup-input-form">
              <span className="signup-input-span">Password</span>
              <input
                required
                type="password"
                className="signup-input-box"
                placeholder="Enter Password"
                onChange={(e) => e.target.value}
              ></input>
            </div>
            <div className="signup-input-form">
              <span className="signup-input-span">Email</span>
              <input
                type="email"
                required
                className="signup-input-box"
                placeholder="Enter your email"
                onChange={(e) => e.target.value}
              ></input>
            </div>
            <button className="btn-signup">Sign Up</button>
            <div className="signup__have-account">
              <span>
                You already have account{" "}
                <NavLink
                  className="NavLink__to-login"
                  to="/login"
                  onClick={this}
                >
                  <strong>login</strong>
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
