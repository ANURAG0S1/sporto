import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { baseUrl } from "./../../configuration";
import "./live-score.css";

require("dotenv").config({ path: require("find-config")(".env") });

export default function LiveScore() {
  const [liveData, setliveData] = useState([]);
  useEffect(() => {
    fetchLiveData().then((res) => {
      console.log(res);
      if (res && res.data) {
        setliveData(res.data);
      } else {
        console.log("error in fetching live scores");
      }
    });
  }, []);

  return (
    <>
      <div className="offerings m-t-16 f-w-600"> Live Score</div>
      <div className="matches">
        {liveData.map((match) => {
          return (
            <div
              key={match.id}
              className="d-flex match"
              style={{
                display: " flex",
                flexDirection: " column",
                padding: " 10px 12px",
                border: "1px solid gray",
                borderRadius: "12px",
                maxWidth: "300px",
                minWidth: "250px",
                margin: "0px 8px",
              }}
            >
              <div className="team d-flex-jc-sb">
                <div className="left d-flex">
                  <img src={match.teamInfo[0].img} alt="" height="24" />
                  <span className="name">{match.teamInfo[0].shortname}</span>
                </div>
                <div className="right">
                  {match.score[0].r}/{match.score[0].w}
                  <span className="over">({match.score[0].o})</span>
                </div>
              </div>
              <div className="team d-flex-jc-sb">
                <div className="left">
                  <img src={match.teamInfo[1].img} alt="" height="24" />
                  <span className="name">{match.teamInfo[1].shortname}</span>
                </div>
                <div className="right">
                  {match.score[1].r}/{match.score[1].w}
                  <span className="over">({match.score[1].o})</span>
                </div>
              </div>
              <div className="status">
                <p>{match.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

async function fetchLiveData() {
  // let currentSport = localStorage.getItem("cs")
  //   ? localStorage.getItem("cs")
  //   : "cricket";
  let currentSport = "cricket";

  return axios.get(baseUrl + "live/" + currentSport);
}
