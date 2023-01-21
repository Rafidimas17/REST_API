import React from "react";
import { Redirect } from "react-router-dom";
const Dashboard = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/" />;
  }
  const base64Url = token.split(".")[1];
  const decodedValue = JSON.parse(window.atob(base64Url));

  const removeToken = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
  };
  return (
    <div className="container">
      <h3>Halo, {decodedValue.username}</h3>
      <button className="btn btn-danger" onClick={() => removeToken()}>
        Logout
      </button>
    </div>
  );
};
export default Dashboard;
