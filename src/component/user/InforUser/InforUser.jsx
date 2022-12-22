import "./InforUser.scss";
import { useState, useEffect } from "react";
import defaulyAvatar from "./user.svg";
import storage from "../../more/fireBaseConfig/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function InforUser() {
  const [user, setUser] = useState();
  const userID = localStorage.getItem("userId");
  const [isEdit, setIsEdit] = useState(false);
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

    let dataUser = user;

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
          dataUser.urlImg = downloadURL;
          fetch(`${process.env.REACT_APP_API}/api/updateUser/` + userID, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataUser),
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.status === 200) {
                setUser(dataUser);
                setIsEdit(false);
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
      {user ? (
        <div className="container-inforUser">
          <div className="container-left">
            <div className="namebox">
              <span className="title">Tên đăng nhập:</span>
              {isEdit ? (
                <input
                  className="input-Edit"
                  type="text"
                  value={user.name}
                  required
                  onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                  }}
                />
              ) : (
                <span className="name">{user.name}</span>
              )}
            </div>
            <div className="namebox">
              <span className="title">Email:</span>
              {isEdit ? (
                <input
                  className="input-Edit"
                  type="text"
                  value={user.email}
                  required
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              ) : (
                <span className="name">{user.email}</span>
              )}
            </div>

            <div className="namebox">
              <span className="title">Địa chỉ:</span>
              {isEdit ? (
                <input
                  className="input-Edit"
                  type="text"
                  value={user.address}
                  onChange={(e) => {
                    setUser({ ...user, address: e.target.value });
                  }}
                />
              ) : (
                <span className="name">{user.address}</span>
              )}
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
            {isEdit ? (
              <input
                type="file"
                className="file-img"
                onChange={(e) => setFile(e.target.files[0])}
              />
            ) : (
              <></>
            )}

            {showprocesss ? (
              <p className="innerbar" style={{ width: `${progresspercent}%` }}>
                {progresspercent}%
              </p>
            ) : (
              <></>
            )}
            {isEdit ? (
              <></>
            ) : (
              <p className="btn-edit" onClick={() => setIsEdit(true)}>
                Edit
              </p>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      {isEdit ? (
        <div className="action-box">
          <button type="submit" className="btn-save">
            Save
          </button>
        </div>
      ) : (
        <></>
      )}
    </form>
  );
}

export default InforUser;
