import { NavLink} from 'react-router-dom'
import './Header_btn_login.css'
function Header_btn_login() {
    return (
        <>
           <NavLink className="Header_btn_login" to='/login' onClick={this}>Login</NavLink>
        </>
    )
}

export default Header_btn_login