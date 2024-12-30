import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MessageForm from '../components/MessageForm/MessageForm';

const ContactSellerPage = () => (
  <div>
    <Navbar />
    <h1>Contact Seller</h1>
    <MessageForm onSend={(e) => {
      e.preventDefault();
      alert('Message sent!');
    }} />
    <Footer />
  </div>
);

export default ContactSellerPage;