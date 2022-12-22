import React from "react";
import "./FromEditProduct.scss";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import storage from "./firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

let dataProduct = {
  name: "",
  quantity: "",
  price: "",
  type: "",
  color: "String",
  urlImg: "",
};


function FromAddProduct({ onhandleProduct, data }) {
  const [file, setFile] = useState();
  const [showprocesss, setShowProcess] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);

  const [product, setProduct] = useState(data);

  const navigate = useNavigate();

  
  const handlesubmit = (e) => {
    e.preventDefault();
    setShowProcess(true);
    if (!file) {
      alert("Bạn chưa thêm hình !");
      setShowProcess(false);
      return;
    }

    const storageRef = ref(storage, `imgGuitar/${file.name}`);
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
          setProduct({...product, urlImg: downloadURL});
          console.log(product);
          if (product.urlImg) {
            fetch(`${process.env.REACT_APP_API}/api/updateProduct/` + product._id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(product),
            })
              .then((res) => res.json())
              .then((res) => {
                if (res.status === 200) {
                  onhandleProduct()
                  alert(res.message);
                  navigate("/guitar", { replace: true });

                } else {
                  alert(res.message);
                }
              });
          }
        });
      }
    );
  };

  return (
    <form onSubmit={handlesubmit}>
      <fieldset className="product-container">
        <legend className="input-title">Edit A Product</legend>

        <div className="input-product">
          <label>Name:</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
          />
        </div>
        <div className="input-product">
          <label>Quantity:</label>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => setProduct({...product, quantity: e.target.value})}
          />
        </div>
        <div className="input-product">
          <label>Price:</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})}
          />
        </div>
        <div className="input-product">
          <label>Type:</label>
          <input
            type="text"
            value={product.type}
            onChange={(e) => setProduct({...product, type: e.target.value})}
          />
        </div>
        <div className="input-product">
          <label>Color:</label>
          <input
            type="text"
            value={product.color}
            onChange={(e) => setProduct({...product, color: e.target.value})}
          />
        </div>
        <div className="input-product direc-row">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          {showprocesss ? (
            <p className="innerbar" style={{ width: `${progresspercent}%` }}>
              {progresspercent}%
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="btn-button">
          <button className="btn-button-add__product add">Update product</button>
          <button className="btn-button-add__product" onClick={onhandleProduct}>
            Cancel
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default FromAddProduct;
