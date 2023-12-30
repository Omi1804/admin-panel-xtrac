import React from "react";
import "./miningStart.css";
import miningStartLogo from "../../../generalAssets/svgs/mining/miningStartLogo.svg";

const miningStart = ({ str, setStr, handleMine }) => {
  return (
    <div className={`miningStart ${str ? "compress" : ""}`}>
      <div className="startLogo">
        <img src={miningStartLogo} alt="" />
      </div>
      <button onClick={handleMine}>
        <p>Mine</p>
        <span class="material-symbols-outlined">add_box</span>
      </button>
    </div>
  );
};

export default miningStart;
