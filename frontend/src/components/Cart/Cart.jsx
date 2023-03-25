import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const data = [
    {
        id: 1,
        desc: "Beautiful hand crafted Tuxedo",
        img: "https://wallpapercave.com/wp/wp3376810.jpg",
        img2: "https://w0.peakpx.com/wallpaper/143/88/HD-wallpaper-man-in-suit-suit-male-model-interior-black-tie-man-chair-business.jpg",
        title: "Tuxedo",
        category: "tuxedo",
        isNew: true,
        oldPrice: 30,
        price: 22,
    },
    {
        id: 2,
        desc: "Awesome summer T-Shirt",
        img: "https://wallpapercrafter.com/sizes/1920x1080/207147-man-male-floral-and-shirt-hd.jpg",
        img2: "https://images.unsplash.com/photo-1511039912745-8bfa0bc56aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxvcmFsJTIwc2hpcnR8ZW58MHx8MHx8&w=1000&q=80",
        title: "Shirt",
        category: "shirt",
        isNew: true,
        oldPrice: 4,
        price: 3,
    }
];

const Cart = () => {
    return (
        <div className="cart">
            <div className="wrapper">
                <h1>Products in your cart</h1>
                {data?.map(item => (
                    <div className="item" key={item.id}>
                        <img src={item.img} alt="product" />
                        <div className="details">
                            <h1>
                                {item.title}
                            </h1>
                            <p>
                                {item.desc?.substring(0, 100)}
                            </p>
                            <div className="price">
                                1 x ${item.price}
                            </div>
                        </div>
                        <DeleteOutlinedIcon className="delete" />
                    </div>
                ))}
                <div className="total">
                    <span>SUBTOTAL</span>
                    <span>$25</span>
                </div>
                <button>
                    PROCEED TO CHECKOUT
                </button>
                <span className="reset">
                    Reset Cart
                </span>
            </div>
        </div>
    )
}

export default Cart