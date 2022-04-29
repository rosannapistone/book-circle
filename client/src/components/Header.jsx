import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { LogInContext } from "./LogInContext";

export default function Header() {
  const navigate = useNavigate();
  const [logoutUser, setLogoutUser] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(LogInContext);

  console.log(loggedInUser);

  const handleLogOut = async (user) => {
    console.log(user);
    try {
      const status = await fetch("users/logout", {
        method: "DELETE",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      const result = await status.json();
      setLogoutUser(result);
      return true;
    } catch (err) {
      return false;
    }
  };

  // async function handleLogOut(data) {
  //   let status = await logoutUser(data);
  //   if (!status) {
  //     setLogoutUser(true);
  //   } else {
  //     navigate("/");
  //   }
  // }

  // const { isLoggedIn, setIsLoggedIn} = useContext(LogInContext);

  //const [activeUser, setActiveUser] = useState("")

  //vill hämta users för att skriva ut den som är
  //inloggad i headerns conditional rendering
  //"Logged in as <username>"
  /*  async function getAllUsers() {
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
  }, []);  */

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

            <button
              style={{ margin: "0rem" }}
              onClick={() => {
                handleLogOut();
              }}
            >
              Log out
            </button>
          </div>
        </>
      )}
    </header>
  );
}
