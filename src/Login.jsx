import React from "react";
import "./App.css";
import Button from "./Button";
import Form from "./Form";

function Login() {
  return (
    <>
      <div className="backgound-container">
        <div className="background-container-main">
          <div className="backgound-container-heading">Wander Wings</div>
          <Form/>
        </div>
        <div className="backgound-container-subheading">
          The journey of a thousand miles begins with a single step...
        </div>
        <Button/>
      </div>
    </>
  );
}
export default Login;
