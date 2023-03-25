import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const image = [
  "https://i.pinimg.com/736x/c2/7a/ee/c27aee6b4b29b5c255210e9b644abbff.jpg",
  "https://cdn.shopify.com/s/files/1/0351/0832/3464/products/image00005_600x.jpg?v=1676636267"
];

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      {/* LEFT */}
      <div className="left">
        <div className="images">
          <img src={image[0]} alt="product" onClick={() => setSelectedImg(0)} />
          <img src={image[1]} alt="product" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={image[selectedImg]} alt="product" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="right">
        <h1>White T-Shirt</h1>
        <span className="price">$8</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel impedit at quas, nulla reiciendis perspiciatis recusandae provident, quod sapiente velit id fugit pariatur labore cumque. Vero reprehenderit ipsum consectetur incidunt.
          Iure, ut nihil, soluta modi minus error perspiciatis, dolorum dicta nulla enim nobis eaque. Deserunt totam consequuntur neque officiis in cupiditate officia deleniti id corporis cumque. Placeat quae cupiditate aspernatur.
        </p>
        <div className="quantity">
          <button onClick={() => quantity > 1 && setQuantity(prev => prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Tata</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product