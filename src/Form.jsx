import React from "react";
import Button from "./Button";
import "./Form.css";
import username from "./assets/username.svg"
import password from "./assets/password.svg"

function Form() {
  return (
    <>
      <form className="login-form">
        <div className="login-form-fields">
          <img src={username} alt="username icon" className="login-form-icon"></img>
          <input
            type="email"
            className="input-field"
            placeholder="   username/email "
            required
          />
        </div>
        <div className="login-form-fields">
          <img src={password} alt="username icon" className="login-form-icon"></img>
          <input
            type="password"
            className="input-field"
            placeholder="   password "
            required
          />
        </div>
        <div className="login-form-fields">
          Does not have any Account ?
          <a href="#">Sign Up here</a>
        </div>
      </form>
    </>
  );
}
export default Form;
