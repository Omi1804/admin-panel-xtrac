import React, { useState } from "react";
import "./filter.css";
import cross from "../../generalAssets/svgs/home/cross.svg";

const Filter = ({ filter, handleFilter }) => {
  // for keywords in filters

  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Prevent form submission if your input is inside a form
      e.preventDefault();

      if (inputValue.trim()) {
        // Add keyword to the keywords array and clear input
        setKeywords([...keywords, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const removeFilters = (filterToRemove) => {
    setKeywords(keywords.filter((filter) => filter !== filterToRemove));
  };

  // for countries

  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    if (country && !selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
    event.target.value = ""; // Reset the select input
  };

  const removeCountry = (countryToRemove) => {
    setSelectedCountries(
      selectedCountries.filter((country) => country !== countryToRemove)
    );
  };

  //for engagement
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  //for resetting the entire form
  const resetForm = () => {
    // Reset keywords
    setKeywords([]);
    setInputValue("");

    // Reset countries
    setSelectedCountries([]);

    // Reset engagement dates
    setFromDate("");
    setToDate("");
  };

  return (
    <div className={`cover ${filter ? "" : "compress"}`}>
      <div className={`homeFilter ${filter ? "compress" : ""}`}>
        <div className="header">
          <h1>Filter</h1>
          <span class="material-symbols-outlined" onClick={handleFilter}>
            close
          </span>
        </div>
        <div className="mainForm">
          <div className="locationSec">
            <div className="label">
              <span class="material-symbols-outlined">fiber_manual_record</span>
              <p>Location</p>
            </div>
            <div className="inputs">
              <select onChange={handleCountryChange} defaultValue="">
                <option value="" disabled>
                  Add Country or city
                </option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="Dubai">Dubai</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
              </select>

              <div className="clipCollection">
                {selectedCountries.map((country) => (
                  <div
                    className="chip"
                    key={country}
                    onClick={() => removeCountry(country)}
                  >
                    <span>{country} </span>
                    <div className="icon">
                      <img src={cross} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="engagementSec">
            <div className="label">
              <span class="material-symbols-outlined">fiber_manual_record</span>
              <p>Engagement</p>
            </div>
            <div className="inputs">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                placeholder="From"
              />
              <input
                type="date"
                value={toDate}
                min={fromDate} // To ensure the 'to' date is always after the 'from' date
                onChange={(e) => setToDate(e.target.value)}
                placeholder="To"
              />
            </div>
          </div>
          <div className="engagementRateSec">
            <div className="label">
              <span class="material-symbols-outlined">fiber_manual_record</span>
              <p>Engagement Rate</p>
            </div>
            <div className="inputs">
              <input type="number" placeholder="From" />
            </div>
          </div>
          <div className="followers">
            <div className="label">
              <span class="material-symbols-outlined">fiber_manual_record</span>
              <p>Followers</p>
            </div>
            <div className="inputs">
              <input type="number" placeholder="From" />
              <input type="number" placeholder="To" />
            </div>
          </div>
          <section className="gender_keyword">
            <div className="gender">
              <div className="label">
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Gender</p>
              </div>
              <div className="inputs">
                <div className="male">
                  <input type="checkbox" />
                  <p>Male</p>
                </div>
                <div className="female">
                  <input type="checkbox" />
                  <p>Female</p>
                </div>
                <div className="genderNutral">
                  <input type="checkbox" />
                  <p>Gender Nutral</p>
                </div>
              </div>
            </div>
            <div className="keywords">
              <div className="label">
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Keywords</p>
              </div>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Keywords"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                {keywords.length === 0 && (
                  <p>
                    Tip: Search for keywords in the influencer's language, like
                    German for German influencers.
                  </p>
                )}
                <p className="clipCollection">
                  {keywords.map((keyword, index) => (
                    <button
                      key={keyword}
                      className="chip"
                      onClick={() => removeFilters(keyword)}
                    >
                      <div className="icon" key={keyword}>
                        <img src={cross} alt="" />
                      </div>
                      <span>{keyword}</span>
                    </button>
                  ))}
                </p>
              </div>
            </div>
          </section>
          <div className="age">
            <div className="label">
              <span class="material-symbols-outlined">fiber_manual_record</span>
              <p>Age</p>
            </div>
            <div className="inputs">
              <input type="number" placeholder="18" />
              <input type="number" placeholder="25" />
            </div>
          </div>
          <section className="brand_partnership">
            <div className="brand">
              <div className="label">
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Brand</p>
              </div>
              <div className="inputs">
                <input type="text" placeholder="Add Brand" />
              </div>
            </div>
            <div className="partnership">
              <div className="label">
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Partnership</p>
              </div>
              <div className="inputs">
                <input type="text" placeholder="Add Partnership" />
              </div>
              <div className="inputs2">
                <input type="checkbox" />
                <p>Any</p>
              </div>
            </div>
          </section>
          <div className="ethnicity">
            <div className="label">
              <span class="material-symbols-outlined">fiber_manual_record</span>
              <p>Ethnicity</p>
            </div>
            <div className="inputs">
              <div className="any">
                <input type="checkbox" />
                <p>Any</p>
              </div>
              <div className="asian">
                <input type="checkbox" />
                <p>Asian</p>
              </div>
              <div className="african">
                <input type="checkbox" />
                <p>African Descent</p>
              </div>
              <div className="american">
                <input type="checkbox" />
                <p>Hispanic American</p>
              </div>
              <div className="white">
                <input type="checkbox" />
                <p>White / Caucasian</p>
              </div>
            </div>
          </div>
          <section className="language_hashtag">
            <div className="language">
              <div className="label">
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Ethnicity</p>
              </div>
              <div className="inputs">
                <input type="text" placeholder="Add Language" />
              </div>
            </div>
            <div className="hastags">
              <div className="label">
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Hashtag</p>
              </div>
              <div className="inputs">
                <input type="text" placeholder="Search by topic" />
              </div>
            </div>
          </section>
        </div>
        <div className="footer">
          <button className="noFilter">No filters applied</button>
          <button className="clearFilter" onClick={resetForm}>
            Clear Filter
          </button>
          <button className="cancel" onClick={handleFilter}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
