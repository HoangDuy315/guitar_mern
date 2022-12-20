import "./QLProduct.scss";
import FormAddProduct from "./formAddProduct/FromAddProduct";
import { useState, useEffect } from "react";
function QLProduct() {
  const [addProduct, setAddProduct] = useState(false);
  const handleChangeAddProduct = () => {
    setAddProduct(!addProduct);
  };

  const [listsProduct, setListsProduct] = useState([]);
  const [numberShow, setNumberShow] = useState(10);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/getallproduct`)
      .then((res) => res.json())
      .then((res) => {
        setListsProduct(res.reverse())
        console.log(res)
      });
  }, []);

  const handleDelete = (selectId) => {

    fetch(`${process.env.REACT_APP_API}/api/deleteproduct/` + selectId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          alert(res.message + " deleted");
          const newlist = listsProduct.filter((item) => item._id !== selectId);
          setListsProduct(newlist);
        } else alert(res.message);
      });
  };

  return (
    <div className="product">
      <div className="product">
        <h1 className="header">Quản Lý Sản Phẩm</h1>
        <button
          className="add-product"
          onClick={() => setAddProduct(!addProduct)}
        >
          + Thêm sản phẩm
        </button>
        {addProduct ? (
          <FormAddProduct onhandleProduct={handleChangeAddProduct}/>
        ) : (
          <>
            <ul className="header-table">
              <li className="stt">STT</li>
              <li className="name">Tên sản phẩm</li>
              <li className="price">Giá tiền</li>
              <li className="sale">Đã bán</li>
              <li className="quantity">Số lượng</li>
              <li className="action">Thao tác</li>
            </ul>
            <ul className="listproduct">

              { listsProduct.map((product, index) => {
                if (index < numberShow) {
                  return (
                    <li className="item" key={product._id}>
                      <p className="stt">{index + 1}</p>
                      <p className="name">{product.name}</p>
                      <p className="price">{product.price} vnd</p>
                      <p className="sale">{product.sale}</p>
                      <p className="quantity">{product.quantity}</p>
                      <div className="action">
                        <button className="edit btn">Sửa</button>
                        <button className="delete btn" onClick={() => handleDelete(product._id)}>Xóa</button>
                      </div>
                    </li>
                  );
                }
              }) 
              }
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default QLProduct;
