import React, { useState } from "react";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const emailConfirmation = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const sendEmail = () => {
    const dataEmail = {
      email: email,
    };
    axios.put("http://localhost:3500/forgotPassword", dataEmail);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 p-5">
          <div className="card p-4">
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={emailConfirmation}
              ></input>
            </div>
            <button
              className="btn btn-primary mt-3"
              onClick={() => sendEmail()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
