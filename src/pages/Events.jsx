import Flakes from "../components/Background";
import Cards from "../components/Cards";
import eventDetails from "../components/eventDetails";
import AudioPlayer from "../../public/audio/audio";
import '../components/card.css'
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    const a = document.createElement("a");
    a.href = "#popup";
    a.click();
  }, []);

  return (
    <>
      <div className="modal" id="popup">
        <div className="modal-box text-primary p-20">
          <h3 className="font-bold text-lg">
            Conducted by the Department of Computer Science
          </h3>
          <p className="py-4">Rules</p>
          <ul className="list-disc list-inside">
            <li>Only Engineering Students are allowed</li>
            <li>
              Bring your Bonafide certificate and college ID-Card on event day.
            </li>
            <li>Formal Dress Code is mandatory</li>
          </ul>
          <div className="modal-action">
            <a href="#" className="btn">
              Close
            </a>
          </div>
        </div>
      </div>
      <div>
        <Flakes />
        <Cards cardData={eventDetails} />
        <div className="flex flex-col items-center justify-center w-screen">
          {/* <p className="text-primary blog-slider__title"> Want to Play a fun quiz???</p> */}
          <a href="https://crossword-techczar.netlify.app" className="blog-slider__button"><p className="blog-slider__title m-0 text-3xl">Access a fun puzzle</p></a>
        </div>
        <AudioPlayer />
      </div>
    </>
  );
};

export default Events;
