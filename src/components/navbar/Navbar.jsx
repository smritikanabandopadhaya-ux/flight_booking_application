import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user=JSON.parse(localStorage.getItem("loginData"));
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged Out Successfully");
    navigate("/"); 
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#533d88] text-[#3c2075] shadow-md rounded-lg">
      <h2 className="m-0 font-sans font-bold text-3xl italic text-white">Welcome {user.name},</h2>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/profile")}
          className="px-4 py-2 rounded-2xl bg-[#f5f5f5] text-[#533d88] font-medium hover:bg-[#a18dce] hover:text-white transition"
        >
          Profile
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

export default Navbar
