import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import { Link } from 'react-router-dom';
import "../Forms/Form.css";
import username from "../assets/username.svg";
import email_img from "../assets/email.svg";
import password_img from "../assets/password.svg";

const Form=()=> {
  const [isHidden, setHiddenState] = useState(true); // toggle between SignIn / SignUp
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });
    const jsonString = JSON.stringify(value);
    localStorage.setItem("userData", jsonString);
  }

  function handleLogin(event) {
    event.preventDefault();
    event.stopPropagation();
    const retrievedJsonString = localStorage.getItem("userData");
    if (!retrievedJsonString) {
      console.log(" No user data found");
      return;
    }

    const retrievedObject = JSON.parse(retrievedJsonString);

    if (
      retrievedObject.email === email &&
      retrievedObject.password === password
    ) {
      console.log(" Login Successful!");
    } else {
      console.log(" Invalid credentials");
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-fields login-form-header">
          Welcome Onboard !
        </div>

        {!isHidden && (
          <div className="login-form-fields" id="form-input-name">
            <img
              src={username}
              alt="username icon"
              className="login-form-icon"
            />
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="   Name"
              required={!isHidden}
            />
          </div>
        )}

        <div className="login-form-fields">
          <img src={email_img} alt="email icon" className="login-form-icon" />
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="   Username/Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-form-fields">
          <img
            src={password_img}
            alt="password icon"
            className="login-form-icon"
          />
          <input
            type="password"
            name="password"
            className="input-field"
            placeholder="   Password "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-form-fields text-xs flex gap-8 ml-10">
          <label>
            <input type="checkbox" />
            &nbsp;Remember Me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <button id="sign-in-now">Forget Password ?</button>
        </div>

        {isHidden ? (
          <div className="login-form-fields sign-in">
            <Button handleClick={handleLogin} name="Sign In" />
          </div>
        ) : (
          <div className="login-form-fields sign-in">
            <Button name="Sign Up" type="submit" />
          </div>
        )}

        {isHidden ? (
          <div className="login-form-fields">
            Does not have an Account ?
            <button
              id="sign-in-now"
              onClick={(e) => {
                e.preventDefault();
                setHiddenState(false); // switch to SignUp
              }}
            >
              &nbsp; Sign Up
            </button>
          </div>
        ) : (
          <div className="login-form-fields">
            Already have an Account ?
            <button
              id="sign-in-now"
              onClick={(e) => {
                e.preventDefault();
                setHiddenState(true); // switch back to SignIn
              }}
            >
              &nbsp; Sign In
            </button>
          </div>
        )}
      </form>
    </>
  );
}

export default Form;
