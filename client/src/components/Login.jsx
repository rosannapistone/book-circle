import React from "react";
import "../style/Login.css";
//import { Link } from "react-router-dom";
import { useContext } from "react";
import { LogInContext } from "./LogInContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  const { isLoggedIn, setIsLoggedIn} = useContext(LogInContext);

  function handleLogIn() {
    setIsLoggedIn(true)
    console.log(isLoggedIn) //function fungerar ej.
    navigate("/feed")
  }

  return (
    <>
      <div>
        <h1>Welcome To The Book Circle!</h1>
        <p>
          Get inspired and browse thousands of book reviews, contribute, add and
          share your own
        </p>
      </div>
      <div className="LogInBox">
        <div className="LogInCreateAccountBox">
          <div className="CreateAccountPlaceHolder">
            <h2>Create Account</h2>
            <p>
              If you don't have an account, create one by pressing the button
              below:
            </p>
            <a href={"/signup"}>
              <button>Sign up</button>
            </a>
          </div>

          <div className="loginPlaceHolder">
            <h2>Login or Continue Offline</h2>
            <form>
              <div className="InputHolder">
                <label htmlFor="userName">Username</label>
                <input name="userName"></input>
              </div>
              <div className="InputHolder">
                <label htmlFor="passWord">Password</label>
                <input name="passWord"></input>
              </div>
              <div className="logInButtonPlaceHolder">
              {/*   <p>
                  Forgot Login details?
                  <p style={{ color: "red" }}>click here</p>
                </p> */}
                {/* <Link to={'/feed'}> */}
                  <button onClick={ () => {handleLogIn()}}>Log in</button>
                  {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
