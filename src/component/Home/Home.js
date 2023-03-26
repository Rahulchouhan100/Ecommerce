import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import Shimmer from "../shimmer/Shimmer";
import "./home.css";

const Home = () => {
  const [item, setItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setItem(data);
  };

  const dispatch = useDispatch();
  const handleItem = (product) => {
    dispatch(add(product));
  };

  // search functionality
  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = item.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredItems);

  return item.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input type="text" value={searchTerm} onChange={handleSearchTerm} />
        <button>search</button>
      </div>
      <div className="container">
        {filteredItems.map((product) => (
          <div className="card" key={product?.id}>
            <img src={product?.image} alt="product-image" className="img" />
            <h2>{product.title}</h2>
            <h3> &#8377; {product.price}</h3>
            <button onClick={() => handleItem(product)}>Add to Cart</button>
            <Link to="/single">
              <button>More details</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
