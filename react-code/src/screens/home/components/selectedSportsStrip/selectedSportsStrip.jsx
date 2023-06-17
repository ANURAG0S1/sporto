import "./selectedSportsStrip.css";
import React from "react";

export default function selectedSportStrip({currentSport,changeSport}) {
  return (
    <>
      <div className="selected-sports-strip">
        <div className="sport-category selected f-12" onClick={()=>changeSport('cricket')}>Cricket</div>
        <div className="sport-category f-12" onClick= {()=>{changeSport('badminton')}}>Badminton</div>
      
        <div className="sport-category f-12">{{currentSport}}</div>
        <div className="sport-category f-12">BaseBall</div>
        <div className="sport-category f-12"> Football</div>
        <div className="sport-category f-12">Add more Sports</div>
      </div>
    </>
  );
}
