import source_img from "../../assets/flight-takeoff-svgrepo-com.svg";
import destination from "../../assets/flight-land-svgrepo-com.svg";
import calender from "../../assets/calender-svgrepo-com.svg";
import Button from "../../components/buttons/Button";
import class_img from "../../assets/seat-pictogram-2-svgrepo-com.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import allFlightDetails from "../../assets/flights.json";
import GuestFlightCard from "./GuestFLightCard";
import Footer from "../../components/footer/Footer";

const checkFlights = () => {
  const navigate = useNavigate();
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
    const mySource = myFlightDetails["source"];
    const myDestination = myFlightDetails["destination"];
    setMyFlight(myFlightDetails);
    const flightArray = allFlightDetails.filter(
      (flight) =>
        mySource === flight["origin"]["city"] &&
        myDestination === flight["destination"]["city"]
    );
    setflightsAvailable(flightArray);
  };
  const flightCards = flightsAvailable.map((flight, index) => (
    <GuestFlightCard
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
        <div className="flex justify-self-start gap-7">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-gray-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg> Back to Log In
        </button>
         <h1 className="text-5xl font-bold text-[#533d88]">
              The World is Waiting. We'll Take You There. 
            </h1>
      </div>
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
              Let's fly Beyond the Ordinary,
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
                required
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
              <select className="input-field" name="destination" required>
                <option value="">Destination</option>
                {locations
                  .filter((loc) => loc !== source) 
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
                min={
                  new Date(Date.now() + 86400000).toISOString().split("T")[0]
                }
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
export default checkFlights;
