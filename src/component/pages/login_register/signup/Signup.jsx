import "./Signup.css";
import { NavLink, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import ImgLogin from "../img/index.js"
import Loading from '../loading/Loading'




let dataUser = {
  name: String,
  password: String,
  email: String,
};

let random = Math.floor(Math.random() * ImgLogin.length);
function Signup() {
  const [inputName, setName] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [inputConfirmPassword, setConfirmPassword] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();


  const [randomImg, setRandomImg] = useState(random)
    useEffect(() => {
      const inter = setInterval(()=> {
        random = Math.floor(Math.random() * ImgLogin.length);
        setRandomImg(random)
      }, 3000)
      return () =>      clearInterval(inter)
  },[randomImg])



  const handleSignup = (e) => {
    setIsLoading(true)
    e.preventDefault();
    
    if(inputPassword === inputConfirmPassword) {
      dataUser = {
        name: inputName,
        password: inputPassword,
        email: inputEmail,
      };
      // console.log(dataUser);
  
    fetch(`${process.env.REACT_APP_API}/api/signup`, {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataUser)
    })
    .then(data => data.json())
    .then(data => {
      if(data.status === 200 )
        {
          alert("Success")
          setIsLoading(false)
          navigate("/login", { replace: true });
  
        }
      
      else {
        if(data.status === 401 )
        {
        setIsLoading(false)
        alert("Username đã tồn tại")
        }
      
        if(data.status === 402 )
        {
        setIsLoading(false)
        alert("Email đã tồn tại")
        }
      }
    })
    .catch(err => console.log(err.data))
  
  
    }
    else {
      alert("Xác nhận mật khẩu không đúng !")
      setIsLoading(false)

    }


  };

  return (
    <>
    <div className="login">
        <div className="login-left">


        {isLoading? <div className="login-loading"><Loading /></div> : <></>}

          <form onSubmit={handleSignup}>
            <div className="signup-container">
              <div className="signup-content">
                <h1 className="signup-title">Create Account</h1>
                <div className="signup-input-form">
                  <span className="signup-input-span"></span>
                  <input
                    type="text"
                    className="signup-input-box"
                    placeholder="Your Username"
                    value={inputName}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="signup-input-form">
                  <span className="signup-input-span"></span>
                  <input
                    type="email"
                    required
                    className="signup-input-box"
                    placeholder="Your email"
                    value={inputEmail}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="signup-input-form">
                  <span className="signup-input-span"></span>
                  <input
                  required
                    type="password"
                    className="signup-input-box"
                    placeholder="Your Password"
                    value={inputPassword}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div className="signup-input-form">
                  <span className="signup-input-span"></span>
                  <input
                  required
                    type="password"
                    className="signup-input-box"
                    placeholder="Confirm Your Password"
                    value={inputConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
                </div>
                <div className="terms">
                  <input required type="checkbox" className="input-checkbox" />
                  <span className="btn-checkbox">
                    I argee all statement in{""}
                    <NavLink
                      className="NavLink__to-term"
                      to="/terms"
                      onClick={this}><strong> Terms of service</strong>
                    </NavLink>

                  </span>
                </div>
                
             
                <button className="btn-signup" >
                    Sign Up
                </button>
                <div className="signup__have-account">
                  <span>
                    Have already an account?{" "}
                    <NavLink
                      className="NavLink__to-login"
                      to="/login"
                      onClick={this}
                    >
                      <strong className="btn-strong">Login here</strong>
                    </NavLink>
                  </span>
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

export default Signup;
