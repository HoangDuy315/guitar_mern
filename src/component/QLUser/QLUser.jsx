import "./QLUser.css";
import { useState, useEffect } from "react";
import defaulyAvatar from "./user.svg";

function QLUer() {
  const [listUser, setListUser] = useState([]);
  const [numberShow, setNumberShow] = useState(10);
  const [show, setShow] = useState(false);

  const handdleDelete = (selectId) => {
      fetch(`${process.env.REACT_APP_API}/api/delete/` + selectId, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            alert(res.message + " deleted");
            const newlist = listUser.filter((item) => item._id !== selectId);
            setListUser(newlist);
          } else alert(res.message);
        });
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/getUser`)
      .then((res) => res.json())
      .then((res) => {
        setListUser(res);
      });
  }, []);

  // ==============================
  // ==============================
  // ==============================

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="qluser">
      {show ? <div className="modal-delete">
        <div className="modal-delete__box">
          <div className="modal-delete__header">
            <h2 className="modal-delete__header-title">Are you sure ?</h2>
            <button className="modal-delete__header-btn" onCick={handleClose}>Close</button>
          </div>
          <hr/>
          <div className="modal-delete__body">
            <p className="modal-delete__body-text">Would you want to delete User ?</p>
          </div>
          <hr/>
      <div className="modal-delete__footer">
          <button className="modal-delete__footer-btn modal--active">OK</button>
          <button onCick={handleClose}className="modal-delete__footer-btn">Cancel</button>
      </div>
        </div>
      </div> : <></> }
      

      <h1 className="qluser-title">Quan Ly Thong Tin User</h1>
      <div className="qluse--container">
        <ul className="qluser__list">
          {listUser.map((user, index) => {
            if (index < numberShow)
              return (
                <li key={user._id} className="qluser__list-item">
                  <img
                    src={user.urlAvatar || defaulyAvatar}
                    alt="imgUser"
                    className="qluer__list-item--avatar"
                  />
                  <div className="qluser__list-item--container">
                    <p className="qluser__list-item__name">
                      {" "}
                      Name: <strong>{user.name}</strong>
                    </p>
                    <p className="qluser__list-item__password">
                      {" "}
                     Password: <strong>********</strong>
                    </p>
                    <p className="qluser__list-item__email">
                      {" "}
                     Email: <strong>{user.email}</strong>
                    </p>
                    <p className="qluser__list-item__role">
                      {" "}
                     Role: <strong>{user.role}</strong>
                    </p>
                    <p className="qluser__list-item__date">
                      {" "}
                     Date Create:<strong>{user.dateCreate}</strong>
                    </p>
                  </div>
                  <div className="qluser__list-item__active">
                    <button className="qluser__list-item__active-edit qluser-activer">
                      Edit
                    </button>
                    <button
                      className="qluser__list-item__active-delete qluser-activer"
                      onClick={() => handdleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
          })}
        </ul>
        <div className="qluser__footer">
          <span
            className="qluser-showmore"
            onClick={() => setNumberShow(numberShow + 10)}
          >
            Xem them
          </span>
        </div>
      </div>
    </div>
  );
}

export default QLUer;
