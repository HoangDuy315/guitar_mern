import React from "react";
import "./FromAddProduct.scss";

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


function FromAddProduct({ onhandleProduct }) {
  const [file, setFile] = useState();
  const [showprocesss, setShowProcess] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");

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


          dataProduct = {
            name: name,
            quantity: quantity,
            price: price,
            type: type,
            color: color,
            urlImg: downloadURL,
          }
          console.log(dataProduct);
          if (dataProduct.urlImg) {
            fetch(`${process.env.REACT_APP_API}/api/addProduct`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataProduct),
            })
              .then((res) => res.json())
              .then((res) => {
                if (res.status === 200) {
                  onhandleProduct()
                  alert(res.message);

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
        <legend className="input-title">Add A New Product</legend>

        <div className="input-product">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-product">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="input-product">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-product">
          <label>Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="input-product">
          <label>Color:</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
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
          <button className="btn-button-add__product add">Add product</button>
          <button className="btn-button-add__product" onClick={onhandleProduct}>
            Cancel
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default FromAddProduct;
