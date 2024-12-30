import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';

const ProfilePage = () => (
  <div>
    <Navbar />
    <h1>Profile</h1>
    <ProfileDetails name="John Doe" email="john@example.com" profilePic="/profile.jpg" />
    <Footer />
  </div>
);

export default ProfilePage;