import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import "./BoardingPass.css";
import username from "../../assets/username.svg";
import luggage from "../../assets/luggage-svgrepo-com.svg";
import SeatBooking from "../../components/SeatBooking";

const Form = () => {
  const bookMySeat = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="background flex justify-around flex-row-reverse">
        <SeatBooking></SeatBooking>
        <form className="boarding-form mt-16">
          <div className="boarding-form-fields boarding-form-header">
            Boarding Pass
          </div>
          <div className="boarding-form-fields" id="form-input-name">
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
              src={luggage}
              alt="luggage icon"
              className="boarding-form-icon"
            ></img>
            <input
              type="number"
              name="luggage"
              className="input-field"
              placeholder="  Luggage Weight"
            />
          </div>

          <div className="boarding-form-buttons">
            <div className="sign-in">
              <Button onclick={bookMySeat} type="submit" name="Select Seat" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
