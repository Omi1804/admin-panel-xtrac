import React, { useState } from "react";
import "./login.css";
import brandIcon from "../../generalAssets/icons/brandIcon.svg";
import closeEye from "../../generalAssets/icons/closeEye.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginPage">
      <div className="loginImg"></div>
      <div className="loginForm">
        <div className="loginBrandIcon">
          <div className="icon">
            <img src={brandIcon} alt="" />
          </div>
          <div className="brandName">Xtracktion</div>
        </div>
        <div className="loginHeadings">
          <h1>Welcome back!</h1>
          <p>Please enter your credentials.</p>
        </div>
        <div className="formContent">
          <form className="loginFormFields">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <img
                  src={closeEye}
                  alt="Toggle password visibility"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
              </div>
            </div>
            <p className="forgotPass">Forgot password?</p>

            <button type="submit" className="loginButton">
              Login
            </button>
          </form>
        </div>

        <div className="alreadyAccount">
          <p>Don’t have account? </p>
          <span>Sign up here!</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
