import "./selectedSportsStrip.css";

export default function selectedSportStrip() {
  return (
    <>
      <div className="selected-sports-strip">
        <div className="sport-category selected f-12">Cricket</div>
        <div className="sport-category f-12">Badminton</div>
        <div className="sport-category f-12">Golf</div>
        <div className="sport-category f-12">BaseBall</div>
        <div className="sport-category f-12"> Football</div>
        <div className="sport-category f-12">Add more Sports</div>
      </div>
    </>
  );
}
