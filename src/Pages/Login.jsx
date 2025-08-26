import React from "react";
import "../Pages/Login.css";
import Form from "../Forms/Form";


function Login() {
  return (
    <>
      <div className="backgound-container">
        <div className="background-container-main">
          <div className="backgound-container-heading">Wander Wings</div>
          <Form></Form>
        </div>
        <div className="backgound-container-subheading">
          The journey of a thousand miles begins with a single step...
        </div>
      </div>
    </>
  );
}
export default Login;
