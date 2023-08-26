import { useEffect } from "react";
import "./Card.css";
import Card from "./Card";
function Cards({ cardData }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    var swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    })`;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="App">
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              date={card.date}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
        <div className="blog-slider__pagination"></div>
      </div>
    </div>
  );
}

export default Cards;
