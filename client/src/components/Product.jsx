import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Product = () => {
  const [Listguitars, setListguitars] = useState([]);
  const [numberItems, setNumberItems] = useState(8);
  useEffect(() => {
    fetch("http://localhost:4000/product/getproduct")
      .then((res) => res.json())
      .catch(error => {
        console.log(error)
      })
      .then((res) => {
        setListguitars(res)
      });
      
  }, []);
  return (
    <div>
      <div className="container mt-5 py-0">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw-bold text-warning">PRODUCT</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container py-0">
        <div className="row justify-content-around">
          {Listguitars.map((item, index) => {
            if (index < numberItems)
              return (
                <div key={index}
                  class="card border-1 my-4 py-3"
                  style={{ width: " 18rem" }}
                >
                  <img src={item.imgUrl} class="card-img-top" alt="" />
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold">{item.title}</h5>
                    <p className="lead card-text text-warning">{item.price}</p>
                    <a
                      href="/BuyNow"
                      class="btn btn-outline-warning rounded-pill"
                    >
                      Buy now
                    </a>
                    <a
                      href="/cart"
                      class="ms-2 btn btn-outline-secondary rounded-pill"
                    >
                      <BsFillCartFill />
                    </a>
                  </div>
                </div>
              );
          })}
        </div>
  
        <div className="more-options" style={{display: "flex", gap: "32px", justifyContent: "center"}}>
          
         {numberItems !== 8 ? <p onClick={() => setNumberItems(numberItems - 4)} className="more-options--item" style={{fontSize: "18px", fontWeight: 600, cursor: "pointer"}}>... Ẩn bớt </p>: <></>} 
         <p onClick={() => (numberItems <= Listguitars.length) ? setNumberItems(numberItems + 4) : setNumberItems(numberItems)} className="more-options--item" style={{fontSize: "18px", fontWeight: 600, cursor: "pointer"}}>Xem thêm ...</p>

        </div>
      </div>
    </div>
  );
};

export default Product;
