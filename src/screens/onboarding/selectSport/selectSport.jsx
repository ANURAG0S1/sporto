import "./selectSport.css";
const searchIcon = require("../../../assets/icons/search.png");
const cricketImage = require("../../../assets/icons/sports/cricket.png");
const badmintonImage = require("../../../assets/icons/sports/badminton.png");
const baseball = require("../../../assets/icons/sports/baseball.png");
const basketBall = require("../../../assets/icons/sports/basketball.png");
const golf = require("../../../assets/icons/sports/golf.png");

export function SelectSport() {
  return (
    <>
      <div className="select-sport-screen">
        <div className="header f-16 f-w-600">Select Your favourite Sports</div>
        <div className="search-sport-input-box w-100 d-flex  aic">
          <input
            type="text"
            name="search"
            placeholder="Search for multiple Sports"
          />
          <div className="search-icon">
            <img src={searchIcon} className="d-flex" alt="" />
          </div>
        </div>

        <div className="sports-container">
          <div className="sport d-flex jcc aic fdr-c">
            <img src={cricketImage} alt="" />

            <div className="sport-name">Cricket</div>
          </div>

          <div className="sport selected d-flex jcc aic fdr-c">
            <img src={golf} alt="" />

            <div className="sport-name">Golf</div>
          </div>
          <div className="sport d-flex jcc aic fdr-c">
            <img src={basketBall} alt="" />

            <div className="sport-name">BasketBall</div>
          </div>
          <div className="sport d-flex jcc aic fdr-c">
            <img src={badmintonImage} alt="" />

            <div className="sport-name">Badminton</div>
          </div>

          <div className="sport d-flex jcc aic fdr-c">
            <img src={baseball} alt="" />

            <div className="sport-name">BaseBall</div>
          </div>
        </div>

        <div className="proceed-button f-16 f-w-600 w-100 d-flex aic jcc">
          Proceed
        </div>
      </div>
    </>
  );
}
