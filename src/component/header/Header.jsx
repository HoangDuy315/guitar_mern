import "./Header.css";
import { NavLink } from "react-router-dom";
import HeaderBtnLogin from "./header_btn_login/index";
import HeaderUser from "./header_user/index";
import { useState, useEffect } from "react";

function Header({ onLogOut}) {
  // console.log('isLogin: ', isTrue);
  const [User, setUser] = useState(false)
  useEffect(() => {
    const UserStore = localStorage.getItem('userId');
    if(UserStore)
      setUser(true)
  },[User])
  const handlelogoutHeader = () => {
    setUser(false)
  }
  return (
    <>
      <div className="heading">
        <div className="heading__title">
          <h1 className="heading__title-text">Thuan Hai</h1>
        </div>
        <div className="heading__nav">
          <ul className="heading__nav-list">
            <li className="heading__nav-item">
              <NavLink
                to="/"
                onClick={this}
                className="heading__nav-item--link"
              >
                Home
              </NavLink>
            </li>
            <li className="heading__nav-item">
              {User ? <NavLink
                to="/books"
                onClick={this}
                className="heading__nav-item--link"
              >
                Books
              </NavLink> : <p className="heading__nav-item--p">Books</p>}
            </li>
            <li className="heading__nav-item">
              
            {User ? <NavLink
                to="/books"
                onClick={this}
                className="heading__nav-item--link"
              >
                About Author
              </NavLink> : <p className="heading__nav-item--p">About Author</p>}
            </li>
            <li className="heading__nav-item">
              
            {User ? <NavLink
                to="/books"
                onClick={this}
                className="heading__nav-item--link"
              >
                Blog
              </NavLink> : <p className="heading__nav-item--p">Blog</p>}

            </li>
            <li className="heading__nav-item">
              
            {User ? <NavLink
                to="/books"
                onClick={this}
                className="heading__nav-item--link"
              >
                Contact
              </NavLink> : <p className="heading__nav-item--p">Contact</p>}
            </li>
          </ul>
        </div>
        <div className="heading__sub_nav">
          <div className="heading__sub_nav-user">
            {User ? <HeaderUser onLogoutHeader={handlelogoutHeader} onLogOut2={onLogOut}/> : <HeaderBtnLogin />}
          </div>
          <div className="heading__sub_nav--search">
            <input
              type="text"
              className="heading__sub_nav--search-input"
              placeholder="Search"
            />
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
