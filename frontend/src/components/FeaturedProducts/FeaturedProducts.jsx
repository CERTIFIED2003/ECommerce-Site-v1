import React from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
    // eslint-disable-next-line
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

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
                {error
                    ? "Something went wrong! Try again later..."
                    : loading
                        ? "loading"
                        : data?.map((item) =>
                            <Card key={item.id} item={item} />
                        )
                }
            </div>
        </div>
    )
}

export default FeaturedProducts