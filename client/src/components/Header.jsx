import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { LogInContext } from "./LogInContext";
import { useEffect } from "react";


export default function Header() {
  const { isLoggedIn, setIsLoggedIn} = useContext(LogInContext);

  const [activeUser, setActiveUser] = useState("")

  //vill hämta users för att skriva ut den som är
  //inloggad i headerns conditional rendering
  //"Logged in as <username>"
  async function getAllUsers() {
    const response = await fetch("/users", {
      method: "GET",
      //body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setActiveUser(result);
    console.log(result);
  }

  useEffect(() => {
    getAllUsers();
  }, []); 
  

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "7rem",
      }}
    >
      <Link to={'/'}>
      <img
        src={Logo}
        alt=""
        style={{ display: "flex", height: "5rem", margin: "1rem" }}
      />
      </Link>
      {!isLoggedIn? 
      <>
      <div style={{ display: "flex", marginRight: "2rem" }}>
       <Link to={'/'} style={{textDecoration: "none", color: "black"}}>
        <p>Log In</p>
        </Link>
        <p style={{ paddingRight: "1rem", paddingLeft: "1rem" }}> | </p>
        <Link to={'/signup'} style={{textDecoration: "none", color: "black"}}>
        <p>Sign Up</p>
        </Link>
      </div>
      </>
      :
      
      <>
      
      </>
   
      }
    </header>
  );
}
