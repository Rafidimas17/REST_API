import React, { useState } from "react";
import axios from "axios";
const ResetPassword = (props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const resetPassword = () => {
    if (password !== confirmPassword) {
      console.log("Password tidak sama");
    } else {
      const data = {
        password: password,
        token: props.match.params.token,
      };
      axios
        .put("http://localhost:3500/resetpassword", data)
        .then((result) => {
          console.log(result);
        })
        .catch((e) => {
          console.log(e.response.data.message);
        });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center p-5">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="h4">Form Reset Password</h2>
            <div className="form-group">
              <label>New Password</label>
              <input
                className="form-control"
                placeholder="Input new password"
                value={password}
                onChange={handlePassword}
              />
              <label className="mt-2">Confirm Password</label>
              <input
                className="form-control"
                placeholder="Input same password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
              />
            </div>
            <button
              className="btn btn-success mt-3"
              onClick={() => resetPassword()}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
