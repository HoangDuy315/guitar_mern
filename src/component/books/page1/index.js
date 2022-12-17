import "./Page1.css";
import { useState, useEffect } from "react";
import {Link, useLocation} from 'react-router-dom'

function Page1({ page }) {
  let url = useLocation()
  const [guitars, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/getallproduct`)
    .then((res) => res.json())
    .then((res) =>{
        setBooks(res.reverse())
        console.log(res)
    })
  }, [])
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
                  <p className="product-available">
                    {guitar.availableNumber
                      ? `Còn: ${guitar.availableNumber} quyển`
                      : "Hết Hàng !"}
                  </p>
                  <p className="product-soldNumber">
                    {guitar.soldNumber
                      ? `Đã bán: ${guitar.soldNumber} quyển`
                      : "Chưa bán được gì !"}
                  </p>
                </div>
                <Link className="product-btn-buy" to={`${url}/detailbook`}>Buy</Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
export default Page1;
