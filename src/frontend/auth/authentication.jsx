import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { API, Server_url } from "../adapters/apis";
import "../commonstyles/Globalstyles.css";
import "./style.css";
import { postAuthCall } from "../adapters/callmethods";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");
  const [signin, setsignUp] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const login = () => {
    const url = Server_url + API.auth.login;
    const requestdata = { email: email, password: password };
    postAuthCall(url, requestdata)
      .then((res) => res.json())
      .then((response) => {
        if (response.status === 200) {
          setAuth(response.encodedToken);
          localStorage.setItem("token", response.encodedToken);
        }
      });
  };
  const signup = () => {
    const url = Server_url + API.auth.signup;
    const requestdata = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    postAuthCall(url, requestdata)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      });
  };
  // body contains {firstName, lastName, email, password}
  return (
    <div className="auth-container content-flexaround flex-wrap padding">
      <div>
        <h1 className="color-lightblue">{signin ? "SignIn" : "SignUp"}</h1>
        {signin ? (
          <div className="flex-col">
            <label className="label">Email :</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="auth-input"
            />
            <label className="label">Password :</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="auth-input"
            />
          </div>
        ) : (
          <div className="flex-col">
            <label className="label">First Name :</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="auth-input"
            />
            <label className="label">Last Name :</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="auth-input"
            />

            <label className="label">Email :</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="auth-input"
            />
            <label className="label">Password :</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="auth-input"
            />
          </div>
        )}
        <button
          onClick={() => {
            signin ? login() : signup();
          }}
          className="button button-mr"
        >
          {signin ? "SignIn" : "SignUp"}
        </button>
        {signin ? (
          <p>
            Don't have an account !{" "}
            <b onClick={() => setsignUp(false)} className="color-lightblue cursor-pointer">
              {" "}
              Click here for SignUp{" "}
            </b>
          </p>
        ) : (
          <p>
            Already have an account !{" "}
            <b onClick={() => setsignUp(true)} className="color-lightblue cursor-pointer">
              {" "}
              Click here for SignIn{" "}
            </b>
          </p>
        )}
      </div>
      <div>
        <img
        className="auth-img"
          src={
            !signin
              ? "https://res.cloudinary.com/dyflmd7n7/image/upload/v1650230831/notes/login_anmj5u.svg"
              : "https://res.cloudinary.com/dyflmd7n7/image/upload/v1650230579/notes/authentication_aattaq.png"
          }
          alt="Authentication"
        />
      </div>
    </div>
  );
};

export default Authentication;
