import { useState } from "react";
import Button from "./buttons/Button";

const SeatBooking = () => {
  const rows = 9;
  const cols = 5;
  const [bookedSeats, setBookedSeats] = useState(["B3", "D1","E1","G5","F5"]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return; // can't select booked seat
    setSelectedSeat(seat);
  };

  const handleBooking = () => {
    if (!selectedSeat) return alert("No seat is selected.");
    else {setBookedSeats([...bookedSeats, selectedSeat]);
    alert("seat is selected.");
    }
    setSelectedSeat(null);
  };

  const renderSeat = (row, col) => {
    const seat = `${String.fromCharCode(65 + row)}${col + 1}`; // A, B, C, D
    const isBooked = bookedSeats.includes(seat);
    const isSelected = selectedSeat === seat;

    return (
      <div
        key={seat}
        onClick={() => handleSeatClick(seat)}
        className={`w-16 h-12 flex items-center justify-center rounded-xl cursor-pointer m-1 
          ${
            isBooked
              ? "bg-gray-500 cursor-not-allowed"
              : isSelected
              ? "bg-blue-500 text-white"
              : "bg-white text-violet-950 hover:bg-violet-900 hover:text-white"
          }`}
      >
        {seat}
      </div>
    );
  };

  return (
    <div className="w-fit flex-col items-center justify-center p-6 mt-6 ml-20">
      <div className={`grid grid-cols-5 gap-2 justify-center mb-4`}>
        {[...Array(rows)].map((_, row) =>
          [...Array(cols)].map((_, col) => renderSeat(row, col))
        )}
      </div>

      <div className="flex justify-center">
        <button className="bg-white text-violet-900 p-4 w-40 rounded-2xl hover:bg-violet-900 hover:text-white"
          onClick={handleBooking}
        >Book Now
        </button>
      </div>
    </div>
  );
};
export default SeatBooking;
