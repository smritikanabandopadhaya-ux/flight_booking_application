import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import background from "../../assets/background_image1.jpeg";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("loginData"));
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const boardingHistory =
      JSON.parse(localStorage.getItem("boardingHistory")) || [];
    setHistory(boardingHistory);
  }, []);

  return (
    <>
      <div
        className="min-h-screen py-10 px-4"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-full bg-gray-300 shadow-md rounded-xl p-4 flex justify-between mb-14">
          <div className="flex justify-self-start gap-8">
            {location.pathname !== "/flight-details" && (
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-black hover:text-gray-300 transition"
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
                </svg>
              </button>
            )}
            <h2 className="text-2xl font-bold text-[#533d88]">
              Welcome, {user?.name}
            </h2>
          </div>
          <div className="text-[#533d88] mr-8 m-2 font-bold">
            Your Boarding History
          </div>
        </div>
        {/* Boarding History */}
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {history.length > 0 ? (
            history.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition p-6 flex flex-col justify-between"
              >
                <h3 className="text-lg font-bold text-[#533d88] mb-2">
                  {item.flightNumber} – {item.airline}
                </h3>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Name:</span> {item.name}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">From:</span> {item.origin}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">To:</span> {item.destination}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Date:</span> {item.date}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Departure:</span>{" "}
                  {item.departuretime}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Boarding:</span>{" "}
                  {item.boardingtime}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Duration:</span>{" "}
                  {item.duration}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Seat:</span> {item.seat}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Class:</span>{" "}
                  {item.travelClass}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Gate:</span> {item.gate}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Terminal:</span>{" "}
                  {item.terminal}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Luggage:</span> {item.luggage}{" "}
                  kg (Allowed {item.luggageWeight})
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Food:</span> {item.food}
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  <span className="font-semibold">Price:</span> ₹{item.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-white mr-5">
              No boarding history found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
