import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Experience Luxury Desserts" />
      <h1 className="app__header-h1">The Key To Sweet Indulgence</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Discover handcrafted brownies and cookies inspired by rich flavours,
        premium ingredients and modern luxury. Every bite is designed to deliver
        indulgence, quality and unforgettable taste.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
