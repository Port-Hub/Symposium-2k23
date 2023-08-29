import React from "react";
import "./Card.css";
import "./Link";
import Link from "./Link";
function Card({
  image,
  date,
  name,
  description,
  id,
  rules,
  venue,
  number,
  time,
}) {
  return (
    <div data-hash={id} className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src={image} alt="" />
      </div>

      <div className="blog-slider__content">
        <span className="blog-slider__code">{date}</span>
        <div className="blog-slider__title">{name}</div>
        <div className="sub-head">Description</div>
        <div className="blog-slider__text">{description}</div>
        <div className="sub-head">Rules</div>
        <div className="blog-slider__text">{rules}</div>
        <div className="blog-venue">Venue : {venue}</div>
        <div className="blog-number">Team-size : {number}</div>
        <div className="blog-time">Time : {time}</div>
        <a href={Link({ id })} className="blog-slider__button" target="_blank">
          Register
        </a>
      </div>
    </div>
  );
}

export default Card;
