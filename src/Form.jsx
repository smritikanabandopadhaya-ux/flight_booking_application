import React, { useState } from "react";
import Button from "./Button";
import "./Form.css";
import username from "./assets/username.svg";
import email from "./assets/email.svg";
import password from "./assets/password.svg";

function Form() {
  const [isHidden, setHiddenState] = useState(false);
  return (
    <>
      <form className="login-form">
        <div className="login-form-fields login-form-header">
          Welcome Back !
        </div>
        <div
          className="login-form-fields"
          id="form-input-name"
          hidden={isHidden}
        >
          <img
            src={username}
            alt="username icon"
            className="login-form-icon"
          ></img>
          <input type="name" className="input-field" placeholder="   Name" />
        </div>
        <div className="login-form-fields">
          <img
            src={email}
            alt="username icon"
            className="login-form-icon"
          ></img>
          <input
            type="email"
            className="input-field"
            placeholder="   Username/Email"
          />
        </div>
        <div className="login-form-fields">
          <img
            src={password}
            alt="username icon"
            className="login-form-icon"
          ></img>
          <input
            type="password"
            className="input-field"
            placeholder="   Password "
          />
        </div>
        <div className="login-form-fields sign-in">
          <Button name="Sign Up" />
        </div>
        <div className="login-form-fields">
          Already have an Account ?
          <button
            id="sign-in-now"
            onClick={(e) => {
              e.preventDefault();
              setHiddenState(!isHidden);
            }}
          >
            {" "}
            &nbsp; Sign in
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
