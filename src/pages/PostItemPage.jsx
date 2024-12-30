import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ItemForm from '../components/ItemForm/ItemForm';

const PostItemPage = () => (
  <div>
    <Navbar />
    <h1>Post an Item</h1>
    <ItemForm onSubmit={() => alert('Item posted successfully!')} />
    <Footer />
  </div>
);

export default PostItemPage;
