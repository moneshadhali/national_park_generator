const ActivityForm = ({ activities }) => {
  const options = activities.data?.map((activity, index) => {
    return (
      <option value="activity.name" key={index}>
        {activity.name}
      </option>
    );
  });

  return (
    <>
      <h2>Form</h2>
      <h4>National Park Activity Selector</h4>
      <p>
        Pick from a diverse range of park activities to generate a card pack.
        Take the leap into exploration by randomly selecting a park location
        card from the deck.
      </p>
      <form action="">
        <select
          name="activities
        "
          id=""
        >
          {options}
        </select>
      </form>
    </>
  );
};

export default ActivityForm;
