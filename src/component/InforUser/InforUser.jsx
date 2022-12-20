import "./InforUser.scss";
import { useState, useEffect } from "react";
import defaulyAvatar from "./user.svg";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import storage from "../QLProduct/formAddProduct/firebaseConfig";

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

  const [file, setFile] = useState();
  const [showprocesss, setShowProcess] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);

//------------
const handlesubmit = (e) => {
  e.preventDefault();
  setShowProcess(true);
  if (!file) {
    alert("Bạn chưa thêm hình !");
    setShowProcess(false);
    return;
  }

  const storageRef = ref(storage, `imgUser/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgresspercent(progress);
    },
    (error) => {
      alert(error);
    },

    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setShowProcess(false);
          fetch(`${process.env.REACT_APP_API}/api/updateUser/` + userID , {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({urlImg: downloadURL}),
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.status === 200) {
                setUser({...user, urlImg: downloadURL})
                alert(res.message);


              } else {
                alert(res.message);
              }
            });
      });
    }
  );
};

//------
  
  return (
    <form className="wrapper-inforUser" onSubmit={handlesubmit}>
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
          <input type="file" className="file-img" onChange={(e) => setFile(e.target.files[0])}/>
          {showprocesss ? (
            <p className="innerbar" style={{ width: `${progresspercent}%` }}>
              {progresspercent}%
            </p>
          ) : (
            <></>
          )}
        </div>


      </div> : <></>}
      <button type="submit" className="btn">Save</button>
    </form>
  );
}

export default InforUser;
