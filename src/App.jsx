import Flakes from "./components/Background";

import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import eventDetails from "./components/eventDetails";
import Cards from "./components/Cards";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Flakes />
        <Cards cardData={eventDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
