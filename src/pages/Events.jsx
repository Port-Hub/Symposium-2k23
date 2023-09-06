import React from "react";

import Flakes from "../components/Background";
import Cards from "../components/Cards";
import eventDetails from "../components/eventDetails";
import AudioPlayer from "../../public/audio/audio";
const Events = () => {
  return (
    <div>
      
      <Flakes />
      <Cards cardData={eventDetails} />
      <AudioPlayer/>
    </div>
  );
};

export default Events;
