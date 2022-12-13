import "./QLProduct.scss";
import FormAddProduct from "./formAddProduct/FromAddProduct";
import { useState } from "react";
function QLProduct() {
  const [addProduct, setAddProduct] = useState(false)
  
  return (
    <div className="product">
      <h1 className="header">Quản Lý Sản Phẩm</h1>
      <button className="add-product" onClick={() => setAddProduct(!addProduct)}>Thêm sản phẩm</button>
      {addProduct ? <FormAddProduct /> : <></>}
      
      <ul className="header-table">
        <li className="stt">STT</li>
        <li className="name">Tên sản phẩm</li>
        <li className="price">Giá tiền</li>
        <li className="sale">Đã bán</li>
        <li className="quantity">Số lượng</li>
        <li className="action">Thao tác</li>
      </ul>
      <ul className="listproduct">
      <li className="item">
          <p className="stt">1</p>
         <p className="name">Name</p>
          <p className="price">50000000 d</p>
          <p className="sale">5</p>
          <p className="quantity">10</p>
          <div className="action">
            <button className="edit btn">Sửa</button>
            <button className="delete btn">Xóa</button>
          </div>
        </li>
        <li className="item">
          <p className="stt">1</p>
         <p className="name">Name</p>
          <p className="price">50000000 d</p>
          <p className="sale">5</p>
          <p className="quantity">10</p>
          <div className="action">
            <button className="edit btn">Sửa</button>
            <button className="delete btn">Xóa</button>
          </div>
        </li>
        <li className="item">
          <p className="stt">1</p>
         <p className="name">Name</p>
          <p className="price">50000000 d</p>
          <p className="sale">5</p>
          <p className="quantity">10</p>
          <div className="action">
            <button className="edit btn">Sửa</button>
            <button className="delete btn">Xóa</button>
          </div>
        </li>
        <li className="item">
          <p className="stt">1</p>
         <p className="name">Name</p>
          <p className="price">50000000 d</p>
          <p className="sale">5</p>
          <p className="quantity">10</p>
          <div className="action">
            <button className="edit btn">Sửa</button>
            <button className="delete btn">Xóa</button>
          </div>
        </li>

      </ul>
    </div>
  );
}

export default QLProduct;
