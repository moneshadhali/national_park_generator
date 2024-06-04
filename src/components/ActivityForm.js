import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActivityForm = ({ activities, selectedActivity }) => {
  const [currentActivity, setCurrentActivity] = useState();
  const navigate = useNavigate();

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
    navigate("/parks");
  };

  return (
    <div className="activityForm">
      <h2>National Park Activity Selector</h2>
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
    </div>
  );
};

export default ActivityForm;
