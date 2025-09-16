import "./Login.css";
import Form from "../../components/forms/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="backgound-container">
        <div className="background-container-main">
          <div className="backgound-container-heading">Wander Wings</div>
          <Form></Form>
        </div>
        <div className="font-['Comic_Sans_MS'] text-center ml-20 flex-col justify-self-start items-center">
          <div className="text-[1.5em] font-bold  pb-4">
            The journey of a thousand miles begins with a single step...
          </div>
           <button
            onClick={() => navigate("/guest-flight-checking")}
            className="font-['Comic_Sans_MS'] p-3 mr-40 rounded-2xl font-bold bg-[#533d88] text-white hover:bg-white hover:text-[#533d88] hover:cursor-pointer transition"
          >
            Ready to Fly ?
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
