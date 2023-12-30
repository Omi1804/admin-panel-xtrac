import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CampaignStart from "../../components/CampaignPages/CampaignStart/CampaignStart";
import CampaignHome from "../../components/CampaignPages/CampaignHome/CampaignHome";
import CampaignAll from "../../components/CampaignPages/CampaignAll/CampaignAll.jsx";
import Menus from "../../components/Menus/Menus";
import Navbar from "../../components/Navbar/Navbar";
import "./campaign.css";

const Campaign = () => {
  const [str, setStr] = useState(false);
  const [createCampaign, setCreateCampaign] = useState(false);
  const [submit, setSubmit] = useState(false);

  console.log(submit);

  function handleCampaign() {
    setCreateCampaign(true);
  }

  function handleSubmit() {
    setSubmit(true);
  }
  return (
    <div className="campignPage">
      <Menus str={str} setStr={setStr} />
      <Navbar str={str} setStr={setStr} />
      {createCampaign ? (
        submit ? (
          <CampaignAll str={str} setStr={setStr} />
        ) : (
          <CampaignHome str={str} setStr={setStr} handleSubmit={handleSubmit} />
        )
      ) : (
        <CampaignStart
          str={str}
          setStr={setStr}
          handleCampaign={handleCampaign}
        />
      )}
    </div>
  );
};

export default Campaign;
