import React from "react";

import Flakes from "../components/Background";
import Cards from "../components/Cards";
import eventDetails from "../components/eventDetails";
const Events = () => {
  return (
    <div>
      <Flakes />
      <Cards cardData={eventDetails} />
    </div>
  );
};

export default Events;
