import source from "../../assets/flight-takeoff-svgrepo-com.svg";
import destination from "../../assets/flight-land-svgrepo-com.svg";
import calender from "../../assets/calender-svgrepo-com.svg";
import Button from "../../components/buttons/Button";
import class_img from "../../assets/seat-pictogram-2-svgrepo-com.svg";
import { useState } from "react";
import allFlightDetails from "../../assets/flights.json";
import FlightCard from "./FlightCard";

const FlightDetails = () => {
  const [flightsAvailable, setflightsAvailable] = useState([]);
  const [myFlight, setMyFlight] = useState([]);

  const checkFlights = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const myData = new FormData(e.target);
    const myFlightDetails = Object.fromEntries(myData.entries());
    setMyFlight(myFlightDetails);
    // console.log(myFlightDetails);
    const mySource = myFlightDetails["source"];
    const myDestination = myFlightDetails["destination"];

    const flightArray = allFlightDetails.filter(
      (flight) =>
        mySource === flight["origin"]["city"] &&
        myDestination === flight["destination"]["city"]
    );
   // console.log("flight Array", flightArray);
    setflightsAvailable(flightArray);
   // console.log("flights avialable", flightsAvailable);
  };
  const flightCards = flightsAvailable.map((flight, index) => (
    <FlightCard
      key={index}
      flight={{
        airline: flight.airline,
        flightNumber: flight.flightNumber,
        origin: flight.origin.city,
        destination: flight.destination.city,
        date: myFlight.date,
        time: flight.boardingTime,
        duration: flight.duration,
        price: flight.price,
        travelClass: myFlight.class_name,
        luggageWeight: flight.baggage.checkIn,
        seatDetails: flight.seats,
      }}
    />
  ));
  return (
    <div>
      <div className="background flex justify-between align-baseliner">
        <div className="flex gap-8 p-10 pl-50">
        {flightCards.length > 0 ? flightCards : <div/>}
        </div>
        <form className="boarding-form p-10 m-10 pr-32" onSubmit={checkFlights}>
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
          <div
            className="boarding-form-fields flex gap-4 mr-6"
            id="form-input-name"
          >
            <img
              src={class_img}
              alt="class icon"
              className="boarding-form-icon mr-2"
            ></img>
            <label htmlFor="business" className="mr-4">
              Class :
            </label>

            <input type="radio" name="class_name" value="Business" />
            <label htmlFor="business">Business</label>
            <input type="radio" name="class_name" value="Economy" />
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
