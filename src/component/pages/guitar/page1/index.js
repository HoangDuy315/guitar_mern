import "./Page1.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Page1({ page }) {
  let url = useLocation();
  const [guitars, setGuitar] = useState([]);
  const [User, setUser] = useState();
  const getUser = localStorage.getItem("userId");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/getallproduct`)
      .then((res) => res.json())
      .then((res) => {
        setGuitar(res.reverse());
      });

    fetch(`${process.env.REACT_APP_API}/api/getoneuser/` + getUser)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);

        console.log(User);
      });
  }, []);

  const handleGetProductID = (data) => {
    let listCart = [[]];
    if (User.Cart && User.Cart.length > 0) {
      console.log("haven Cart");
      console.log(User.Cart);
      listCart = User.Cart

      let isChanged = false
      User.Cart.forEach((item, index) => {
        if(item[0]._id === data._id)
          {
            listCart[index] = [data, listCart[index][1] + 1 ]
            console.log(listCart[index]);
            isChanged = true;
          }
      });
      if(!isChanged)
          listCart = [...User.Cart, [data, 1]]

          
      console.log(listCart);
    } else {
      console.log("haven't Cart");
      listCart = [[data, 1]];
      console.log(listCart);
    }

    fetch(`${process.env.REACT_APP_API}/api/updateUser/` + getUser, {
      method: "PUT",
      body: JSON.stringify({ Cart: listCart }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          alert("Add Product Successfully !");
          window.location.reload();
        } else alert(`${res.message}`);
      });

    // const idProduct = localStorage.getItem('productId')
    // if(idProduct) {
    //   localStorage.removeItem('productId')
    // }
    // localStorage.setItem('productId', ID)
  };
  return (
    <>
      <ul className="product-list">
        {guitars.map((guitar, index) => {
          if ((page - 1) * 6 <= index && index < page * 6) {
            return (
              <li className="product-item" key={index}>
                <img
                  className="product-img"
                  src={guitar.urlImg}
                  alt="product img"
                />
                <div className="product-info">
                  <p className="product-name">{guitar.name}</p>
                  <p className="product-author">
                    Type:{" "}
                    <strong>{guitar.type || "Đang cập nhật ..."}</strong>
                  </p>
                  <p className="product-price">
                    Giá: <strong>$ {guitar.price}</strong>
                  </p>
                  {/* <p className="product-available">
                    {guitar.availableNumber
                      ? `Còn: ${guitar.availableNumber} quyển`
                      : "Hết Hàng !"}
                  </p>
                  <p className="product-soldNumber">
                    {guitar.soldNumber
                      ? `Đã bán: ${guitar.soldNumber} quyển`
                      : "Chưa bán được gì !"}
                  </p> */}
                </div>
                <div className="action-box">
                  <button onClick={() => handleGetProductID(guitar)}>
                    {" "}
                    <Link className="product-btn-buy active">Add to Cart</Link>
                  </button>
                  <button>
                    {" "}
                    <Link className="product-btn-buy" to={`${url}/detailbook`}>
                      Buy
                    </Link>
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
export default Page1;
