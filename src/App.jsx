import Flakes from "./components/Background";

import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import Cards from "./components/Cards";
import "./App.css";

const cardData = [
  {
    id: "one",
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg",
    date: "26 December 2019",
    title: "One",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
  },

  {
    id: "two",
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg",
    date: "26 December 2019",
    title: "Two",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
  },
  {
    id: "three",
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg",
    date: "26 December 2019",
    title: "Three",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Flakes />
        <Cards cardData={cardData} />
      </div>
    </BrowserRouter>
  );
}

export default App;
