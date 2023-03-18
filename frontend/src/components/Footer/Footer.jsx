import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">

            {/* TOP */}
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, deleniti hic! Explicabo debitis error
                        voluptatum et, amet eius omnis eveniet vel esse voluptas illum laboriosam ad consectetur? Dolorum, veniam neque.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, deleniti hic! Explicabo debitis error
                        voluptatum et, amet eius omnis eveniet vel esse voluptas illum laboriosam ad consectetur? Dolorum, veniam neque.
                    </span>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="bottom">
                <div className="left">
                    <span className="logo">
                        CertyStore
                    </span>
                    <span className="purpose">
                        For education purpose only.
                        Check out the source code{` `}
                        <Link style={{ textDecoration: "underline" }} className="link" to="https://github.com/certified2003/ECommerce-Site-v1">here</Link>.
                    </span>
                </div>
                <div className="right">
                    <img src="/assets/payment.png" alt="payment" />
                </div>
            </div>
        </div>
    )
}

export default Footer