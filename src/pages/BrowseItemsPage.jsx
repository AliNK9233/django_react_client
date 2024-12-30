import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ItemCard from '../components/ItemCard/ItemCard';
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';

const BrowseItemsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <Navbar />
      <h1>Browse Items</h1>
      <SearchBar onSearch={setSearchTerm} />
      <CategoryFilter categories={["Electronics", "Furniture", "Books"]} onFilter={setCategory} />
      <div className="item-list">
        {/* Example items, replace with dynamic data */}
        <ItemCard title="Used Laptop" price={300} image="/laptop.jpg" />
        <ItemCard title="Vintage Chair" price={100} image="/chair.jpg" />
      </div>
      <Footer />
    </div>
  );
};

export default BrowseItemsPage;