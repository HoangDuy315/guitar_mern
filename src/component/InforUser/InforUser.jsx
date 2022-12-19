import "./InforUser.scss";
import { useState, useEffect } from "react";
import defaulyAvatar from "./user.svg";

function InforUser() {
  const [user, setUser] = useState();
  const userID = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/getoneuser/` + userID)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log(user);
      });
  }, []);

  return (
    <form className="wrapper-inforUser">
      <div className="InforUser-title">
        <h1>Hồ sơ của tôi</h1>
        <p>Quản lí thông tin hồ sơ để bảo vệ tài khoản</p>
      </div>
      { user ? <div className="container-inforUser">
        <div className="container-left">
          <div className="namebox">
            <span className="title">Tên đăng nhập:</span>
            <span className="name">{ user.name }</span>
          </div>
          <div className="namebox">
            <span className="title">Email:</span>
            <span className="name">{user.email}</span>
          </div>

          <div className="namebox">
            <span className="title">Địa chỉ:</span>
            <span className="name">{user.address}</span>
          </div>
          <div className="namebox">
            <span className="title">Ngày tạo</span>
            <span className="name">{user.dateCreate}</span>
          </div>
          <div className="namebox">
            <span className="title">Chức vụ</span>
            <span className="name">{user.role}</span>
          </div>
        </div>
        <div className="container-right">
          <div className="avatar-box">
            <img src={user.urlImg || defaulyAvatar} className="avatar" />
          </div>
          <input type="file" className="file-img" />
        </div>
      </div> : <></>}
    </form>
  );
}

export default InforUser;
