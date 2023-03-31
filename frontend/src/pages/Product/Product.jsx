import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const id = useParams().id;
  // eslint-disable-next-line
  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  );

  return (
    <div className="product">
      {loading
        ? "loading"
        : (
          <>
            {/* LEFT */}
            <div className="left">
              <div className="images">
                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="product" onClick={() => setSelectedImg("img")} />
                {data?.attributes?.img2?.data &&
                  <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="product" onClick={() => setSelectedImg("img2")} />
                }
              </div>
              <div className="mainImg">
                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="product" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">${data?.attributes?.price}</span>
              <p>
                {data?.attributes?.desc}
              </p>
              <div className="quantity">
                <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                {quantity}
                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
              </div>
              <button className="add" onClick={() => dispatch(addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              }))}>
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
          </>
        )}
    </div>
  )
}

export default Product