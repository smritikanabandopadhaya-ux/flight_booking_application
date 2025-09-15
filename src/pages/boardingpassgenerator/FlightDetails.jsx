import source_img from "../../assets/flight-takeoff-svgrepo-com.svg";
import destination from "../../assets/flight-land-svgrepo-com.svg";
import calender from "../../assets/calender-svgrepo-com.svg";
import Button from "../../components/buttons/Button";
import class_img from "../../assets/seat-pictogram-2-svgrepo-com.svg";
import { useState } from "react";
import allFlightDetails from "../../assets/flights.json";
import FlightCard from "./flightcard/FlightCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const FlightDetails = () => {
  const [flightsAvailable, setflightsAvailable] = useState([]);
  const [myFlight, setMyFlight] = useState([]);
  const [source, setSource] = useState("");
  const locations = [
    "Amritsar",
    "Bengaluru",
    "Chennai",
    "Delhi",
    "Goa",
    "Jammu & Kashmir",
    "Kochi",
    "Kolkata",
    "Hyderabad",
    "Mumbai",
    "New Jalpaiguri",
    "Pune",
    "Vizag",
  ];
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
        boardingtime: flight.boardingTime,
        departuretime: flight.origin.departureTime,
        duration: flight.duration,
        price:
          myFlight.class_name === "Economy"
            ? flight.price.economy
            : flight.price.business,
        travelClass: myFlight.class_name,
        luggageWeight: flight.baggage.checkIn,
        seatDetails: flight.seats,
        terminal: flight.origin.terminal,
        gate: flight.gate,
      }}
    />
  ));
  return (
    <div>
      <div className="background flex-col justify-center align-baseliner">
        <div>
          <Navbar></Navbar>
        </div>
        <section className="flex justify-between">
          <div className="flex gap-8 p-10 pl-50">
            {flightCards.length > 0 ? flightCards : <div />}
          </div>
          <form
            className="boarding-form p-10 m-10 pr-32"
            onSubmit={checkFlights}
          >
            <div className="boarding-form-fields boarding-form-header">
              Let's book your next flight,
            </div>
            <div className="boarding-form-fields" id="form-input-name">
              <img
                src={source_img}
                alt="Flight from icon"
                className="boarding-form-icon"
              ></img>
              <select
                className="input-field"
                name="source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              >
                <option value="">Source</option>
                {locations.map((loc, i) => (
                  <option key={i} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="boarding-form-fields" id="form-input-name">
              <img
                src={destination}
                alt="Fright to icon"
                className="boarding-form-icon"
              ></img>
              <select className="input-field" name="destination">
                <option value="">Destination</option>
                {locations
                  .filter((loc) => loc !== source) // hide selected source
                  .map((loc, i) => (
                    <option key={i} value={loc}>
                      {loc}
                    </option>
                  ))}
              </select>
            </div>
            <div className="boarding-form-fields">
              <img
                src={calender}
                alt="calender icon"
                className="boarding-form-icon"
                placeholder="   Date"
              ></img>
              <input
                type="date"
                name="date"
                className="input-field"
                min={new Date().toISOString().split("T")[0]}
                required
              />
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

              <input type="radio" name="class_name" value="Business" required />
              <label htmlFor="business">Business</label>
              <input type="radio" name="class_name" value="Economy" required />
              <label htmlFor="economy">Economy</label>
            </div>
            <div className="boarding-form-buttons">
              <div className="sign-in">
                <Button type="submit" name="Check Flights" />
              </div>
            </div>
          </form>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default FlightDetails;
