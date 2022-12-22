import "./Cart.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart() {
  const [user, setUser] = useState();
  const [listItems, setListItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [shipping, setShipping] = useState(5.05)
  const userID = localStorage.getItem("userId");


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/getoneuser/` + userID)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setListItems(res.Cart)
        setSubtotal(listItems.reduce((init, current) =>  init + current[0].price * current[1],0 ))
        setTotal(subtotal + shipping)
      });
  }, []);
  useEffect(()=> {
    setSubtotal(listItems.reduce((init, current) =>  init + current[0].price * current[1],0 ))
    setTotal(subtotal + shipping)


  }, [listItems])

  const onChangeTotal = () => {
    const sum = listItems.reduce((init, current) =>  init + current[0].price * current[1],0 )
    setSubtotal(sum)
    setTotal(sum + shipping)
  }

  const handleDeleteProduct = (indexItem) => {
    const newListCart = listItems.filter((item, index)=> index !== indexItem)
    
    fetch(`${process.env.REACT_APP_API}/api/updateUser/` + userID, {
      method: "PUT",
      body: JSON.stringify({Cart: newListCart}),
      headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === 200)
      {
        alert("Xoa Thanh Cong !");
        window.location.reload();
        setListItems(newListCart)
      }
      else alert(`${res.message}`);

    })
    console.log(newListCart)
  }

  return (
    <div class="cart-container">
      <div class="row">
        <div class="col-sm-12 col-md-10 col-md-offset-1">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th class="text-center">Price</th>
                <th class="text-center">Total</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-sm-8 col-md-6" />
              </tr>

              {listItems ?
                 listItems.map((item, index) => (
                  <tr key={index}>
                    <td class="col-md-6">
                      <div class="media">
                        <div class="media-body">
                          <h4 class="media-heading">
                            <p href="#">{item[0].name}</p>
                          </h4>
                          <h5 class="media-heading">
                            {" "}
                            <p href="#">{item[0].type}</p>
                          </h5>
                          <span>Color: </span>
                          <span class="text-warning">
                            <strong>{item[0].color}</strong>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class="col-md-1" style={{ textAlign: "center" }}>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        value={item[1]}
                        onChange= {(e) => {
                          if(e.target.value >= 0)
                          {
                          const newQuantites = [...listItems]
                          newQuantites[index][1] = e.target.value
                          setListItems(newQuantites)

                          
                          onChangeTotal()
                        }

                        }}
                      />
                    </td>
                    <td class="col-md-1 text-center">
                      <strong>$ {item[0].price}</strong>
                    </td>
                    <td class="col-md-1 text-center">
                      <strong>$ {item[0].price * item[1]}</strong>
                    </td>
                    <td class="col-md-1">
                      <button type="button" class="btn btn-danger" onClick={() => handleDeleteProduct(index)}>
                        <span class="glyphicon glyphicon-remove"></span> Remove
                      </button>
                    </td>
                  </tr>
                )
                ) : <></>}
              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td>
                  <h5>Subtotal</h5>
                </td>
                <td class="text-right">
                  <h5>
                    <strong>$ {subtotal} </strong>
                  </h5>
                </td>
              </tr>
              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td>
                  <h5>Estimated shipping</h5>
                </td>
                <td class="text-right">
                  <h5>
                    <strong>$ {shipping}</strong>
                  </h5>
                </td>
              </tr>
              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td>
                  <h3>Total</h3>
                </td>
                <td class="text-right">
                  <h3>
                    <strong>$ {total}</strong>
                  </h3>
                </td>
              </tr>
              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td>
                  <Link type="button" class="btn btn-default" to="/guitar">
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    Continue Shopping
                  </Link>
                </td>
                <td>
                  <Link to="/checkout">
                    <button type="button" class="btn btn-success">
                      Checkout <span class="glyphicon glyphicon-play"></span>
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
