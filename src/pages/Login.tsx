import React from "react";
import "../styles/login.scss";
import pablo from "../assets/pablo-sign-in.svg";
import group from "../assets/Group.svg";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="left">
        <header className="groupImg">
          <img src={group} alt="" />
        </header>
        <div className="pabloImg">
          <img src={pablo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="formWrapper">
          <header>
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </header>

          <form className="form">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />

            <a href="#" className="forgot-password btn">
              forgot password?
            </a>
            <button type="submit" className="submit-btn filled">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
