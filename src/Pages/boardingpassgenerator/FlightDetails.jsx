import source from "../../assets/flight-takeoff-svgrepo-com.svg";
import destination from "../../assets/flight-land-svgrepo-com.svg";
import calender from "../../assets/calender-svgrepo-com.svg";
import Button from "../../components/buttons/Button";
import class_img from "../../assets/seat-pictogram-2-svgrepo-com.svg";
import { useState } from "react";
import allFlightDetails from "../../assets/flights.json";

const FlightDetails = () => {
  const [ flightsAvailable, setflightsAvailable]= useState([]);

  const checkFlights = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const myData = new FormData(e.target);
    const myFlightDetails = Object.fromEntries(myData.entries());
    // console.log(myFlightDetails);
    const mySource=myFlightDetails["source"];
    const myDestination=myFlightDetails["destination"];

    const flightArray= allFlightDetails.filter(
      flight=>{
        if (mySource === flight["origin"]["city"] && myDestination === flight["destination"]["city"])
          return true;
        else false;
      }
    )
    console.log(flightArray);
    setflightsAvailable(flightArray);
    
    
  };
  return (
    <div>
      <div></div>
      <div className="background flex justify-end">
        <form className="boarding-form p-10 m-10" onSubmit={checkFlights}>
          <div className="boarding-form-fields boarding-form-header">
            Let's book your next flight,
          </div>
          <div className="boarding-form-fields" id="form-input-name">
            <img
              src={source}
              alt="Flight from icon"
              className="boarding-form-icon"
            ></img>
            <select className="input-field" name="source">
              <option>Source</option>
              <option>Amritsar</option>
              <option>Bengaluru</option>
              <option>Chennai</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Jammu & Kasmir</option>
              <option>Kochi</option>
              <option>Kolkata</option>
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>New Jalpaiguri</option>
              <option>Pune</option>
              <option>Vizag</option>
            </select>
          </div>
          <div className="boarding-form-fields" id="form-input-name">
            <img
              src={destination}
              alt="Fright to icon"
              className="boarding-form-icon"
            ></img>
            <select className="input-field" name="destination">
               <option>Destination</option>
              <option>Amritsar</option>
              <option>Bengaluru</option>
              <option>Chennai</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Jammu & Kasmir</option>
              <option>Kochi</option>
              <option>Kolkata</option>
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>New Jalpaiguri</option>
              <option>Pune</option>
              <option>Vizag</option>
            </select>
          </div>
          <div className="boarding-form-fields">
            <img
              src={calender}
              alt="calender icon"
              className="boarding-form-icon"
              placeholder="   Date"
            ></img>
            <input type="date" name="date" className="input-field" />
          </div>
          <div className="boarding-form-fields flex gap-4 mr-6" id="form-input-name">
            <img
              src={class_img}
              alt="class icon"
              className="boarding-form-icon mr-2"
            ></img>
            <label htmlFor="business" className="mr-4">Class :</label>

            <input type="radio" name="class-name" value="business" />
            <label htmlFor="business">Business</label>
            <input type="radio" name="class-name" value="economy"/>
            <label htmlFor="economy">Economy</label>
          </div>
          <div className="boarding-form-buttons">
            <div className="sign-in">
              <Button type="submit" name="Check Flights" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FlightDetails;
