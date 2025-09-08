import React, {useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import "./BoardingPass.css";
import username from "../../assets/username.svg";
import luggage from "../../assets/luggage-svgrepo-com.svg";
import SeatBooking from "../../components/SeatBooking";
import food_img from "../../assets/food_img.svg";

const Form = () => {
  const [showSeatBooking, setShowSeatBooking] = useState(false);
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("flightData");
    if (savedData) {
      setFlightData(JSON.parse(savedData));
      // console.log(savedData);
    }
  }, []);

  const bookMySeat = (e) => {
    e.preventDefault(); // prevent form from reloading
    setShowSeatBooking(true); // show SeatBooking after submit
  };
  return (
    <div>
      <div className="background flex justify-around">
        <form className="boarding-form mt-16 ml-12" onSubmit={bookMySeat}>
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
              min="0"
              max="25"
              required
            />
          </div>
          <div
            className="boarding-form-fields flex gap-5 mr-6"
            id="form-input-name"
          >
            <img
              src={food_img}
              alt="Food icon"
              className="boarding-form-icon "
            ></img>
            <label htmlFor="veg" className="mr-6">
              Food:
            </label>
            <input type="radio" name="class_name" value="Veg" required />
            <label htmlFor="veg">Veg</label>
            <input type="radio" name="class_name" value="Non_veg" required />
            <label htmlFor="non_veg">Non Veg</label>
          </div>

          <div className="boarding-form-buttons">
            <div className="sign-in">
              <Button type="submit" name="Select Seat" />
            </div>
          </div>
        </form>
        {showSeatBooking && <SeatBooking />}
      </div>
    </div>
  );
};
export default Form;
