import React, { useState } from "react";
import Menus from "../../components/Menus/Menus";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import Results from "../../components/Results/Results";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  const [str, setStr] = useState(false);
  const [filter, setFilter] = useState(true);

  function handleFilter() {
    setFilter(!filter);
  }

  return (
    <div className="home">
      <Filter filter={filter} handleFilter={handleFilter} />
      <Menus str={str} setStr={setStr} />
      <Navbar str={str} setStr={setStr} filter={filter} />
      <Results str={str} setStr={setStr} handleFilter={handleFilter} />
    </div>
  );
};

export default Home;
