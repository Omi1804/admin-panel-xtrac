import React from "react";

const Progress_bar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    width: "90%",
    height: height,
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    color: "#9FA3A9",
    fontWeight: 600,
    fontSize: ".8rem",
    position: "relative",
    left: "2.2rem",
    top: "-.3rem",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
      <span style={progresstext}>{`${progress}%`}</span>
    </div>
  );
};

export default Progress_bar;
