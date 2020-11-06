import React from "react";
import { Slider } from "../styles/feature-card.stc";
import { site_data } from "../data/site-data";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const FeatureCard = () => {
  const craete_chunk = () => {
    return [].concat.apply(
      [],
      site_data.feature_card.map(function (elem, i) {
        return i % 3 ? [] : [site_data.feature_card.slice(i, i + 3)];
      })
    );
  };
  return (
    <div className="my-5">
      <div className="container">
        <Slider>
          <OwlCarousel className="owl-theme" loop margin={10} autoplay autoplayTimeout={1000}>
            {craete_chunk().map((i) => i.map((i, k) => <p className='item'>{i.id}</p>))}
          </OwlCarousel>
        </Slider>
      </div>
    </div>
  );
};

export default FeatureCard;
