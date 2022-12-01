import "./Signup.css";
import { NavLink } from "react-router-dom";

function Signup() {
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
    <>
      <form>
        <div className="signup-container">
          <div className="signup-content">
            <h1 className="signup-title">Sign Up</h1>
            <div onSubmit={handleSubmit} method="POST">
              <div className="signup-input-form">
                <span className="signup-input-span">Username</span>
                <input
                  type="Name"
                  className="box"
                  placeholder="Type your fullname"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>

              <div className="signup-input-form">
                <span className="signup-input-span">Password</span>
                <input
                  type="Email"
                  className="box"
                  placeholder="Type your email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="signup-input-form">
                <span className="signup-input-span">Email</span>
                <input
                  type="Password"
                  className="box"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <button className="btn-signup" type="submit">
                Sign Up
              </button>
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
        </div>
      </form>
    </>
  );
}

export default Signup;
