import React from 'react';

const ProfileDetails = ({ name, email, profilePic }) => (
  <div className="profile-details">
    <img src={profilePic} alt="Profile" />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default ProfileDetails;