import React from 'react';
import "./Home.scss";
import { Slider } from '../../components';
import { FeaturedProducts } from "../../components";
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
    </div>
  )
}

export default Home