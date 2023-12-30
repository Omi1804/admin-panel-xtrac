import React from "react";
import "./campStart.css";
import campaignLogo from "../../../generalAssets/svgs/campaign/campaignLogo.svg";

const CampaignStart = ({ str, setStr, handleCampaign }) => {
  return (
    <div className={`campaignStart ${str ? "compress" : ""}`}>
      <div className="headings">
        <div className="sec1">
          <h1>Create Campaign</h1>
          <p>
            Create an Xtracktion board for brainstorming ideas, selecting
            potential influencers, and facilitating collaboration between
            influencers and brands."
          </p>
        </div>
        <div className="sec2">
          <a href="#" onClick={handleCampaign}>
            <button>
              <p>Create</p>
              <span class="material-symbols-outlined">add_box</span>
            </button>
          </a>
        </div>
      </div>
      <div className="logo">
        <div className="campaignLogo">
          <img src={campaignLogo} alt="" />
        </div>
        <a href="#" onClick={handleCampaign}>
          <button>
            <p>Create</p>
            <span class="material-symbols-outlined">add_box</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default CampaignStart;
