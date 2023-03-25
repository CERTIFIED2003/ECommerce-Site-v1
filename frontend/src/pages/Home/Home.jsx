import React from 'react';
import "./Home.scss";
import { Slider } from '../../components';
import { FeaturedProducts } from "../../components";
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
      <Contact />
    </div>
  )
}

export default Home