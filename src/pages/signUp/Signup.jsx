import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signupPage">
      <div className="signupImg"></div>

      <div className="signupForm">
        <div className="signupBrandIcon">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="121"
              height="113"
              viewBox="0 0 121 113"
              fill="none"
            >
              <path
                d="M23.8588 16.5114C23.3483 12.8249 25.9306 9.48095 29.6263 9.04244L38.5227 7.98688C42.2185 7.54837 45.6282 10.1814 46.1387 13.8679L58.5685 103.643C59.0789 107.329 56.4967 110.673 52.801 111.112L43.9045 112.167C40.2088 112.606 36.799 109.973 36.2886 106.286L23.8588 16.5114Z"
                fill="#FC456C"
              />
              <path
                d="M63.1674 10.2731C62.6569 6.58664 65.2392 3.24267 68.9349 2.80416L77.8313 1.74859C81.5271 1.31009 84.9368 3.94311 85.4473 7.62961L97.8771 97.4046C98.3875 101.091 95.8053 104.435 92.1095 104.874L83.2131 105.929C79.5174 106.368 76.1076 103.735 75.5972 100.048L63.1674 10.2731Z"
                fill="#F2D000"
              />
              <path
                d="M104.861 22.2553C108.547 21.7365 112.023 24.293 112.627 27.9655L113.819 35.2237C114.422 38.8962 111.924 42.2939 108.238 42.8127L10.5499 56.5651C6.86458 57.0839 3.38797 54.5273 2.78467 50.8549L1.59232 43.5966C0.989026 39.9242 3.48751 36.5265 7.17284 36.0077L104.861 22.2553Z"
                fill="#00CBAE"
              />
              <path
                d="M110.45 56.9975C114.136 56.4787 117.612 59.0352 118.215 62.7077L119.408 69.9659C120.011 73.6384 117.513 77.0361 113.827 77.5549L16.1388 91.3072C12.4534 91.8261 8.97683 89.2695 8.37354 85.5971L7.18119 78.3388C6.57789 74.6664 9.07638 71.2687 12.7617 70.7499L110.45 56.9975Z"
                fill="#8665FF"
              />
            </svg>
          </div>
          <div className="brandName">Xtracktion</div>
        </div>
        <div className="signupHeadings">
          <h1>Create your account</h1>
          <p>Please enter your credentials.</p>
        </div>
        <div className="formContent">
          <form>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Rohan"
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Singh"
              />
            </div>
            <div className="companyName">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Google"
              />
            </div>
            <div className="reference">
              <label htmlFor="reference">Reference</label>
              <input
                type="text"
                name="reference"
                id="reference"
                placeholder="........"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="commitcommunity@gmail.com"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="**************"
              />
            </div>
            <div className="confirmPassword">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="**************"
              />
            </div>
            <button className="signupButton">Sign up</button>
          </form>
        </div>

        <div className="alreadyAccount">
          <p>Already have account? </p>
          <span>Sign in here!</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
