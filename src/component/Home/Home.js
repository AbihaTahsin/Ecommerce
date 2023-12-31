import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";

const product = {
    name: "bag",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "1200",
    _id: "1022"
}
const Home = () => {
  return (
    <Fragment>
        
        <MetaData title="Sharollo" />

        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
          </div>

    </Fragment>
  );
};

export default Home;
