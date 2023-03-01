import React, { useState } from "react";

function ListingCard({ id, description, image, location, removeListing }) {

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(isLiked => !isLiked);
  }

  const handleDeleteClick = () => {

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"})
    
      removeListing(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
