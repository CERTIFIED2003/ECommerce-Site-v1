import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">

                {/* LEFT */}
                <div className="left">
                    <div className="item">
                        <img src="/assets/en.png" alt="english" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/women">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/men">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/children">Children</Link>
                    </div>
                </div>

                {/* CENTER */}
                <div className="center">
                    <Link className="link" to="/">CERTYSTORE</Link>
                </div>

                {/* RIGHT */}
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    {/* <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div> */}
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Outlets</Link>
                    </div>
                    <div className="icons">
                        {/* <SearchIcon /> */}
                        <PersonOutlineOutlined />
                        {/* <FavoriteBorderOutlined /> */}
                        <div className="cartIcon">
                            <ShoppingCartOutlined />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar