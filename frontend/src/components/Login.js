import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [direct, setRedirect] = useState(false);
  const [error, setError] = useState("");
  const klikLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:3500/login", data)
      .then((result) => {
        if (result) {
          console.log(result);
          localStorage.setItem("token", result.data.token);
          setRedirect(true);
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  const handleUsername = (e) => {
    const value = e.target.value;
    console.log(value);
    setUsername(value);
    setError("");
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };
  return (
    <>
      {direct && <Redirect to="/dashboard" />}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 p-4">
            <div className="card p-4">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <h2 className="text-center">Halaman Login</h2>
              <h6>Username</h6>
              <input
                className="form-control"
                type="text"
                placeholder="Insert your username"
                value={username}
                onChange={handleUsername}
              />
              <h6 className="mt-3">Password</h6>
              <input
                className="form-control"
                placeholder="Please insert correct password"
                type="password"
                value={password}
                onChange={handlePassword}
              />
              <a href="/forgotpassword" className="float-end">
                forgot password
              </a>
              <button className="btn btn-primary mt-3" onClick={klikLogin}>
                Login
              </button>
              <p>
                Don't have any account?
                <span>
                  <Link to="/signup">daftar sekarang</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
