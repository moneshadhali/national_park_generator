import { useState } from "react";

const ActivityForm = ({ activities }) => {
  const [currentActivity, setCurrentActivity] = useState("Select an Activity");

  const options = activities.data?.map((activity, index) => {
    return (
      <option value="activity.name" key={index}>
        {activity.name}
      </option>
    );
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setCurrentActivity(event.target.value);
  };

  return (
    <>
      <h2>Form</h2>
      <h4>National Park Activity Selector</h4>
      <p>
        Pick from a diverse range of park activities to generate a card pack.
        Take the leap into exploration by randomly selecting a park location
        card from the deck.
      </p>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="activityOptions"></label>
        <select
          name="activityOptions"
          id="activityOptions"
          defaultValue={currentActivity}
          onChange={(e) => setCurrentActivity(e.target.value)}
        >
          {options}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ActivityForm;
