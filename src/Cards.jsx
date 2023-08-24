import React from "react";
import { ReactSVG } from "react-svg";
import PathSVG from "./assets/path.svg";
// import "./Card.css"; // Import your CSS file

const Cards = (props) => {
  return (
    <div className="z-40">
      <div
        id={props.id}
        className="z-40 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 place-items-center gap-y-20 bg-base-300 shadow-2xl shadow-blue-500 rounded-3xl mx-auto p-8"
      >
        <div className="z-40 space-y-5">
          <img src={props.image} className="h-60 rounded-xl z-40" />
          <div className="flex flex-row gap-x-4 items-center">
            {/* <FontAwesomeIcon icon={faPeopleGroup} /> */}
            <p className="font-poppins">Team of {props.number}</p>
          </div>
          <div className="flex flex-row gap-x-4 items-center z-40">
            {/* <FontAwesomeIcon icon={faHouse} /> */}
            <p className="font-poppins">Venue : {props.venue}</p>
          </div>
          <div className="flex flex-row gap-x-4 items-center z-40">
            {/* <FontAwesomeIcon icon={faClock} /> */}
            <p className="font-poppins">Time : {props.time}</p>
          </div>
        </div>
        <div className="z-40 space-y-10 m-5">
          <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 font-poppins bg-clip-text text-3xl font-extrnumber={EArray[0].number} venue={EArray[0].venue} time={EArray[0o.time}ld text-transparent z-40 font-bold">
            Description
          </h2>
          <p className="z-40 font-poppins text-justify py-0">
            {props.description}
          </p>
          <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 font-poppins bg-clip-text text-3xl font-extrnumber={EArray[0].number} venue={EArray[0].venue} time={EArray[0o.time}ld text-transparent z-40 font-bold">
            Rules
          </h2>
          <div className="z-40 font-poppins text-justify">{props.rules}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
