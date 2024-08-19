import React from 'react';
import './Profile.css';

const Profile = () => {
  // Dummy user data
  const user = {
    name: "Eren Yeager",
    email: "eren.yeager@example.com",
    subscription: {
      plan: "Premium",
      status: "Active",
      renewalDate: "2024-12-25",
    },
    profilePicture: require('../../assets/eren.jpg'), // Import the profile picture
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>

      <div className="subscription-details">
        <h2>Subscription Details</h2>
        <ul>
          <li><strong>Plan:</strong> {user.subscription.plan}</li>
          <li><strong>Status:</strong> {user.subscription.status}</li>
          <li><strong>Renewal Date:</strong> {user.subscription.renewalDate}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
