import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import extractOgData from "../../utils/ogExtractor";
import { baseUrl } from "./../../configuration";

require("dotenv").config({ path: require("find-config")(".env") });

export default function Feed({ currentSport }) {
  const [liveData, setliveData] = useState([]);
  useEffect(() => {
    fetchFeed(currentSport).then((res) => {
      console.log(res);
      if (res && res.data.data) {
        let data = res.data.data.slice(0, 5);
        console.log(data);
        setliveData(data);
      } else {
        console.log("error in fetching feed");
      }
    });
  }, []);

  return (
    <>
      <div className="Feed m-t-16 f-w-600"> Trending</div>
      {liveData.map((feedItem) => {
        return (
          <div className="feeditem" key={feedItem.guid}>
            <span>{feedItem.title}</span>
            <span>{getogImageUrl(feedItem.url)}</span>
          </div>
        );
      })}
    </>
  );
}

async function fetchFeed(currentSport = "cricket") {
  return axios.get(baseUrl + "feed/" + currentSport);
}

function getogImageUrl(url) {
  return extractOgData(url);
}
