import React from "react";
import Button from "./Button";

function Form() {
  return (
    <>
      <form class="login-form">
        <div>
          <input
            type="email"
            className="input-field"
            placeholder="   username/email "
          />
        </div>
        <div>
          <input
            type="password"
            className="input-field"
            placeholder="   password "
          />
        </div>
      </form>
    </>
  );
}
export default Form;
