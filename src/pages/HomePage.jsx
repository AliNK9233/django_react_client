import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ItemCard from '../components/ItemCard/ItemCard';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API without Authorization header
    axios
      .get('http://127.0.0.1:8000/api/products/list/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      <div className="item-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ItemCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image ? product.image : 'default_image.jpg'}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
