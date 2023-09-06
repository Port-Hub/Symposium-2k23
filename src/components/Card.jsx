import React from "react";
import "./Card.css";

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
  function Link({ id }) {
    if (id === "manuscript") {
      return "https://forms.gle/cgGnNSwf1gS2QXhUA";
    } else {
      return "https://docs.google.com/forms/d/e/1FAIpQLSecgCB2LtCqQU6G8sr1nzfrXdEwt_KjG2ZMuIRFDn6RHgO3TQ/viewform";
    }
  }
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
