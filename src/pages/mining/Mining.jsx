import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menus from "../../components/Menus/Menus";
import MiningCards from "../../components/MiningPages/MiningCards/MiningCards";
import MiningStart from "../../components/MiningPages/MiningStart/miningStart";
import MiningForm from "../../components/MiningPages/MiningForm/MiningForm";

const Mining = () => {
  const [str, setStr] = useState(false);
  const [mine, setMine] = useState(false);
  const [filterset, setFilterset] = useState(false);

  function handleMine() {
    setMine(!mine);
  }

  function handleFilterSet() {
    setFilterset(true);
  }

  return (
    <div>
      <Menus str={str} setStr={setStr} />
      <Navbar str={str} setStr={setStr} />
      {mine ? (
        filterset ? (
          <MiningCards str={str} setStr={setStr} />
        ) : (
          <MiningForm
            str={str}
            setStr={setStr}
            handleFilterSet={handleFilterSet}
          />
        )
      ) : (
        <MiningStart str={str} setStr={setStr} handleMine={handleMine} />
      )}
    </div>
  );
};

export default Mining;
