// import React from "react";

// import Cards from "./components/Cards";
import Flakes from "./components/Background";

// const App = () => {
//   return (
//     <div>
//       <Flakes />
//       <Cards />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Cards from "./components/Cards";
import "./App.css";

const cardData = [
  {
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg",
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
  },
  // Add more card data objects here
  {
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg",
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg",
    date: "26 December 2019",
    title: "Lorem Ipsum Dolor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
  },
];

function App() {
  return (
    <div className="App">
      <Flakes />
      <Cards cardData={cardData} />
    </div>
  );
}

export default App;
