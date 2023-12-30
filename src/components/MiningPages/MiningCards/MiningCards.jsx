import React, { useState } from "react";
import "./miningCard.css";
import img from "../../../assets/miningCard.png";
import instagram from "../../../generalAssets/svgs/mining/instagram.svg";
import user from "../../../generalAssets/svgs/mining/user.svg";
import clock from "../../../generalAssets/svgs/mining/clock.svg";
import share from "../../../generalAssets/svgs/mining/share.svg";
import setting from "../../../generalAssets/svgs/mining/setting.svg";
import thumbsup from "../../../generalAssets/svgs/mining/thumbsup.svg";
import trash from "../../../generalAssets/svgs/mining/trash.svg";
import bookmark from "../../../generalAssets/svgs/mining/bookmark.svg";

const MiningCards = ({ str, setStr }) => {
  const [select, setSelect] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const Card = ({ isSelected }) => {
    return (
      <div
        onClick={() => setSelect(true)}
        className={`card ${isSelected ? "selected" : ""}`}
      >
        <div className="cardImg">
          <img src={img} alt="" />
        </div>
        <div className="instaLogo">
          <img src={instagram} alt="" />
        </div>
        <div className="headings">
          <h2 className="title">@Cristiano</h2>
          <p>
            <span className="material-symbols-outlined">location_on</span>
            <span>Delhi, India</span>
          </p>
        </div>
        <div className="description">
          <div className="views">
            <div className="logo">
              <img src={user} alt="" />
            </div>
            <p>5000</p>
          </div>
          <div className="time">
            <div className="logo">
              <img src={clock} alt="" />
            </div>
            <p>11-jul-23</p>
          </div>
          <div className="share">
            <div className="logo">
              <img src={share} alt="" />
            </div>
            <p>10</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`miningCards ${str ? "compress" : ""}`}>
      <div className="miningSearchButtons">
        <button>
          <p>Search by location</p>
        </button>
        <button>
          <p>Hashtag</p>
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <button>
          <p>By time</p>
          <span class="material-symbols-outlined">expand_more</span>
        </button>
      </div>
      <div className="miningFilters">
        {select ? (
          <div className="checklist">
            <div className="checkbox">
              <input
                type="checkbox"
                name="unselect"
                className="unselect"
                id="unselect"
                checked
              />
              <label htmlFor="all">Unselect 1</label>
            </div>
            <div className="approve">
              <div className="logo">
                <img src={thumbsup} alt="" />
              </div>
              <p>Approver</p>
            </div>
            <div className="discard">
              <div className="logo">
                <img src={trash} alt="" />
              </div>
              <p>Discard</p>
            </div>
            <div className="bookMark">
              <div className="logo">
                <img src={bookmark} alt="" />
              </div>
              <p>Add o board</p>
            </div>
          </div>
        ) : (
          <div className="checklist">
            <div className="checkbox">
              <input type="checkbox" name="all" className="all" id="all" />
              <label htmlFor="all">All</label>
            </div>
          </div>
        )}
        <div className="filters">
          <p>Sort by</p>
          <button>
            <p>Newest</p>
            <span class="material-symbols-outlined">expand_more</span>
          </button>
          <button>
            <div className="icon">
              <img src={setting} alt="" />
            </div>
            <p>Filter</p>
          </button>
        </div>
      </div>
      <div className="cards">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            isSelected={selectedCard === index}
            onClick={() => setSelectedCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MiningCards;
