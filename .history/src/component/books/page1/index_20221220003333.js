import "./Page1.css";
import { useState, useEffect } from "react";
import {Link, useLocation} from 'react-router-dom'


function Page1({ page }) {
  let url = useLocation()
  const [guitars, setBooks] = useState([]);
  const [User, setUser] = useState()
  const getUser = localStorage.getItem('userId')

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/getallproduct`)
    .then((res) => res.json())
    .then((res) =>{
        setBooks(res.reverse())
    })


    fetch(`${process.env.REACT_APP_API}/api/getoneuser/` + getUser)
      .then(res => res.json())
      .then(res => {
        setUser(res)
        
        console.log(User);
      })


  }, [])

  const handleGetProductID = (ID) => {
      console.log(ID);
    let DaataFake = User;
      if(User.Cart && User.Cart.length > 0) {
        console.log("haven Cart");
        setUser({})
        DaataFake.Cart = [...DaataFake.Cart, ID]
      }
      else {
        console.log("haven't Cart");
        DaataFake.Cart = [ID]
      }
   

      fetch(`${process.env.REACT_APP_API}/api/updatesser/` + getUser, {
        method: "PATCH",
        body: JSON.stringify(DaataFake),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      })
      .then(res => res.json())
      .then(res => {
        if(res.status === 200)
        {
          alert("Add Product Successfully !");
          window.location.reload();

        }
        else alert(`${res.message}`);

      })

    const idProduct = localStorage.getItem('productId')
    if(idProduct) {
      localStorage.removeItem('productId')
    }
    localStorage.setItem('productId', ID)
  }
  return (
    <>
      <ul className="product-list">
        {guitars.map((guitar, index) => {
          if ((page - 1) * 8 <= index && index < page * 8) {
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
                    Tác giả:{" "}
                    <strong>{guitar.author || "Đang cập nhật ..."}</strong>
                  </p>
                  <p className="product-price">
                    Giá <strong>{guitar.price}đ</strong>
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
                 <button onClick={() => handleGetProductID(guitar._id)}> <Link className="product-btn-buy active">Add to Cart</Link></button>
                 <button> <Link className="product-btn-buy" to={`${url}/detailbook`}>Buy</Link></button>
                </div >
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
export default Page1;
