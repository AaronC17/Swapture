import React from 'react';

const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <img src={user.profileImage} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
        </div>
    );
};

export default ProfileCard;
