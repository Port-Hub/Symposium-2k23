import React from "react";
import "./Card.css";
function Card({ imageUrl, date, title, text }) {
  return (
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">{date}</span>
        <div className="blog-slider__title">{title}</div>
        <div className="blog-slider__text">{text}</div>
        <a href="#" className="blog-slider__button">
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default Card;