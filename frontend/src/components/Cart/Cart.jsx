import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from '../../makeRequest';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const totalPrice = () => {
        let total = 0;
        products.forEach(item =>
            total += item.quantity * item.price
        );
        return total.toFixed(2);
    };

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    console.log(products);

    return (
        <div className="cart">
            <div className="wrapper">
                <h1>Products in your cart</h1>
                {products?.map((item) => (
                    <div key={item.id}>
                        <div className="item">
                            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="product" />
                            <div className="details">
                                <h1>
                                    {item.title}
                                </h1>
                                <p>
                                    {item.desc?.substring(0, 100)}
                                </p>
                                <div className="price">
                                    {item.quantity} x ₹{item.price}
                                </div>
                            </div>
                            <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
                        </div>
                        <hr />
                    </div>
                ))}
                <div className="total">
                    <span>SUBTOTAL</span>
                    <span>₹{totalPrice()}</span>
                </div>
                {totalPrice() > 0 && (
                    <>
                        <button
                            onClick={handlePayment}
                        >
                            PROCEED TO CHECKOUT
                        </button>

                        <span className="reset" onClick={() => dispatch(resetCart())}>
                            Reset Cart
                        </span>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart