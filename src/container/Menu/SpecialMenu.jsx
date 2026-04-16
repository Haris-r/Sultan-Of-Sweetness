import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Luxury desserts handcrafted to deliver indulgence in every bite." />
      <h1 className="headtext__cormorant">This Week&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Brownies</p>
        <div className="app__specialMenu_menu_items">
          {data.brownies.map((brownies, index) => (
            <MenuItem
              key={brownies.title + index}
              title={brownies.title}
              price={brownies.price}
              tags={brownies.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cookies</p>
        <div className="app__specialMenu_menu_items">
          {data.cookies.map((cookies, index) => (
            <MenuItem
              key={cookies.title + index}
              title={cookies.title}
              price={cookies.price}
              tags={cookies.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <a
        download="custom-filename.jpg"
        href={images.menuDownload}
        title="ImageName"
      >
        <button
          type="button"
          className="custom__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </button>
      </a>
    </div>
  </div>
);

export default SpecialMenu;
