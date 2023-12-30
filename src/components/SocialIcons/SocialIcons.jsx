import React, { useState } from "react";
import instagram from "../../generalAssets/svgs/navbar/instagram.svg";
import ticktok from "../../generalAssets/svgs/navbar/ticktok.svg";
import twitch from "../../generalAssets/svgs/navbar/twitch.svg";
import twitter from "../../generalAssets/svgs/navbar/twitter.svg";
import youtube from "../../generalAssets/svgs/navbar/youtube.svg";
import "./socialicons.css";

const SocialIcons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(instagram);
  const [selectedName, setSelectedName] = useState("Instagram");

  const icons = [
    { src: instagram, name: "Instagram" },
    { src: ticktok, name: "TikTok" },
    { src: twitch, name: "Twitch" },
    { src: twitter, name: "Twitter" },
    { src: youtube, name: "YouTube" },
  ];

  const handleIconClick = (icon, name) => {
    setSelectedIcon(icon);
    setSelectedName(name);
    setDropdownVisible(false);
  };

  return (
    <div className="socialIconsDrop">
      <div
        className="icon"
        onClick={() => setDropdownVisible(!isDropdownVisible)}
      >
        <img src={selectedIcon} alt={selectedName} />
      </div>
      <p>{selectedName}</p>
      <div
        className="downarrow"
        onClick={() => setDropdownVisible(!isDropdownVisible)}
      >
        <span class="material-symbols-outlined">expand_more</span>
      </div>

      {isDropdownVisible && (
        <div className="dropdown-menu">
          {icons.map(
            (icon, idx) =>
              icon.src !== selectedIcon && (
                <div
                  key={idx}
                  className="icon"
                  onClick={() => handleIconClick(icon.src, icon.name)}
                >
                  <img src={icon.src} alt={icon.name} />
                  <p>{icon.name}</p>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default SocialIcons;
