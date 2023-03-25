import React, { useState } from 'react';
import "./Slider.scss";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const data = [
    "https://wallpapercave.com/wp/wp3376810.jpg",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
    };

    setTimeout(() => {
        if (currentSlide === data.length - 1) setCurrentSlide(0);
        setCurrentSlide(prev => prev + 1);
    }, 10000);

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((item, i) => (
                    <img src={item} alt="product" key={i} />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon style={{ color: "#2879FE" }} />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon style={{ color: "#2879FE" }} />
                </div>
            </div>
        </div>
    )
}

export default Slider