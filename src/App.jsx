import React from "react";
import "./Pages/Login.css";
import Login from "./Pages/Login";
import BoardingDetails from "./pages/boardingpassgenerator/BoardingDetails";
import FlightDetails from "./pages/boardingpassgenerator/FlightDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/flight-details" element={<FlightDetails />} />
        <Route path="/boarding-details" element={<BoardingDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
