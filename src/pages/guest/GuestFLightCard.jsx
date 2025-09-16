import "../boardingpassgenerator/flightcard/FlightCard.css";
import Button from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

const GuestFlightCard = ({ flight }) => {
  const {
    airline,
    flightNumber,
    origin,
    destination,
    date,
    departuretime,
    duration,
    travelClass,
    price,
  } = flight;
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert("Please log in to book flight");
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flight-card">
        <div className="flight-header">
          <h3>{airline}</h3>
          <span>{flightNumber}</span>
        </div>

        <div className="flight-body">
          <div className="route">
            <div>
              <span className="label">From</span>
              <h4>{origin}</h4>
            </div>
            <div className="arrow">✈️</div>
            <div>
              <span className="label">To</span>
              <h4>{destination}</h4>
            </div>
          </div>

          <div className="flight-info">
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {departuretime}
            </p>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
            <p>
              <strong>Class:</strong> {travelClass}
            </p>
            <p>
              <strong>Price:</strong> {price} INR
            </p>
          </div>
          <Button name="Let's Fly" type="submit"></Button>
        </div>
      </div>
    </form>
  );
};

export default GuestFlightCard;
