import React from 'react';

const CategoryFilter = ({ categories, onFilter }) => (
  <select onChange={(e) => onFilter(e.target.value)}>
    <option value="">All Categories</option>
    {categories.map((category) => (
      <option key={category} value={category}>{category}</option>
    ))}
  </select>
);

export default CategoryFilter;