import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = ({ id, title, price, image }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${id}`} className="item-link">
        <img src={`http://127.0.0.1:8000${image}`} alt={title} className="item-image" />
        <div className="item-details">
          <h2 className="item-title">{title}</h2>
          <p className="item-price">Price: <span>${price}</span></p>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
