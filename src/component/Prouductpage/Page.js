import React, { useState } from "react";
import "./page.css";

const Page = () => {
  const [count, setCount] = useState(1);

  const handleCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="page-container">
      <section>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="image"
          className="img"
        />
      </section>
      <section>
        <h3>title</h3>
        <p>
          "Slim-fitting style, contrast raglan long sleeve, three-button henley
          placket, light weight & soft fabric for breathable and comfortable
          wearing. And Solid stitched shirts with round neck made for durability
          and a great fit for casual fashion wear and diehard baseball fans. The
          Henley style round neckline includes a three-button placket."
        </p>
        <p>rating 4.9</p>
        <div className="counter-container">
          <button onClick={() => handleCount()}>-</button>
          <p className="count">{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <button className="addtocart">Add to cart</button>
      </section>
    </div>
  );
};

export default Page;
