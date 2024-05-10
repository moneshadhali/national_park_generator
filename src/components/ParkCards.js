const ParkCards = ({ selectedParks }) => {
  const card = selectedParks.data?.map((items) => {
    return items.parks.map((park, index) => {
      return (
        <div className="card" key={index}>
          <p>{park.url}</p>
          <p>{park.fullName}</p>
          <p>{park.designation}</p>
        </div>
      );
    });
  });

  return (
    <>
      <section className="cardContainer">{card}</section>
    </>
  );
};

export default ParkCards;
