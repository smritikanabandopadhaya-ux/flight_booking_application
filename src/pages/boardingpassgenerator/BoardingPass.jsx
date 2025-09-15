import background from "../../assets/background_cover_image.jpeg";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import BoardingPassPDF from "../../components/downloadpass/BoardingPassPDF";
import { useNavigate } from "react-router-dom";

const BoardingPass = () => {
  const myflightDetails = JSON.parse(localStorage.getItem("flightData"));
  const myboardingDetails = JSON.parse(localStorage.getItem("boardingDetails"));
  const mySeat = JSON.parse(localStorage.getItem("selectedSeat"));
  const navigate = useNavigate();
  const handleDownload = async () => {
    const blob = await pdf(
      <BoardingPassPDF
        flightDetails={myflightDetails}
        boardingDetails={myboardingDetails}
        seat={mySeat}
      />
    ).toBlob();
    saveAs(blob, "boarding-pass.pdf");
  };
  const returntoHome = () => {
    navigate("/flight-details");
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Boarding Pass UI */}
      <div className="w-[800px] h-3/5 bg-white rounded-xl shadow-xl overflow-hidden flex border-2 border-gray-300">
        {/* Left Section */}
        <div className="flex-1 p-6 border-r-2 border-dashed border-gray-400">
          <h2 className="text-xl font-bold text-center bg-[#65339b] text-white py-2 rounded-md">
            {myflightDetails.airline} Airline
          </h2>

          {/* Barcode */}
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
              <span className="font-semibold">
                Passenger: {myboardingDetails.name}
              </span>
            </p>
            <p>
              <span className="font-semibold">
                Flight: {myflightDetails.flightNumber}
              </span>
            </p>
            <p>
              <span className="font-semibold">
                Flying From: {myflightDetails.origin}
              </span>
            </p>
            <p>
              <span className="font-semibold">
                Flying To: {myflightDetails.destination}
              </span>
            </p>
            <p>
              <span className="font-semibold">
                Departure Date: {myflightDetails.date}
              </span>
            </p>
            <p>
              <span className="font-semibold">
                Departure Time: {myflightDetails.departuretime}
              </span>
            </p>
            <p>
              <span className="font-semibold">
                Amount: {myflightDetails.price} INR
              </span>
            </p>
            <p className="mt-3 text-xs text-red-600 font-medium">
              Gate closes 15 minutes before departure
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[300px] p-7 bg-[#b382e7]">
          <h2 className="text-lg font-bold text-center bg-white text-[#65339b] py-2 rounded-md">
            BOARDING PASS
          </h2>
          <div className="mt-4 text-sm text-black space-y-2">
            <p>
              <span className="font-semibold">Passenger: </span>
              {myboardingDetails.name}
            </p>
            <p>
              <span className="font-semibold">From: </span>
              {myflightDetails.origin}
            </p>
            <p>
              <span className="font-semibold">To: </span>
              {myflightDetails.destination}
            </p>
            <p>
              <span className="font-semibold">Flight: </span>
              {myflightDetails.flightNumber}
            </p>
            <p>
              <span className="font-semibold">Terminal: </span>
              {myflightDetails.terminal}
            </p>
            <p>
              <span className="font-semibold">Gate: </span>
              {myflightDetails.gate}
            </p>
            <p>
              <span className="font-semibold">Date: </span>
              {myflightDetails.date}
            </p>
            <p>
              <span className="font-semibold">Boarding Time: </span>
              {myflightDetails.boardingtime}
            </p>
            <p>
              <span className="font-semibold">Luggage Weight: </span>
              {myboardingDetails.luggage} KG
            </p>
            <p>
              <span className="font-semibold">Meal: </span>
              {myboardingDetails.food}
            </p>
            <p>
              <span className="font-semibold">
                Amount: {myflightDetails.price} INR
              </span>
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="font-bold text-lg">SEAT: {mySeat}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-10">
        <button
          onClick={handleDownload}
          className="mt-6 px-6 py-2 bg-purple-900 text-white rounded-lg shadow hover:bg-white hover:text-purple-800 "
        >
          Download Pass
        </button>
        <button
          onClick={returntoHome}
          className="mt-6 px-6 py-2 bg-purple-900 text-white rounded-lg shadow hover:bg-white hover:text-purple-800 "
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default BoardingPass;
