import "./Header_user.css";
import {NavLink} from "react-router-dom"
import { useState, useEffect } from "react"
function Header_user({onLogoutHeader, onLogOut2}) {

  const [user, setUser] = useState({
    role: "Customer",
  })


  useEffect(() => {
    const UserStore = localStorage.getItem('userId');
  console.log("heelo " +UserStore)


  fetch(`${process.env.REACT_APP_API}/api/getoneuser`+ UserStore)
  .then(res => res.json())
  .then(res => {
    setUser(res)
    console.log(res);
  })
  },[])
  console.log(user.Cart)
  return (
    <>
      {" "}
      <div className="Header_user-icon">
         <div className="Header_user-icon__cart">
          <NavLink to='/cart' onClick={this}><i className="fa fa-shopping-cart"></i></NavLink>
          {user.Cart && user.Cart.length > 0 ? <span className="shopping-cart__number">{user.Cart.length}</span>: <></>}
          
          </div>
          
        <div>
          <i className="fa fa-user" onClick={this}>
            <ul className="user__list">
              <div className="user__list-item-name"><strong>HI, {user.name}</strong></div>
              <li ><NavLink className="user__list-item" to="/inforuser">Thong Tin</NavLink></li>
              {user.role === "Admin" ? <li ><NavLink className="user__list-item" to="/qluser" onClick={this}>Quan ly User</NavLink></li> : <></>}
              {user.role === "Admin" ? <li ><NavLink className="user__list-item" to="/qlproduct" onClick={this}>Quan ly Product</NavLink></li> : <></>}
              <li ><NavLink className="user__list-item" to="/doimatkhau">Doi mat khau</NavLink></li>
              <li ><NavLink className="user__list-item" onClick={() => {onLogOut2(); onLogoutHeader()}} to="/">Dang Xuat</NavLink></li>
            </ul>
          </i>
        </div>
      </div>
    </>
  );
}

export default Header_user;
