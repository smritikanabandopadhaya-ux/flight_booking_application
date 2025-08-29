import React, { useState } from "react";
import Button from "../Buttons/Button";
import "./BoardingPass.css";
import username from "../assets/username.svg";
import calender from "../assets/calender-svgrepo-com.svg";
import flight_class from '../assets/seat-svgrepo-com.svg';
import flight_time from '../assets/time-svgrepo-com.svg';
import gate from '../assets/turnstile-svgrepo-com.svg';
import seat from '../assets/seat-pictogram-2-svgrepo-com.svg';
import luggage from '../assets/luggage-svgrepo-com.svg'

function Form() {

  return (
    
    <div className="background">
      <form className="boarding-form">
        <div className="boarding-form-fields boarding-form-header">
          Boarding Pass
        </div>
        <div
          className="boarding-form-fields"
          id="form-input-name"
        >
          <img
            src={username}
            alt="username icon"
            className="boarding-form-icon"
          ></img>
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="   Name of the Passanger"
          />
        </div>
        <div className="boarding-form-fields">
          <img
            src={flight_class}
            alt="class icon"
            className="boarding-form-icon"
          ></img>
          <input
            type="text"
            name="class"
            className="input-field"
            placeholder="   Class"
            required
          />
        </div>
        <div className="boarding-form-fields">
          <img
            src={calender}
            alt="calender icon"
            className="boarding-form-icon"
          ></img>
          <input
            type="date"
            name="date"
            className="input-field"
            required
          />
        </div>
        <div className="boarding-form-fields">
          <img
            src={flight_time}
            alt="time icon"
            className="boarding-form-icon"
          ></img>
          <input
            type="time"
            name="time"
            className="input-field"
            required
          />
        </div>
        <div className="boarding-form-fields">
          <img
            src={gate}
            alt="gate icon"
            className="boarding-form-icon"
          ></img>
          <input
            type="text"
            name="gate"
            className="input-field"
            placeholder=" Gate No"
            required
          />
        </div>
        <div className="boarding-form-fields">
          <img
            src={seat}
            alt="seat icon"
            className="boarding-form-icon"
          ></img>
          <input
            type="text"
            name="seat"
            className="input-field"
            placeholder="  Seat No"
            required
          />
        </div>
         <div className="boarding-form-fields">
          <img
            src={luggage}
            alt="luggage icon"
            className="boarding-form-icon"
          ></img>
          <input
            type="number"
            name="luggage"
            className="input-field"
            placeholder="  Luggage Weight"
            required
          />
        </div>
       

        <div className="boarding-form-buttons">
          <div className="sign-in">
            <Button type="submit" name="Create Boarding Pass" />
          </div>
        
          <div className="sign-in">
            <Button type="Reset" name="Reset" />
          </div>
        </div>
      </form>
      </div>
    
  );
}
export default Form;
