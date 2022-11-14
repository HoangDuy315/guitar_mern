import { NavLink } from 'react-router-dom';
import './Login.css';





function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-content">
                    <h1 className='login-title'>Login</h1>
                    <div className='login-input-form'>
                        <span className='login-input-span'>Username</span>
                        <input type="text" className='login-input-box' placeholder='Nhap username'></input>
                    </div>
                    <div className='login-input-form'>
                        <span className='login-input-span'>Password</span>
                        <input type="password" className='login-input-box' placeholder='Nhap Password'></input>
                    </div>
                        <button className="btn-login mr-32">
                            <NavLink className="btn__login-route" to="/home" onClick={this}>Login</NavLink>
                        </button>
                    <div className='text__forgot mr-16'>
                    <span >Forgot Password ?</span>

                    </div>
                    <div className='login__register-link mr-16'>
                        <span className=''>
                            Don't have account ? click <NavLink className="navLink" to = "/signup" onClick={this}><strong>Here</strong></NavLink>
                        </span>
                    </div>
                    <div className='login__more'>
                        <span className='login__more-text'>Login More</span>
                        <div className='login__more-icon '>
                             <i class="fa fa-google google"></i>
                             <i class="fa fa-facebook facebook"></i>
                             <i class="fa fa-twitter twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;