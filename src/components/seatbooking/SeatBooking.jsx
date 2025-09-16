import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SeatBooking = ({ seatArrange, travelClass, flightNumber, flightDate }) => {
  const rows = seatArrange.rows;
  const columns = seatArrange.columns;
  const businessRows = 4;
  const mytravelClass = travelClass;

  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const navigate = useNavigate();

  // Load booked seats for this flight + date
  useEffect(() => {
    const key = `${flightNumber}_${flightDate}`;
    const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
    setBookedSeats(bookings[key] || []);
  }, [flightNumber, flightDate]);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeat(seat);
  };

  const handleBooking = () => {
    if (!selectedSeat) return alert("No seat is selected.");

    const key = `${flightNumber}_${flightDate}`;
    let bookings = JSON.parse(localStorage.getItem("bookings")) || {};

    if (!bookings[key]) bookings[key] = [];
    bookings[key].push(selectedSeat);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    setBookedSeats([...bookedSeats, selectedSeat]);
    setSelectedSeat(null);

    navigate("/make-payment");
  };

  const renderSeat = (row, col) => {
    const seat = `${String.fromCharCode(65 + row)}${col + 1}`; // A, B, C, D
    const isBooked = bookedSeats.includes(seat);
    const isSelected = selectedSeat === seat;

    // Window seat check
    let isWindow = false;
    if (mytravelClass === "Economy") {
      isWindow = col === 0 || col === columns - 1;
    } else if (travelClass === "Business") {
      isWindow = col === 0 || col === 3;
    }

    return (
      <div
        key={seat}
        onClick={() => handleSeatClick(seat)}
        className={`w-16 h-12 flex items-center justify-center rounded-xl cursor-pointer m-1 
          ${isBooked ? "bg-gray-500 cursor-not-allowed" : ""}
          ${isSelected ? "bg-blue-500 text-white" : ""}
          ${
            !isBooked && !isSelected
              ? "bg-white text-violet-950 hover:bg-violet-900 hover:text-white"
              : ""
          }
          ${isWindow ? "border-2 border-blue-400" : ""}
        `}
      >
        {seat}
        {isWindow && (
          <span className="ml-1 text-xs font-bold text-blue-300">W</span>
        )}
      </div>
    );
  };

  return (
    <div className="w-fit flex-col items-center justify-center p-6 mt-6 ml-20">
      {/* Header */}
      <div className="flex justify-between font-bold text-lg mb-4">
        <div>{travelClass} Class</div>
        <div>
          <button
            className="bg-white text-violet-900 p-2 w-40 rounded-2xl hover:bg-violet-900 hover:text-white"
            onClick={handleBooking}
          >
            Make Payment
          </button>
        </div>
      </div>

      {/* Seat Layout */}
      {travelClass === "Economy" ? (
        <div className="flex flex-col gap-4">
          {[...Array(rows)].map((_, row) => (
            <div key={row} className="flex justify-center gap-8">
              <div className="flex gap-2">
                {[0, 1, 2].map((col) => renderSeat(row, col))}
              </div>
              <div className="flex gap-2">
                {[3, 4, 5].map((col) => renderSeat(row, col))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {[...Array(businessRows)].map((_, row) => (
            <div key={row} className="flex justify-center gap-16">
              <div className="flex gap-2">
                {[0, 1].map((col) => renderSeat(row, col))}
              </div>
              <div className="flex gap-2">
                {[2, 3].map((col) => renderSeat(row, col))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="flex gap-6 mt-6 text-black justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white border-white rounded-md"></div>
          <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-500 rounded-md"></div>
          <span className="text-sm">Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
          <span className="text-sm">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-blue-400 bg-white rounded-md flex items-center justify-center">
            <span className="text-xs font-bold text-blue-400">W</span>
          </div>
          <span className="text-sm">Window</span>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
