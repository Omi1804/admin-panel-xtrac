import React from "react";
import "./campAll.css";
import instagram from "../../../generalAssets/svgs/campaign/instagram.svg";
import search from "../../../generalAssets/svgs/campaign/search.svg";
import cluster from "../../../assets/peopleClusture.png"; //
const CampaignAll = ({ str, setStr }) => {
  return (
    <div className={`campaignAll ${str ? "compress" : ""}`}>
      <div className="headings">
        <div className="sec1">
          <h1>Create Campaign</h1>
          <p>
            Create an Xtracktion board for brainstorming ideas, selecting
            potential influencers, and facilitating collaboration between
            influencers and brands."
          </p>
        </div>
        <div className="sec2">
          <a href="#">
            <button>
              <p>Create</p>
              <span class="material-symbols-outlined">add_box</span>
            </button>
          </a>
        </div>
      </div>
      <div className="campaignListSec">
        <div className="header">
          <div className="sec1">
            <div className="plans">
              <span>1</span>
              <p>Plan</p>
            </div>
            <div className="active">
              <span>4</span>
              <p>Active</p>
            </div>
            <div className="end">
              <span>10</span>
              <p>End</p>
            </div>
          </div>
          <div className="sec2">
            <p>Sort by</p>
            <button>
              <p>Newest</p>
              <span class="material-symbols-outlined">expand_more</span>
            </button>
            <button>
              <img src={instagram} alt="" />
              <p>Instagram</p>
              <span class="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
        <div className="searchSection">
          <div className="selectAll">
            <p>Select All</p>
            <input type="checkbox" />
          </div>
          <div className="search">
            <div className="searchIcon">
              <img src={search} alt="" />
            </div>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="campaignTable">
          <table>
            <tr>
              <th style={{ width: "20%" }}>Campaign Name</th>
              <th style={{ width: "30%" }}>Created by</th>
              <th style={{ width: "17%" }}>Time</th>
              <th style={{ width: "21%" }}>Influencer</th>
              <th style={{ width: "12%" }}>Status</th>
            </tr>
          </table>
          <table>
            <tr>
              <td style={{ width: "22%" }}>
                <div>
                  <input type="checkBox" />
                  <span class="material-symbols-outlined">
                    fiber_manual_record
                  </span>
                  <div className="name">
                    <p>Maggi - Nano IPL</p>
                    <span>Maggi India</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "26%" }}>Manish</td>
              <td style={{ width: "14%" }}>12-jul-23</td>
              <td style={{ width: "17%" }}>
                <img src={cluster} alt="" />
              </td>
              <td style={{ width: "15%" }}>
                <div>
                  <p className="active">
                    <span>Active</span>
                  </p>
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "22%" }}>
                <div>
                  <input type="checkBox" />
                  <span class="material-symbols-outlined">
                    fiber_manual_record
                  </span>
                  <div className="name">
                    <p>Maggi - Nano IPL</p>
                    <span>Maggi India</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "26%" }}>Manish</td>
              <td style={{ width: "14%" }}>12-jul-23</td>
              <td style={{ width: "17%" }}>
                <img src={cluster} alt="" />
              </td>
              <td style={{ width: "15%" }}>
                <div>
                  <p className="active">
                    <span>Active</span>
                  </p>
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "22%" }}>
                <div>
                  <input type="checkBox" />
                  <span class="material-symbols-outlined">
                    fiber_manual_record
                  </span>
                  <div className="name">
                    <p>Maggi - Nano IPL</p>
                    <span>Maggi India</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "26%" }}>Manish</td>
              <td style={{ width: "14%" }}>12-jul-23</td>
              <td style={{ width: "17%" }}>
                <img src={cluster} alt="" />
              </td>
              <td style={{ width: "15%" }}>
                <div>
                  <p className="active">
                    <span>Active</span>
                  </p>
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "22%" }}>
                <div>
                  <input type="checkBox" />
                  <span class="material-symbols-outlined">
                    fiber_manual_record
                  </span>
                  <div className="name">
                    <p>Maggi - Nano IPL</p>
                    <span>Maggi India</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "26%" }}>Manish</td>
              <td style={{ width: "14%" }}>12-jul-23</td>
              <td style={{ width: "17%" }}>
                <img src={cluster} alt="" />
              </td>
              <td style={{ width: "15%" }}>
                <div>
                  <p className="active">
                    <span>Active</span>
                  </p>
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "22%" }}>
                <div>
                  <input type="checkBox" />
                  <span class="material-symbols-outlined">
                    fiber_manual_record
                  </span>
                  <div className="name">
                    <p>Maggi - Nano IPL</p>
                    <span>Maggi India</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "26%" }}>Manish</td>
              <td style={{ width: "14%" }}>12-jul-23</td>
              <td style={{ width: "17%" }}>
                <img src={cluster} alt="" />
              </td>
              <td style={{ width: "15%" }}>
                <div>
                  <p className="active">
                    <span>Active</span>
                  </p>
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "22%" }}>
                <div>
                  <input type="checkBox" />
                  <span class="material-symbols-outlined">
                    fiber_manual_record
                  </span>
                  <div className="name">
                    <p>Maggi - Nano IPL</p>
                    <span>Maggi India</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "26%" }}>Manish</td>
              <td style={{ width: "14%" }}>12-jul-23</td>
              <td style={{ width: "17%" }}>
                <img src={cluster} alt="" />
              </td>
              <td style={{ width: "15%" }}>
                <div>
                  <p className="active">
                    <span>Active</span>
                  </p>
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "22%" }}>
                <div>
                  <input type="checkBox" />
                  <span class="material-symbols-outlined">
                    fiber_manual_record
                  </span>
                  <div className="name">
                    <p>Maggi - Nano IPL</p>
                    <span>Maggi India</span>
                  </div>
                </div>
              </td>
              <td style={{ width: "26%" }}>Manish</td>
              <td style={{ width: "14%" }}>12-jul-23</td>
              <td style={{ width: "17%" }}>
                <img src={cluster} alt="" />
              </td>
              <td style={{ width: "15%" }}>
                <div>
                  <p className="active">
                    <span>Active</span>
                  </p>
                  <span class="material-symbols-outlined">more_vert</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="tableFooter">
          <p>Rows per page:</p>
          <p>
            5<span class="material-symbols-outlined">expand_more</span>
          </p>
          <p>6-10 of 11</p>
          <p>
            <span class="material-symbols-outlined">arrow_back_ios</span>
            <span class="material-symbols-outlined">arrow_forward_ios</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignAll;
