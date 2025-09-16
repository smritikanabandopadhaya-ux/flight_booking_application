import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/background_image1.jpeg";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("loginData"));
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
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
        <div className=" bg-gray-300 shadow-md mr-30 ml-20 rounded-xl p-4 flex justify-between mb-14">
          <div className="flex justify-self-start gap-8">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-black hover:text-white transition"
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
            <h2 className="text-2xl font-bold text-[#533d88]">
              Welcome, {user?.name}
            </h2>
          </div>
          <div className="text-[#533d88] mr-8 m-2 font-bold">
            Your Boarding History
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {history.length > 0 ? (
            history.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#7f5d9a] to-purple-200 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition p-6 flex flex-col justify-between"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.flightNumber} – {item.airline}
                </h3>
                <p className="text-black text-sm">
                  <span className="font-semibold">Name: {item.name} </span>
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">From: {item.origin} </span>
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">To: {item.destination} </span>
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Date: {item.date} </span>
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Departure: {item.departuretime}</span>
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Boarding: {item.boardingtime} </span>
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Duration: {item.duration} </span>
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Class: {item.travelClass}</span>
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Gate: {item.gate} </span> 
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Terminal: {item.terminal} </span> 
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Luggage: {item.luggage}{" "} </span> 
                  kg (Allowed {item.luggageWeight})
                </p>
                <p className="text-black text-sm">
                  <span className="font-semibold">Food: {item.food} </span> 
                </p>
                <p className="text-black text-sm mt-2">
                  <span className="font-semibold">Price: ₹{item.price}</span>
                </p>
                <p className="text-white text-m">
                  <span className="font-semibold">Seat:</span><span className="font-semibold text-white"> {item.seat}</span>
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full font-bold text-white mr-5">
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
