import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { LogInContext } from "./LogInContext";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser, logout } = useContext(LogInContext);
  console.log(loggedInUser);

  const handleLogOut = () => {
    if (loggedInUser) {
      logout();
    } else if (!loggedInUser) {
      console.log("error");
    }
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "7rem",
      }}
    >
      <Link to={"/"}>
        <img
          src={Logo}
          alt=""
          style={{ display: "flex", height: "5rem", margin: "1rem" }}
        />
      </Link>
      {!loggedInUser ? (
        <>
          <div style={{ display: "flex", marginRight: "2rem" }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <p>Log In</p>
            </Link>
            <p style={{ paddingRight: "1rem", paddingLeft: "1rem" }}> | </p>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Sign Up</p>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              marginRight: "2rem",
              marginTop: "1.5rem",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p style={{ margin: "0rem", marginBottom: ".5rem" }}>
              Logged in as{" "}
              <b style={{ color: "#87204d", fontWeight: "bold" }}>
                {loggedInUser.username}
              </b>
            </p>
            <Link to={"/"}>
              <button
                style={{ margin: "0rem" }}
                onClick={() => {
                  handleLogOut();
                }}
              >
                Log out
              </button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
