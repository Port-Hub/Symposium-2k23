import React from "react";
import "./Card.css";
function Card({ imageUrl, date, name, text, id }) {
  return (
    <div data-hash={id} className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">{date}</span>
        <div className="blog-slider__title">{name}</div>
        <div className="blog-slider__text">{text}</div>
        <a href="#" className="blog-slider__button">
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default Card;
