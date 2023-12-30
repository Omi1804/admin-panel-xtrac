import React from "react";
import "./back.css";

const Back = ({ str, setStr }) => {
  return (
    <div className={`back ${str ? "compress" : ""}`}>
      <button>
        <span class="material-symbols-outlined">chevron_left</span>
        <p>Back</p>
      </button>
    </div>
  );
};

export default Back;
