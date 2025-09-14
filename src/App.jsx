import React from "react";
import "./Pages/login/Login.css";
import Login from "./Pages/login/Login";
import BoardingDetails from "./pages/boardingpassgenerator/boardingdetails/BoardingDetails";
import FlightDetails from "./pages/boardingpassgenerator/FlightDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarcodeGenerator from "./Pages/boardingpassgenerator/BoardingPass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/flight-details" element={<FlightDetails />} />
        <Route path="/boarding-details" element={<BoardingDetails />} />
        <Route path="/boarding-pass" element={<BarcodeGenerator />} />
      </Routes>
    </Router>
  );
}
export default App;
