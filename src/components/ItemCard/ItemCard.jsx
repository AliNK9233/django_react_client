import React from 'react';
import './ItemCard.css';
import { Link } from 'react-router-dom'; // Import Link

const ItemCard = ({ id, title, price, image }) => {
  // Prepend the base URL for media to the image path
  const imageUrl = image ? `${window.location.origin}${image}` : '/default_image.jpg'; // Fallback to a default image if no image is provided

  return (
    <div className="item-card">
      <Link to={`/item/${id}`} className="item-link">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>Price: ${price}</p>
      </Link>
    </div>
  );
};

export default ItemCard;
