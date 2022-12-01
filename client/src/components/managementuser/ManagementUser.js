import "./ManagementUser.css";
import { useState, useEffect } from "react";
import defaulyAvatar from './user.svg'
function ManagementUser() {
  const [listUser, setListUser] = useState([]);
  const [numberShow, setNumberShow] = useState(10);
  useEffect(() => {
    fetch('http://localhost:4000/getUser')
    .then((res) => res.json())
    .then((res) => {
      setListUser(res);
      console.log(listUser[0])
    });
  },[])

  return (
    <>
      <h1 className="managementUser-title">Quan Ly Thong Tin User</h1>
      <div className="qluse--container">
        <ul className="managementUser__list">
          {listUser.map((user, index) => {
            if(index < numberShow)
                return (
                    <li key={user.id} className="managementUser__list-item">
                    <img
                      src={user.urlAvatar || defaulyAvatar}
                      alt="imgUser"
                      className="qluer__list-item--avatar"
                    />
                    <div className="managementUser__list-item--container">
                      <p className="managementUser__list-item__name">
                        {" "}
                        Name: <strong>{user.username}</strong>
                      </p>
                      <p className="managementUser__list-item__password">
                        {" "}
                        Password: <strong>********</strong>
                      </p>
                      <p className="managementUser__list-item__email">
                        {" "}
                        Email: <strong>{user.email}</strong>
                      </p>
                      <p className="managementUser__list-item__role">
                        {" "}
                        Role: <strong>{user.role || "Customer"}</strong>
                      </p>
                    </div>
                    <div className="managementUser__list-item__active">
                      <button className="managementUser__list-item__active-edit managementUser-activer">
                        Edit
                      </button>
                      <button className="managementUser__list-item__active-delete managementUser-activer">
                        Delete
                      </button>
                    </div>
                  </li>
                )
          }
           )}
        </ul>
        <div className="managementUser__footer">

              <span className="managementUser-showmore" onClick={() => setNumberShow(numberShow + 10)}>Xem them</span>
        </div>
      </div>

    </>
  );
}

export default ManagementUser;
