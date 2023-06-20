import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import extractOgData from "../../utils/ogExtractor";
import { baseUrl } from "./../../configuration";

require("dotenv").config({ path: require("find-config")(".env") });

export default function Feed({ currentSport }) {
  const [liveData, setliveData] = useState([]);
  useEffect(() => {
   
  }, []);

  return (
    <>
      <div className="Feed m-t-16 f-w-600"> Trending</div>
      {liveData.map((feedItem) => {
        return (
          <div className="feeditem" key={feedItem.guid}>
            <span>{feedItem.title}</span>
            {/* <span>{getogImageUrl(feedItem.url)}</span> */}
          </div>
        );
      })}
    </>
  );
}


function getogImageUrl(url) {
  return extractOgData(url);
}
