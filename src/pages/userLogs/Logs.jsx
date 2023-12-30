import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menus from "../../components/Menus/Menus";
import Back from "../../components/Back/Back";
import Info from "../../components/profileInfo/Info";

const Logs = () => {
  const [str, setStr] = useState(false);
  return (
    <div>
      <Menus str={str} setStr={setStr} />
      <Navbar str={str} setStr={setStr} />
      <Back str={str} setStr={setStr} />
      <Info str={str} setStr={setStr} />
    </div>
  );
};

export default Logs;
