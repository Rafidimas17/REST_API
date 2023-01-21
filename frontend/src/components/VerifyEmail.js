import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const VerifyEmail = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();
  useEffect(() => {
    const verifyEmailUrl = () => {
      axios.get(`http://localhost:3500/verify-email/${param.tokenAktif}`);
      setValidUrl(true);
    };
    verifyEmailUrl();
  }, [param]);
  return (
    <div className="container">
      <h1>Email verified successfully</h1>
      <Link to="/">
        <button className="btn btn-success">Login</button>
      </Link>
    </div>
  );
};

export default VerifyEmail;
