import "./home.css";
import React from "react";

import SelectedSportStrip from "./components/selectedSportsStrip/selectedSportsStrip.jsx";
import LiveScore from "../live-score/live-score";
import Feed from "../trending/feed";
// import { Toast } from "react-toastify/dist/components";
const userIcon = require("../../assets/icons/userIcon.png");
const locationIcon = require("../../assets/icons/location.png");
const academyBg = require("../../assets/images/academy.png");
const meetupBg = require("../../assets/images/meetup.png");
const newandScoreBg = require("../../assets/images/match.png");
const events = require("../../assets/images/event.png");
export function Home() {
  let currentSport = "cricket";
  return (
    <>
      <div className="home-screen">
        {/* <Toast></Toast> */}
        <div className="profile-bar d-flex jc-sb aic">
          <div className="select-location d-flex aic ">
            <img src={locationIcon} alt="" />
            <span className="f-12">Tri nagar, Delhi</span>
          </div>
          <div className="open-profile d-flex">
            <img src={userIcon} alt="" />
          </div>
        </div>
        <SelectedSportStrip></SelectedSportStrip>
        <div className="offerings m-t-16 f-w-600"> Our Offerings</div>
        <div className="feature-list m-t-12 d-flex">
          <div className="feature w-50 d-flex aic fdr-c">
            <div className="img">
              <img src={academyBg} alt="" />
            </div>
            <div className="text">Academy</div>
          </div>{" "}
          <div className="feature w-50 d-flex aic fdr-c">
            <div className="img">
              <img src={events} alt="" />
            </div>
            <div className="text">Events</div>
          </div>{" "}
          <div className="feature w-50 d-flex aic fdr-c">
            <div className="img">
              <img src={meetupBg} alt="" />
            </div>
            <div className="text">Meetup</div>
          </div>{" "}
          <div className="feature w-50 d-flex aic fdr-c">
            <div className="img">
              <img src={newandScoreBg} alt="" />
            </div>
            <div className="text">News & Score</div>
          </div>
        </div>

        {/* Live matches  */}
        <LiveScore currentSport={currentSport}></LiveScore>

        {/* Trending  */}
        <Feed currentSport={currentSport}></Feed>
      </div>
    </>
  );
}
