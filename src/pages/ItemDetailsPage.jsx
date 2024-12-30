import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MessageForm from '../components/MessageForm/MessageForm';

const ItemDetailsPage = () => {
  const { id } = useParams(); // Extract the 'id' parameter from the URL

  return (
    <div>
      <Navbar />
      <h1>Item Details</h1>
      <div className="item-details">
        {/* Replace hardcoded data with dynamic content */}
        <img src={`/items/${id}.jpg`} alt={`Item ${id}`} />
        <h2>Item Title for ID: {id}</h2>
        <p>Description for item with ID: {id}</p>
        <p>Price: $100</p>
        <MessageForm onSend={(e) => {
          e.preventDefault();
          alert('Message sent!');
        }} />
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetailsPage;
