import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/Signup";
import Logs from "./pages/userLogs/Logs";
import Mining from "./pages/mining/Mining";
import Campaign from "./pages/campaign/Campaign";
import User from "./pages/user/User";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-logs" element={<Logs />} />
          <Route path="/mining" element={<Mining />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
