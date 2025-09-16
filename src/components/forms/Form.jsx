import { useState } from "react";
import Button from "../buttons/Button";
import "./Form.css";
import username from "../../assets/username.svg";
import email_img from "../../assets/email.svg";
import password_img from "../../assets/password.svg";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Form = () => {
  const [isHidden, setHiddenState] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const saved = JSON.parse(localStorage.getItem("loginData"));
    if (saved && saved.email === newEmail && saved.rememberMe) {
      setPassword(saved.password); // :white_check_mark: autofill password
    } else {
      setPassword(""); // clear if not remembered
    }
  };
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
  const doLogin = (showAlert = true) => {
    const retrievedJsonString = localStorage.getItem("loginData");
    if (!retrievedJsonString) {
      if (showAlert) alert("No user data found");
      return;
    }
    const retrievedObject = JSON.parse(retrievedJsonString);
    if (
      retrievedObject.email === email &&
      retrievedObject.password === password
    ) {
      localStorage.setItem("isLoggedIn", true);
      if (showAlert) alert("Login Successful!");
      navigate("/flight-details");
    } else {
      if (showAlert) alert("Invalid credentials");
    }
    setEmail("");
    setPassword("");
  };
  const handleLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const retrievedJsonString = localStorage.getItem("loginData");
    if (retrievedJsonString) {
      const retrievedObject = JSON.parse(retrievedJsonString);
      localStorage.setItem(
        "loginData",
        JSON.stringify({
          ...retrievedObject,
          rememberMe, // comes from checkbox state
          password,
        })
      );
    }
    doLogin(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isHidden && !passwordStrength.startsWith("✅")) {
      alert("Please choose a stronger password before signing up.");
      return;
    }
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    localStorage.setItem(
      "loginData",
      JSON.stringify({
        ...value,
        rememberMe,
      })
    );
    alert("Account Created Successfully");
    doLogin(false);
    setEmail("");
    setPassword("");
    setName("");
    setPasswordStrength("");
  };

  return (
    <div>
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
            onChange={handleEmailChange}
          />
        </div>

        <div className="login-form-fields relative">
          <img
            src={password_img}
            alt="password icon"
            className="login-form-icon"
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input-field"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordStrength(checkPasswordStrength(e.target.value));
            }}
          />
          <button
            type="button"
            className="absolute right-12 top-5 translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
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
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            &nbsp;Remember Me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <button class="sign-in-now">Forget Password ?</button>
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
              class="sign-in-now"
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
