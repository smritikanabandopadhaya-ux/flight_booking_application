import { useState } from "react";
import Button from "../buttons/Button";
import "./Form.css";
import username from "../../assets/username.svg";
import email_img from "../../assets/email.svg";
import password_img from "../../assets/password.svg";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [isHidden, setHiddenState] = useState(true); // toggle between SignIn / SignUp
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(""); // ✅ NEW
  const navigate = useNavigate();

  // ✅ Password strength checker
  const checkPasswordStrength = (password) => {
    if (!password) return "";
    if (password.length < 6) {
      return "❌ Weak – at least 6 characters";
    }
    if (!/[A-Z]/.test(password)) {
      return "❌ Weak – add an uppercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "⚠️ Medium – add a number";
    }
    if (!/[@$!%*?&]/.test(password)) {
      return "⚠️ Medium – add a special character";
    }
    return "✅ Strong password";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // ✅ Block weak password during SignUp
    if (!isHidden && !passwordStrength.startsWith("✅")) {
      alert("Please choose a stronger password before signing up.");
      return;
    }

    const data = new FormData(event.target); // for having form data
    const value = Object.fromEntries(data.entries());
    console.log({ value });
    const jsonString = JSON.stringify(value);
    localStorage.setItem("loginData", jsonString);
    alert("Account Created Successfully");
    setEmail("");
    setPassword("");
    setName("");
    setPasswordStrength("");
    setHiddenState(true);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const retrievedJsonString = localStorage.getItem("loginData");
    if (!retrievedJsonString) {
      alert("No user data found");
      return;
    }
    const retrievedObject = JSON.parse(retrievedJsonString);
    if (
      retrievedObject.email === email &&
      retrievedObject.password === password
    ) {
      localStorage.setItem('isLoggedIn' , true)
      navigate("/flight-details");
      alert(" Login Successful!");
    } else {
      alert(" Invalid credentials");
    }
    setEmail("");
    setPassword("");
  };

  return (
   <div> 
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form-fields login-form-header">
        Welcome Onboard !
      </div>

      {!isHidden && (
        <div className="login-form-fields" id="form-input-name">
          <img src={username} alt="username icon" className="login-form-icon" />
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="   Name"
            required={!isHidden}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordStrength(checkPasswordStrength(e.target.value)); 
          }}
        />
      </div>

      {/* ✅ Pretty password strength message (only in SignUp mode) */}
      {!isHidden && password && (
        <div
          className={`password-strength-msg ${
            passwordStrength.startsWith("✅")
              ? "strong"
              : passwordStrength.startsWith("⚠️")
              ? "medium"
              : "weak"
          }`}
        >
          {passwordStrength}
        </div>
      )}

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
              setEmail("");
              setPassword("");
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
              setEmail("");
              setPassword("");
            }}
          >
            &nbsp; Sign In
          </button>
        </div>
      )}
    </form>
    </div>
  );
};

export default Form;