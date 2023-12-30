import React from "react";
import "./campHome.css";
import twitch from "../../../generalAssets/svgs/campaign/twitch.svg";
import twitter from "../../../generalAssets/svgs/campaign/twitter.svg";
import youtube from "../../../generalAssets/svgs/campaign/youtube.svg";
import ticktok from "../../../generalAssets/svgs/campaign/ticktok.svg";
import instagram from "../../../generalAssets/svgs/campaign/instagram.svg";
import cloudSave from "../../../generalAssets/svgs/campaign/cloudSave.svg";

const CampaignHome = ({ str, setStr, handleSubmit }) => {
  console.log(handleSubmit);
  return (
    <div className={`campHome ${str ? "compress" : ""}`}>
      <div className="mainFormSec">
        <div className="section1">
          <div className="heading">
            <h1>BASIC DETAILS</h1>
            <p>Provide basic information to identify the campaign or an idea</p>
          </div>

          <form>
            <div className="title">
              <label htmlFor="title">title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="title"
                id="title"
              />
            </div>
            <div className="brand">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                placeholder="Brand"
                name="brand"
                className="brand"
                id="brand"
              />
            </div>
            <div className="organisation">
              <label htmlFor="organisation">Organization</label>
              <input
                type="text"
                placeholder="Organisation"
                name="organisation"
                className="organisation"
                id="organisation"
              />
            </div>
            <div className="budget">
              <label htmlFor="budget">Budget</label>
              <input
                type="text"
                placeholder="Budget"
                name="budget"
                className="budget"
                id="budget"
              />
            </div>
            <div className="campaignStartDate">
              <label htmlFor="campaignStartDate">
                Estimate campaign start date
              </label>
              <input
                type="text"
                placeholder="Estimate campaign start date"
                name="campaignStartDate"
                className="campaignStartDate"
                id="campaignStartDate"
              />
            </div>
            <div className="campaignEndDate">
              <label htmlFor="campaignEndDate">
                Estimate campaign last date
              </label>
              <input
                type="text"
                placeholder="Estimate campaign last date"
                name="campaignEndDate"
                className="campaignEndDate"
                id="campaignEndDate"
              />
            </div>
            <div className="location">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="Gurgaon"
                name="location"
                className="location"
                id="location"
              />
            </div>
            <div className="country">
              <label htmlFor="country">country</label>
              <input
                type="text"
                placeholder="India"
                name="country"
                className="country"
                id="country"
              />
            </div>
            <div className="services">
              <label>Services</label>
              <div className="service">
                <a href="#">
                  <button>Discovery</button>
                </a>
                <a href="#">
                  <button>Strategy</button>
                </a>
                <a href="#">
                  <button>Execution</button>
                </a>
              </div>
            </div>
            <div className="interest">
              <label htmlFor="interest">Interest</label>
              <input
                type="text"
                placeholder="Interest"
                name="interest"
                className="interest"
                id="interest"
              />
            </div>
            <div className="execution">
              <label htmlFor="execution">Mode of execution</label>
              <input
                type="text"
                placeholder="Please select"
                name="execution"
                className="execution"
                id="execution"
              />
            </div>
          </form>
        </div>

        <div className="section2">
          <div className="heading">
            <h1>Some more information</h1>
            <p>
              Detailed information to help member accurately understand campaign
              ideas
            </p>
          </div>

          <form>
            <div className="title">
              <label htmlFor="title">focus on the campaign</label>
              <input
                type="text"
                placeholder="Focus on  the campaign"
                name="title"
                className="title"
                id="title"
              />
            </div>
            <div className="brand">
              <label htmlFor="brand">objective</label>
              <input
                type="text"
                placeholder="Objective"
                name="brand"
                className="brand"
                id="brand"
              />
            </div>
            <div className="organisation">
              <label htmlFor="organisation">Problem Statement</label>
              <input
                type="text"
                placeholder="Problem Statement"
                name="organisation"
                className="organisation"
                id="organisation"
              />
            </div>
            <div className="budget">
              <label htmlFor="budget">Key selling points</label>
              <input
                type="text"
                placeholder="Key selling points"
                name="budget"
                className="budget"
                id="budget"
              />
            </div>
            <div className="campaignStartDate">
              <label htmlFor="campaignStartDate">Target audience </label>
              <input
                type="text"
                placeholder="Target audience"
                name="campaignStartDate"
                className="campaignStartDate"
                id="campaignStartDate"
              />
            </div>
            <div className="campaignEndDate">
              <label htmlFor="campaignEndDate">Output Expected</label>
              <input
                type="text"
                placeholder="Output Expected"
                name="campaignEndDate"
                className="campaignEndDate"
                id="campaignEndDate"
              />
            </div>
            <div className="location">
              <label htmlFor="location">No. of influence required</label>
              <input
                type="text"
                placeholder="No. of influence required"
                name="location"
                className="location"
                id="location"
              />
            </div>
            <div className="country">
              <label htmlFor="country">Content/Post per influencer</label>
              <input
                type="text"
                placeholder="Content/Post per influencer"
                name="country"
                className="country"
                id="country"
              />
            </div>
            <div className="services">
              <label>Genre(MAx 15)</label>
              <input
                type="text"
                placeholder="Genre"
                name="country"
                className="country"
                id="country"
              />
            </div>
            <div className="interest">
              <label htmlFor="interest">Preferred Hashtags</label>
              <input
                type="text"
                placeholder="Preferred Hashtags"
                name="interest"
                className="interest"
                id="interest"
              />
            </div>
            <div className="overview">
              <label htmlFor="overview">Give us a brief overview</label>
              <input
                type="text"
                placeholder="Give us a brief overview"
                name="overview"
                className="overview"
                id="overview"
              />
            </div>
            <div className="categories">
              <label htmlFor="execution">influencer category</label>
              <div className="category">
                <a href="#">
                  <button>Celebs</button>
                </a>
                <a href="#">
                  <button>Micro</button>
                </a>
                <a href="#">
                  <button>Nano</button>
                </a>
                <a href="#">
                  <button>Premium</button>
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className="section3">
          <button className="button">Upload</button>
          <div className="uploadSec">
            <div className="cloudIcon">
              <img src={cloudSave} alt="" />
            </div>
            <h3>
              Drag & drop files or <span>Browse</span>
            </h3>
            <p>
              Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </p>
          </div>
        </div>

        <div className="section4">
          <button className="discardButton">Discard</button>
          <a href="#" onClick={handleSubmit}>
            <button className="createButton">Create</button>
          </a>
        </div>
      </div>
      <div className="socialIcons">
        <div className="innerContainer">
          <div className="heading">
            <h1>Social</h1>
            <p>Choose platforms & activities you have in mind</p>
          </div>
          <div className="optionsSec">
            <h1>Type of activity</h1>
            <div className="options">
              <button>Discovery</button>
              <button>Strategy</button>
              <button>Execution</button>
            </div>
          </div>
          <div className="platforms">
            <p>Choose a platfom</p>
            <div className="icons">
              <div className="icon1">
                <img src={twitch} alt="" />
              </div>
              <div className="icon2">
                <img src={twitter} alt="" />
              </div>
              <div className="icon3">
                <img src={youtube} alt="" />
              </div>
              <div className="icon4">
                <img src={ticktok} alt="" />
              </div>
              <div className="icon5">
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignHome;
