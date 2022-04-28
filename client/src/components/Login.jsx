import React, { useState } from "react";
import "../style/Login.css";
//import { Link } from "react-router-dom";
import { useContext } from "react";
import { LogInContext } from "./LogInContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { loggedInUser, login } = useContext(LogInContext);
  const [failedLogin, setFailedLogin] = useState(false);

  let [logInUsername, setLogInUsername] = useState("");
  let [logInPassword, setLogInPassword] = useState("");
  //const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setLogInUsername(event.target.value);
    console.log(setLogInUsername);
  };

  const handleLogInPasswordChange = (event) => {
    setLogInPassword(event.target.value);
    console.log(setLogInPassword);
  };

  async function handleLogIn(data) {
    let status = await login(data);

    if (!status) {
      setFailedLogin(true);
    } else {
      navigate("/feed");
    }

    // console.log(login); //function fungerar ej.
    // /* navigate("/feed"); */
  }

  const HandleSubmit = () => {
    let user = {
      logInUsername,
      logInPassword,
    };
    console.log(user);
    console.log(failedLogin);
    handleLogIn(user);
  };

  return (
    <>
      <div>
        <h1>{failedLogin ? "FEL UPPGIFTER" : undefined}</h1>
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
            <div className="InputHolder">
              <label htmlFor="userName">Username</label>
              <input name="userName" onChange={handleUsernameChange}></input>
            </div>
            <div className="InputHolder">
              <label htmlFor="passWord">Password</label>
              <input
                name="passWord"
                onChange={handleLogInPasswordChange}
              ></input>
            </div>
            <div className="logInButtonPlaceHolder">
              {/*   <p>
                  Forgot Login details?
                  <p style={{ color: "red" }}>click here</p>
                </p> */}
              {/* <Link to={'/feed'}> */}
              <button
                onClick={() => {
                  HandleSubmit();
                }}
              >
                Log in
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
