import React from 'react';
import './FlightCard.css';

const FlightCard = ({ flight }) => {
  const {
    airline,
    flightNumber,
    origin,
    destination,
    date,
    time,
    duration,
    price,
    travelClass
  } = flight;

  return (
    <div className="flight-card">
      <div className="flight-header">
        <h3>{airline}</h3>
        <span>Flight #{flightNumber}</span>
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
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Class:</strong> {travelClass}</p>
        </div>

        <div className="price">
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
