import React, { useState } from "react";
import "./userInfo.css";
import searchIcon from "../../generalAssets/icons/search.svg";
import setting from "../../generalAssets/svgs/mining/setting.svg";
import thumbsup from "../../generalAssets/svgs/mining/thumbsup.svg";
import trash from "../../generalAssets/svgs/mining/trash.svg";
import bookmark from "../../generalAssets/svgs/mining/bookmark.svg";
import userPic from "../../generalAssets/imgs/user.png";

const UserInfo = ({ str, setStr, handleUsers }) => {
  const [select, setSelect] = useState(false);

  function handleSelect() {
    setSelect(!select);
  }

  return (
    <div className={`userInfo ${str ? "compress" : ""}`}>
      <div className="addBar">
        <p>User</p>
        <button onClick={handleUsers}>
          <span class="material-symbols-outlined">add</span>
          <p>Add Member</p>
        </button>
      </div>
      <div className="searchBar">
        <div className="searchIcon">
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" placeholder="Search influencers" />
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
          <button onClick={handleSelect}>
            <div className="icon">
              <img src={setting} alt="" />
            </div>
            <p>Filter</p>
          </button>
        </div>
      </div>
      <div className="userInfoTable">
        <table>
          <tr>
            <th style={{ width: "25%" }}>Name</th>
            <th style={{ width: "25%" }}>Email</th>
            <th style={{ width: "25%" }}>Last Seen</th>
            <th style={{ width: "25%" }}>Job</th>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{ width: "25%" }}>
              <div>
                <input type="checkbox" />
                <div className="profilePic">
                  <img src={userPic} alt="" />
                </div>
                <p>Elizabeth</p>
              </div>
            </td>
            <td style={{ width: "25%" }}>Elizabeth77@email.com</td>
            <td style={{ width: "25%" }}>1 Hour Ago</td>
            <td style={{ width: "25%" }}>
              <div>
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Admin</p>
              </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{ width: "25%" }}>
              <div>
                <input type="checkbox" />
                <div className="profilePic">
                  <img src={userPic} alt="" />
                </div>
                <p>Elizabeth</p>
              </div>
            </td>
            <td style={{ width: "25%" }}>Elizabeth77@email.com</td>
            <td style={{ width: "25%" }}>1 Hour Ago</td>
            <td style={{ width: "25%" }}>
              <div>
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Admin</p>
              </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{ width: "25%" }}>
              <div>
                <input type="checkbox" />
                <div className="profilePic">
                  <img src={userPic} alt="" />
                </div>
                <p>Elizabeth</p>
              </div>
            </td>
            <td style={{ width: "25%" }}>Elizabeth77@email.com</td>
            <td style={{ width: "25%" }}>1 Hour Ago</td>
            <td style={{ width: "25%" }}>
              <div>
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Admin</p>
              </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{ width: "25%" }}>
              <div>
                <input type="checkbox" />
                <div className="profilePic">
                  <img src={userPic} alt="" />
                </div>
                <p>Elizabeth</p>
              </div>
            </td>
            <td style={{ width: "25%" }}>Elizabeth77@email.com</td>
            <td style={{ width: "25%" }}>1 Hour Ago</td>
            <td style={{ width: "25%" }}>
              <div>
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Admin</p>
              </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{ width: "25%" }}>
              <div>
                <input type="checkbox" />
                <div className="profilePic">
                  <img src={userPic} alt="" />
                </div>
                <p>Elizabeth</p>
              </div>
            </td>
            <td style={{ width: "25%" }}>Elizabeth77@email.com</td>
            <td style={{ width: "25%" }}>1 Hour Ago</td>
            <td style={{ width: "25%" }}>
              <div>
                <span class="material-symbols-outlined">
                  fiber_manual_record
                </span>
                <p>Admin</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="footerIcons">
        <p>Page 1 of 5</p>
        <div className="pageNum">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
