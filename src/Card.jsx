import React from "react";
import "./Card.css"; // Import your CSS file

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2>Card Title</h2>
          <p>This is a description of the card content.</p>
        </div>
        <div className="card-details">
          <h2>Details</h2>
          <p>Additional details about the card.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
