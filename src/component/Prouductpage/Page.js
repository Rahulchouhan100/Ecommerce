import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add } from "../../store/cartSlice";

import "./page.css";

const Page = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
    setUpdatedPrice(data.price);
  };

  const handleIncreasePrice = () => {
    setUpdatedPrice((prevPrice) => prevPrice * 2);
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecreasePrice = () => {
    if (updatedPrice > product.price) {
      setUpdatedPrice((prevPrice) => prevPrice / 2);
      setCount((prevCount) => prevCount - 1);
    }
  };

  const addHanler = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      <div>
        {product ? (
          <>
            <div className="page-container">
              <section>
                <img src={product?.image} alt={product.title} className="img" />
              </section>
              <section>
                <h2>{product?.title}</h2>
                <h3>{product?.description}</h3>
                <h4>Rating {product?.rating?.rate} &#9733;</h4>
                <p>Price: &#8377; {updatedPrice}</p>
                <div className="counter-container">
                  <button onClick={handleDecreasePrice}>-</button>
                  <p className="count">{count}</p>
                  <button onClick={handleIncreasePrice}>+</button>
                </div>
                <button
                  className="addtocart"
                  onClick={() => addHanler(product)}
                >
                  Add to Cart
                </button>
              </section>
            </div>
          </>
        ) : (
          <p>Loading... please wait</p>
        )}
      </div>
    </div>
  );
};

export default Page;
