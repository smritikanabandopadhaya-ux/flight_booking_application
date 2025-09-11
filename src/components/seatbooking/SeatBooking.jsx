import { useState } from "react";

const SeatBooking = ({ seatArrange, travelClass }) => {
  const rows = seatArrange.rows;
  const columns = seatArrange.columns;
  const businessRows = 4;
  const mytravelClass = travelClass;
  const [bookedSeats, setBookedSeats] = useState(seatArrange.bookedSeats);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return; // can't select booked seat
    setSelectedSeat(seat);
  };

  const handleBooking = () => {
    if (!selectedSeat) return alert("No seat is selected.");
    else {
      setBookedSeats([...bookedSeats, selectedSeat]);
      alert("seat is selected.");
    }
    setSelectedSeat(null);
  };

  const renderSeat = (row, col) => {
    const seat = `${String.fromCharCode(65 + row)}${col + 1}`; // A, B, C, D
    const isBooked = bookedSeats.includes(seat);
    const isSelected = selectedSeat === seat;

    //  window seat check
  let isWindow = false;
  if (travelClass === "Economy") {
    // Economy 
    isWindow = col === 0 || col === columns - 1;
    // Window seat check
  } else if (travelClass === "Business") {
    // Business 
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
        ${
          isWindow ? "border-2 border-blue-400 " : ""
        }  // 👈 highlight window seats
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
      <div className="flex justify-between font-bold text-lg mb-4">
       <div>{travelClass} Class</div>
       <div> <button
          className="bg-white text-violet-900 p-2 w-40 rounded-2xl hover:bg-violet-900 hover:text-white"
          onClick={handleBooking}
        >
          Book Now
        </button></div>
      </div>
       {/* <div className="flex justify-end mt-5">
        
      </div> */}
      {travelClass === "Economy" ? (
        <div className="flex flex-col gap-4">
          {[...Array(rows)].map((_, row) => (
            <div key={row} className="flex justify-center gap-8">
              {/* Left block (A, B, C) */}
              <div className="flex gap-2">
                {[0, 1, 2].map((col) => renderSeat(row, col))}
              </div>
              {/* Right block (D, E, F) */}
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
              {/* Left block (A, B) */}
              <div className="flex gap-2">
                {[0, 1].map((col) => renderSeat(row, col, "B"))}
              </div>
              {/* Right block (C, D) */}
              <div className="flex gap-2">
                {[2, 3].map((col) => renderSeat(row, col, "B"))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SeatBooking;
