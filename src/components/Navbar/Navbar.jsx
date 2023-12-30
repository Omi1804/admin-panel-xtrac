import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import SocialIcons from "../SocialIcons/SocialIcons";
import groupIcon from "../../generalAssets/svgs/navbar/groupIcon.svg";
import addIcon from "../../generalAssets/svgs/navbar/addIcon.svg";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

const Navbar = ({ str, setStr }) => {
  const [activeLink, setActiveLink] = useState("/");

  useEffect(
    function () {
      setActiveLink(Link);
    },
    [Link]
  );

  return (
    <div className={`navbar ${str ? "compress" : ""}`}>
      <div className="sec1">
        <h1 className="headings">Influencers Search</h1>
        <div className="instagramButton">
          <SocialIcons />
        </div>
        <div className="input">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search influencers" />
        </div>

        <div className="profileIcons">
          <div className="icon1">
            <img src={groupIcon} alt="" />
          </div>
          <div className="icon2">
            <img src={addIcon} alt="" />
          </div>
          <div className="profile">
            <ProfileIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
