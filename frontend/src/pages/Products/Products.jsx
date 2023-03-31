import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [maxDisplayPrice, setMaxDisplayPrice] = useState(5000);
  const [sort, setSort] = useState("desc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [displayB, setDisplayB] = useState(false);
  const [apply, setApply] = useState(false);

  // eslint-disable-next-line
  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter(item => item !== value)
    );
  };

  const handleApply = () => {
    setMaxPrice(maxDisplayPrice);
    setApply(true);
  };

  return (
    <div className="products">
      {loading
        ? "loading"
        : <>
          <div className="left">
            <div className="filterItem">
              <h2>
                Categories
              </h2>
              {data?.map(item => (
                <div className="inputItem" key={item.id}>
                  <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
            <div className="filterItem">
              <h2>
                Filter by price
              </h2>
              <div className="inputItem">
                <span>0</span>
                <input type="range" min={0} max={5000} onChange={(e) => {
                  setApply(false);
                  setMaxDisplayPrice(e.target.value);
                  setDisplayB(true);
                }} />
                <span>{maxDisplayPrice}</span>
                {displayB && <button onClick={handleApply}>Apply</button>}
              </div>
            </div>
            <div className="filterItem">
              <h2>
                Sort by
              </h2>
              <div className="inputItem">
                <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
                <label htmlFor="asc">Price (Lowest First)</label>
              </div>
              <div className="inputItem">
                <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")} />
                <label htmlFor="desc">Price (Highest First)</label>
              </div>
            </div>
          </div>
          <div className="right">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="catImg"
              alt="category"
            />
            <List
              catId={catId}
              maxPrice={maxPrice}
              sort={sort}
              subCats={selectedSubCats}
              apply={apply}
            />
          </div>
        </>
      }
    </div>
  )
}

export default Products