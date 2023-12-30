import React, { useState } from "react";
import "./userFilter.css";
import cross from "../../../generalAssets/svgs/home/cross.svg";

const FilterUser = ({ addUser, handleUsers }) => {
  return (
    <div className={`coverScreen ${addUser ? "" : "compress"}`}>
      <div className={`addUsers ${addUser ? "compress" : ""}`}>
        <div className="crossIcon" onClick={handleUsers}>
          <span class="material-symbols-outlined">close</span>
        </div>
        <form>
          <div className="name">
            <label htmlFor="name">User name</label>
            <input type="text" placeholder="Rohan" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="commitcommunity@gmail.com" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="* * * * * * * * * * * * * * " />
          </div>
          <div className="confirmPass">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input type="password" placeholder="* * * * * * * * * * * * * * " />
          </div>
          <div className="jobProfile">
            <label htmlFor="jobprofile">Job Profile</label>
            <select defaultValue="">
              <option value="" disabled>
                Add Your Job Profile
              </option>
              <option value="Admin">Admin</option>
              <option value="Sales">Sales</option>
              <option value="Operations">Operations</option>
              <option value="Clients">Clients</option>
              <option value="Users">Users</option>
            </select>
          </div>

          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default FilterUser;
