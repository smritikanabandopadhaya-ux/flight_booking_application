import React from "react";

const BoardingPass = ({ passenger, from, to, flight, gate, date, time, seat }) => {
  return (
    <div className="w-[700px] bg-white rounded-xl shadow-xl overflow-hidden flex border-2 border-gray-300">
      {/* Left Section */}
      <div className="flex-1 p-6 border-r-2 border-dashed border-gray-400">
        <h2 className="text-xl font-bold text-center bg-blue-600 text-white py-2 rounded-md">
          BOARDING PASS
        </h2>

        {/* Fake Barcode */}
        <div className="my-4 flex justify-center">
          <div className="flex gap-[2px]">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`h-24 ${
                  i % 2 === 0 ? "w-1 bg-black" : "w-[2px] bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="text-sm space-y-2 text-black">
          <p>
            <span className="font-semibold">Passenger:</span> {passenger}
          </p>
          <p>
            <span className="font-semibold">Flying From:</span> {from}
          </p>
          <p>
            <span className="font-semibold">To:</span> {to}
          </p>
          <p>
            <span className="font-semibold">Flight:</span> {flight}
          </p>
          <p>
            <span className="font-semibold">Departure Date:</span> {date}
          </p>
          <p>
            <span className="font-semibold">Departure Time:</span> {time}
          </p>
          <p className="mt-3 text-xs text-red-600 font-medium">
            Gate closes 15 minutes before departure
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[220px] p-4 bg-gray-50">
        <h2 className="text-lg font-bold text-center bg-blue-600 text-white py-2 rounded-md">
          BOARDING PASS
        </h2>
        <div className="mt-4 text-sm text-black space-y-2">
          <p>
            <span className="font-semibold">Passenger:</span> {passenger}
          </p>
          <p>
            <span className="font-semibold">From:</span> {from}
          </p>
          <p>
            <span className="font-semibold">To:</span> {to}
          </p>
          <p>
            <span className="font-semibold">Flight:</span> {flight}
          </p>
          <p>
            <span className="font-semibold">Gate:</span> {gate}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {date}
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="font-bold text-lg">SEAT {seat}</p>
        </div>
      </div>
    </div>
  );
};

// Example usage
export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <BoardingPass
        passenger="John Smith"
        from="NYC"
        to="LA"
        flight="BH01122"
        gate="B27"
        date="25 MAY"
        time="20:10"
        seat="16C"
      />
    </div>
  );
}
