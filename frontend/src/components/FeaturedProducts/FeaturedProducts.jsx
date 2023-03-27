import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*&[filters][type][$eq]=${type}`, {
                    headers: {
                        Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`
                    }
                });
                setData(res.data.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [type]);

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque aspernatur iste ipsum tempora soluta aut non nihil
                    numquam delectus itaque? Aliquid amet dolorem quisquam
                    et voluptate rerum, doloribus corporis beatae?
                </p>
            </div>
            <div className="bottom">
                {data.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts