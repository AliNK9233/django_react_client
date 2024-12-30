import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import PostItemPage from './pages/PostItemPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import BrowseItemsPage from './pages/BrowseItemsPage';
import ContactSellerPage from './pages/ContactSellerPage';


function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post-item" element={<PostItemPage />} />
        <Route path="/item/:id" element={<ItemDetailsPage />} />
        <Route path="/browse" element={<BrowseItemsPage />} />
        <Route path="/contact-seller" element={<ContactSellerPage />} />
        


      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
