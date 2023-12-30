import React, { useState } from "react";
import "./profileIcon.css";

import profilePic from "../../generalAssets/imgs/profilePic.png";

const ProfileIcon = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleIconClick = (icon, name) => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="profileIcon" onClick={handleIconClick}>
      <div className="showingInfo">
        <div className="profilePic">
          <img src={profilePic} alt="" />
        </div>
        <p>Kirat Singh</p>
      </div>
      {isDropdownVisible && (
        <div className="dropdownProfileIcon">
          <div className="names">
            <p>Kirat Singh</p>
            <span>KiratSingh@mail.com</span>
          </div>
          <div className="options">
            <p>Home</p>
            <p>Profile</p>
            <p>Setting</p>
          </div>
          <div className="logout">
            <p>Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
