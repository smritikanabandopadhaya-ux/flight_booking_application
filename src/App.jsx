import React from 'react';
import "./Pages/Login.css";
import Login from './Pages/Login';
import BoardingPass from "./Pages/boardingpassgenerator/BoardingPass";
import FlightDetails from './Pages/boardingpassgenerator/FlightDetails';


function App() {
  return (
    <>
    <Login></Login>
    <FlightDetails></FlightDetails>
    <BoardingPass></BoardingPass>
      </>
      );
}

export default App;
