import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our Philosophy" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Indulgence begins here, crafted to bring sweetness to every moment.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          Sultan of Sweetness was created to bring indulgence to every bite.
          Each recipe is crafted with premium ingredients and rich flavours
          inspired by luxury desserts. Our goal is to create sweets that feel
          special, memorable and worth sharing.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Shabaz Akram</p>
        <p className="p__opensans">Baker & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
