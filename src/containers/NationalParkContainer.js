import Navbar from "../components/Navbar";
import Home from "../components/Home";
import ActivityForm from "../components/ActivityForm";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
const NationalParkContainer = () => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    const response = await fetch(
      `https://developer.nps.gov/api/v1/activities?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setActivities(data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home activities={activities} />} />
        <Route path="/activity" element={<ActivityForm />} />
      </Routes>
      <footer>
        <p>Copyright © 2024. All rights reserved.</p>
      </footer>
    </>
  );
};

export default NationalParkContainer;
