import Navbar from "../components/Navbar";
import Home from "../components/Home";
import ActivityForm from "../components/ActivityForm";
import { Routes, Route } from "react-router-dom";
const NationalParkContainer = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<ActivityForm />} />
      </Routes>
    </>
  );
};

export default NationalParkContainer;
