import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import MessageForm from '../components/MessageForm/MessageForm';
import './ItemDetailsPage.css';

const ItemDetailsPage = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/${id}/`)
      .then((response) => {
        setItemDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching item details:', error);
        setError('Failed to load item details.');
      });
  }, [id]);

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="error-message">
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!itemDetails) {
    return (
      <div>
        <Navbar />
        <div className="loading-message">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="item-details-container">
        <div className="item-image-container">
          <img
            src={`http://127.0.0.1:8000${itemDetails.image}`}
            alt={itemDetails.title}
            className="item-image"
          />
        </div>
        <div className="item-info-container">
          <h1 className="item-title">{itemDetails.title}</h1>
          <p className="item-description">{itemDetails.description}</p>
          <p className="item-price">Price: ${itemDetails.price}</p>
          <p className="item-poster">Posted by: {itemDetails.user.username}</p>
          <p className="item-contact">Contact: {itemDetails.user.phone}</p>
          <p className="item-date">
            Posted on: {new Date(itemDetails.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="message-form-container">
        <MessageForm
          onSend={(e) => {
            e.preventDefault();
            alert('Message sent!');
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetailsPage;
