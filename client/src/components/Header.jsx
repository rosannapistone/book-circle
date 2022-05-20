import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { LogInContext } from "./LogInContext";
import React from "react";
import {MdAdminPanelSettings} from "react-icons/md";
import { FaGlasses } from "react-icons/fa";

export default function Header() {
  const { loggedInUser, logout } = useContext(LogInContext);

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
      
      { !loggedInUser || loggedInUser === 'Wrong password or username' ? (
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
        {loggedInUser.isAdmin ? (
          <>
          <Link to={"/admin"}>
        <MdAdminPanelSettings size={30} color="#87204D"/>
        </Link>
        <Link to={"/feed"}>
        <FaGlasses size={30} color="#87204D"/>
        </Link>
        </>
        ) : (
        <></>
        )}
        
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
