import React from "react";
import "./miningForm.css";
import ReactSlider from "react-slider";
import ticktok from "../../../generalAssets/svgs/campaign/ticktok.svg";
import twitter from "../../../generalAssets/svgs/campaign/twitter.svg";
import youtube from "../../../generalAssets/svgs/campaign/youtube.svg";
import twitch from "../../../generalAssets/svgs/campaign/twitch.svg";

const MiningForm = ({ str, setStr, handleFilterSet }) => {
  return (
    <div className={`miningForm ${str ? "compress" : ""}`}>
      <h1>Mine your influencer</h1>
      <div className="filters">
        <div className="gender">
          <div className="heading">
            <span class="material-symbols-outlined">fiber_manual_record</span>
            <h3>Gender</h3>
          </div>
          <div className="inputs">
            <button>All</button>
            <button>Male</button>
            <button>Female</button>
          </div>
        </div>
        <div className="age">
          <div className="heading">
            <span class="material-symbols-outlined">fiber_manual_record</span>
            <h3>Age</h3>
          </div>
          <div className="inputs">
            <ReactSlider
              className="customSlider"
              trackClassName="customSlider-track"
            />
          </div>
        </div>
        <div className="hashtags">
          <div className="heading">
            <span class="material-symbols-outlined">fiber_manual_record</span>
            <h3>Hashtags</h3>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Hashtags" />
          </div>
        </div>
        <div className="locations">
          <div className="heading">
            <span class="material-symbols-outlined">fiber_manual_record</span>
            <h3>Location</h3>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Location" />
          </div>
        </div>
        <div className="platforms">
          <div className="heading">
            <span class="material-symbols-outlined">fiber_manual_record</span>
            <h3>platforms</h3>
          </div>
          <div className="socialIcons">
            <div className="ticktok">
              <div className="icon">
                <img src={ticktok} alt="" />
              </div>
              <p>Tiktok</p>
            </div>
            <div className="youtube">
              <div className="icon">
                <img src={youtube} alt="" />
              </div>
              <p>Youtube</p>
            </div>
            <div className="twitch">
              <div className="icon">
                <img src={twitch} alt="" />
              </div>
              <p>Twitch</p>
            </div>
            <div className="twitter">
              <div className="icon">
                <img src={twitter} alt="" />
              </div>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="searchButton" onClick={handleFilterSet}>
          Search
        </button>
        <button className="cancelButton">Cancel</button>
      </div>
    </div>
  );
};

export default MiningForm;
