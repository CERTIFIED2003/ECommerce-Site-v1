import React from 'react';
import "./Home.scss";
import { Slider } from '../../components';
import { FeaturedProducts } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Trending" />
    </div>
  )
}

export default Home