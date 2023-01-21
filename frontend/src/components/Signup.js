import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const signupClick = () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3500/daftar", data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setUsername("");
            setEmail("");
            setPassword("");
            setAlert(result.data.message);
            setTimeout(() => {
              setAlert("");
            }, 3000);
          }
          <Redirect to="/" />;
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {alert && (
              <div class="alert alert-success" role="alert">
                {alert}
              </div>
            )}
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsername}
              />
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button className="btn btn-primary mt-3" onClick={signupClick}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
