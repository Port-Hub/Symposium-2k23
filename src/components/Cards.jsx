import { useEffect } from "react";
import "./Card.css";
import Card from "./Card";
function Cards({ cardData }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    var swiper = new Swiper(".blog-slider", {
      spaceBetween: 60,
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
      hashNavigation: {
    replaceState: true,
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
              image={card.image}
              name={card.name}
              description={card.description}
              id={card.id}
              rules={card.rules}
              venue={card.venue}
              time={card.time}
              number={card.number}
            />
          ))}
        </div>
        <div className="blog-slider__pagination"></div>
      </div>
    </div>
  );
}

export default Cards;
