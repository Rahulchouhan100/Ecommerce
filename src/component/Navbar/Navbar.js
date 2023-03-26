import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart);
  return (
    <div className="nav">
      <Link to="/">
        <section className="logo">RStore</section>
      </Link>

      <section>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cartItems?.length}</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
