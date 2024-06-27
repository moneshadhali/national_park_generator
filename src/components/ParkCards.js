import { useNavigate } from "react-router-dom";

const ParkCards = ({ selectedParks }) => {
  const navigate = useNavigate();
  const card = selectedParks.data?.map((items) => {
    return items.parks.map((park, index) => {
      return (
        <div className="card" key={index}>
          <p>
            <span>Designation:</span> {park.url}
          </p>
          <p>
            <span>Name:</span> {park.fullName}
          </p>
          <p>
            <span>URL:</span> {park.designation}
          </p>
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
