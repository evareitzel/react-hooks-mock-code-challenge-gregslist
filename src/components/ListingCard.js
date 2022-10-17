import React, {useState} from "react";

function ListingCard({description, image, location, id, onDeleteListing}) {
  const [isFavorite, setIsFavorite] = useState(false)

    function handleFavoriteClick(){
      setIsFavorite(!isFavorite) 
    }

    function handleDeleteClick(){
      fetch(`http://localhost:6001/listings/${id}`, {
        method: 'DELETE'
      })
      .then(r=> r.json())
      .then(() => onDeleteListing(id))
    }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
        {/* "https://via.placeholder.com/300x300" */}
      </div>
      <div onClick={handleFavoriteClick} className="details">
        {isFavorite===true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
