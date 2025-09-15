import { useEffect, useState } from "react";
import Button from "../../../components/buttons/Button";
import "./BoardingDetails.css";
import username from "../../../assets/username.svg";
import luggage from "../../../assets/luggage-svgrepo-com.svg";
import SeatBooking from "../../../components/seatbooking/SeatBooking";
import food_img from "../../../assets/food_img.svg";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";

const Form = () => {
  const [showSeatBooking, setShowSeatBooking] = useState(false);
  const [flightData, setFlightData] = useState(null);
  const [maxluggage, setMaxLuggage] = useState(0);
  const [seatArrangement, setSeatArrangement] = useState(null);
  const [travelClass, setTravelClass] = useState("");
  const userdata=JSON.parse(localStorage.getItem("loginData"));

  useEffect(() => {
    const savedData = localStorage.getItem("flightData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFlightData(parsedData);
      // console.log("All:", parsedData);
      const weightNum = parseInt(parsedData.luggageWeight, 10); // extracts the integer part
      setMaxLuggage(weightNum);
      // console.log("seat", parsedData.seatDetails);
      setSeatArrangement(parsedData.seatDetails);
      setTravelClass(parsedData.travelClass);
    }
  }, []);

  const bookMySeat = (e) => {
    e.preventDefault(); // prevent form from reloading
    const data = new FormData(e.target); // for having form data
    const value = Object.fromEntries(data.entries());
    console.log({ value });
    const jsonString = JSON.stringify(value);
    localStorage.setItem("boardingDetails", jsonString);
    setShowSeatBooking(true); // show SeatBooking after submit
  };
  return (
    <>
      <div className="background flex-col justify-center align-baseliner">
        <div>
          <Navbar></Navbar>
        </div>
        <section className="flex justify-evenly">
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
                defaultValue={userdata.name}
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
                max={maxluggage}
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
              <input type="radio" name="food" value="Veg" required />
              <label htmlFor="veg">Veg</label>
              <input type="radio" name="food" value="Non Veg" required />
              <label htmlFor="non_veg">Non Veg</label>
            </div>

            <div className="boarding-form-buttons">
              <div className="sign-in">
                <Button type="submit" name="Select Seat" />
              </div>
            </div>
          </form>
        
        {showSeatBooking && (
          <SeatBooking
            seatArrange={seatArrangement}
            travelClass={travelClass}
          />
        )}
        </section>
      </div>
      <div>
         <Footer/>
      </div>
      </>
  );
};
export default Form;