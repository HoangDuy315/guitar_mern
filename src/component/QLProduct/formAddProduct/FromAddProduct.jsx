import React from 'react'
import "./FromAddProduct.scss"
import { useState } from 'react'


function FromAddProduct() {
    const [test,settest] = useState()
    console.log(test)
  return (
    <fieldset className='product-container'>
        <legend className='input-title'>Add A New Product</legend>

        <div className='input-product'>
            <label>Name:</label>
            <input type="text"/>
        </div>
        <div className='input-product'>
            <label>Quantity:</label>
            <input type="text"/>
        </div>
        <div className='input-product'>
            <label>Price:</label>
            <input type="text"/>
        </div>
        <div className='input-product'>
            <label>Type:</label>
            <input type="text"/>
        </div>
        <div className='input-product'>
            <label>Color:</label>
            <input type="text"/>
        </div>
        <div className='input-product'>
            <label>Image URL:</label>
            <input type="file" onChange={(e) => settest(e.target.value)}/>
        </div>
        <div className='btn-button'>
            <button className='btn-button-add__product'>Add product</button>
        </div>
    </fieldset>
    
  )
}

export default FromAddProduct