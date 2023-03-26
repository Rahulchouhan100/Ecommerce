import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";
import "./cart.css";

const Cart = () => {
  const getProduct = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleItemRemove = (product) => {
    dispatch(remove(product));
  };
  return (
    <>
      <h3 className="cart-heading">Cart Item</h3>
      <div className="cart-container">
        {getProduct.map((product) => (
          <div className="card-container">
            <img src={product.image} alt="image" />
            <h3>{product.title}</h3>
            <h4> &#8377; {product.price}</h4>
            <button onClick={() => handleItemRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
