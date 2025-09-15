import "./Pages/login/Login.css";
import Login from "./Pages/login/Login";
import BoardingDetails from "./Pages/boardingpassgenerator/boardingdetails/BoardingDetails";
import FlightDetails from "./Pages/boardingpassgenerator/FlightDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardingPass from "./Pages/boardingpassgenerator/BoardingPass";
import Profile from "./Pages/profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/flight-details" element={<FlightDetails />} />
        <Route path="/boarding-details" element={<BoardingDetails />} />
        <Route path="/boarding-pass" element={<BoardingPass />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default App;
