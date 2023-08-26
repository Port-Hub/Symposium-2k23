import React from "react";
import "./Card.css";
function Card({ image, date, name, description, id, rules }) {
  return (
    <div data-hash={id} className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src={image} alt="" />
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">{date}</span>
        <div className="blog-slider__title">{name}</div>
        <b>Description</b>
        <div className="blog-slider__text">{description}</div>
        <div>Rules</div>
        <div className="blog-slider__text">{rules}</div>
        <a href="#" className="blog-slider__button">
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default Card;
