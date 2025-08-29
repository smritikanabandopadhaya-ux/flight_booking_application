import React from 'react';
import "./Pages/Login.css";
import Login from './Pages/Login';
import { Routes, Route } from 'react-router-dom';
import BoardingPass from './Pages/BoardingPass';


function App() {
  return (
    <>
    <Login></Login>
    <BoardingPass></BoardingPass>
      </>
      );
}

export default App;
