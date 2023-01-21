import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import VerifyEmail from "./components/VerifyEmail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/resetpassword/:token" component={ResetPassword} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/verify-email/:tokenAktif" component={VerifyEmail} />
      </Switch>
    </div>
  );
}

export default App;
