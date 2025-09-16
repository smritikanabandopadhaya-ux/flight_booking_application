import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("loginData"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("flightData");
    localStorage.removeItem("selectedSeat");
    localStorage.removeItem("boardingDetails");
    alert("Successfully Logged Out !");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 mr-30 ml-20 py-4 bg-[#533d88] text-[#3c2075] shadow-md rounded-lg">
      {location.pathname !== "/flight-details" && (
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
          </svg>
        </button>
      )}

      <h2 className="m-0 font-sans font-bold text-3xl italic text-white">
        Welcome {user?.name},
      </h2>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/booking-history")}
          className="px-4 py-2 rounded-2xl bg-[#f5f5f5] text-[#533d88] font-medium hover:bg-[#a18dce] hover:text-white transition"
        >
          Bookings
        </button>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-2xl bg-red-500 text-white font-medium hover:bg-white hover:text-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
