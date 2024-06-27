import { useNavigate } from "react-router-dom";

const ParkCards = ({ selectedParks }) => {
  const navigate = useNavigate();
  const card = selectedParks.data?.map((items) => {
    return items.parks.map((park, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-inner">
            <div className="card-front"></div>
            <div className="card-back">
              <p>
                <span>Designation:</span> {park.designation}
              </p>
              <p>
                <span>Name:</span> {park.fullName}
              </p>
              <p>
                <span>URL:</span> {park.url}
              </p>
            </div>
          </div>
        </div>
      );
    });
  });

  return (
    <>
      <button className="activity-btn" onClick={() => navigate("/activity")}>
        Choose Activity Again
      </button>
      {selectedParks ? <section className="cardContainer">{card}</section> : ""}
    </>
  );
};

export default ParkCards;
