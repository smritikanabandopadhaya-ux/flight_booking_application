import React from "react";
import "./Pages/Login.css";
import Login from "./Pages/Login";
import BoardingPass from "./Pages/boardingpassgenerator/BoardingPass";
import FlightDetails from "./Pages/boardingpassgenerator/FlightDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/flight-details" element={<FlightDetails />} />
        <Route path="/boarding-pass" element={<BoardingPass />} />
      </Routes>
    </Router>
  );
}
export default App;
