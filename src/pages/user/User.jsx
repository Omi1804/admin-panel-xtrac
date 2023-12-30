import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menus from "../../components/Menus/Menus";
import UserInfo from "../../components/UserInfo/UserInfo";
import FilterUser from "../../components/UserInfo/UserFilter/FilterUser";

const User = () => {
  const [str, setStr] = useState(false);
  const [addUser, setAddUser] = useState(false);

  function handleUsers() {
    setAddUser(!addUser);
  }

  return (
    <div>
      <FilterUser addUser={addUser} handleUsers={handleUsers} />
      <Menus str={str} setStr={setStr} />
      <Navbar str={str} setStr={setStr} />
      <UserInfo str={str} setStr={setStr} handleUsers={handleUsers} />
    </div>
  );
};

export default User;
