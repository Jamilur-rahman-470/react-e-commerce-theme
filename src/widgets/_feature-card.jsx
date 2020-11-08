import React, { createRef } from "react";
import { Slider } from "../styles/feature-card.stc";
import { site_data } from "../data/site-data";
import TinySlider from "tiny-slider-react";
import {ArrowLeft, ArrowRight} from 'react-feather'


const FeatureCard = () => {
  const settings = {
    lazyload: true,
    controls: false,
    mouseDrag: true,
    loop: true,
    items: 3,
    gutter: 5,
    nav: false,
    responsive: {
      430: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  };
  let ref = createRef();
  return (
    <div className="my-5">
      <div className="container">
        <Slider>
          <div className="slider-btns">
            <button
              type="button"
              onClick={() => ref.current.slider.goTo("prev")}
              id="prev-slider-nav"
            >
              <ArrowLeft size={20} color='#fff'/>
            </button>
            <button
              type="button"
              onClick={() => ref.current.slider.goTo("next")}
              id="next-slider-nav"
            >
              <ArrowRight size={20} color='#fff'/>
            </button>
          </div>
          <TinySlider settings={settings} ref={ref}>
            {site_data.feature_card.map((i, k) => (
              <p key={k}>{i.heading}</p>
            ))}
          </TinySlider>
        </Slider>
      </div>
    </div>
  );
};

export default FeatureCard;
