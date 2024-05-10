import { useState } from "react";

const ActivityForm = ({ activities, selectedActivity }) => {
  const [currentActivity, setCurrentActivity] = useState();

  const options = activities.data?.map((activity, index) => {
    return (
      <option value={activity.id} key={index}>
        {activity.name}
      </option>
    );
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    selectedActivity(currentActivity);
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
          <option disabled value="select-estate">
            Choose an activity
          </option>
          {options}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ActivityForm;
