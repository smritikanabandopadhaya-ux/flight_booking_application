import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user=JSON.parse(localStorage.getItem("userData"));
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // redirect to login page
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#533d88] text-[#3c2075] shadow-md rounded-lg">
      {/* Logo / Title */}
      <h2 className="m-0 font-sans font-bold text-3xl italic text-white">Welcome {user.name},</h2>

      {/* Right Side Buttons */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/profile")}
          className="px-4 py-2 rounded-lg bg-[#bdb3d5] text-[#533d88] font-medium hover:bg-gray-100 transition"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar
