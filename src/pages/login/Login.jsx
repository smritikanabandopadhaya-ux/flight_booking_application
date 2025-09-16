import React from "react";
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
        <div className="font-['Comic_Sans_MS'] text-center flex-col justify-self-start items-center">
          <div className="text-[3em] font-bold ml-8 pb-4">
            The journey of a thousand miles begins with a single step...
          </div>
           <button
            onClick={() => navigate("/guest-flight-checking")}
            className="p-3 mr-70 rounded-2xl font-bold bg-[#f5f5f5] text-[#533d88] hover:bg-[#533d88] hover:text-white hover:cursor-pointer transition"
          >
            Ready to Fly ?
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
