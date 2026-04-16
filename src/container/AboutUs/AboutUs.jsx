import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We craft premium brownies and cookies inspired by rich Arabian
          flavours and modern dessert trends. At Sultan of Sweetness, every bite
          is made using high-quality ingredients, combining indulgent chocolate,
          pistachio kunafa, Biscoff and other luxurious flavours to create
          unforgettable treats.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_gold flex__center">
        <img src={images.gold} alt="about_gold" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Sultan of Sweetness was created with a passion for bringing unique and
          luxurious desserts to everyone. Inspired by Middle Eastern sweets and
          classic favourites, our journey began with a simple idea — elevate
          everyday brownies and cookies into premium experiences.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
