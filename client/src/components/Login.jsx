import React, { useState } from "react";
import "../style/Login.css";
import { useContext } from "react";
import { LogInContext } from "./LogInContext";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const { login, role, loggedInUser } =
    useContext(LogInContext);
  const [failedLogin, setFailedLogin] = useState(false);

  let [logInUsername, setLogInUsername] = useState("");
  let [logInPassword, setLogInPassword] = useState("");

  const handleUsernameChange = (event) => {
    setLogInUsername(event.target.value);
  };

  const handleLogInPasswordChange = (event) => {
    setLogInPassword(event.target.value);
  };

  const HandleSubmit = () => {
    let user = {
      username: logInUsername,
      password: logInPassword,
    };
    handleLogIn(user);
  };

  async function handleLogIn(user) {
    const existingUser = await login(user);
    console.log('user in login.js', existingUser)


   if (existingUser === 'Wrong password or username') {
      setFailedLogin(true);
      console.log(failedLogin)
    } else {
      user.isAdmin ? navigate("/admin") : navigate("/feed");
    } 
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
            <a href="/offline">
              <button id="exploreOffline">
                Explore Offline
                <FaLongArrowAltRight
                  size={19}
                  style={{ marginBottom: "-5px" }}
                />
              </button>
            </a>
            <div className="InputHolder">
              <label htmlFor="userName">Username</label>
              <input name="userName" onChange={handleUsernameChange}></input>
              <p style={{ color: "red", fontSize: ".8rem" }}>
                {failedLogin ? "Wrong username or password" : undefined}
              </p>
            </div>
            <div className="InputHolder">
              <label htmlFor="passWord">Password</label>
              <input
                name="passWord"
                onChange={handleLogInPasswordChange}
              ></input>
              <p style={{ color: "red", fontSize: ".8rem" }}>
                {failedLogin ? "Wrong username or password" : undefined}
              </p>
            </div>
            <div className="logInButtonPlaceHolder">
              <button
                onClick={() => {
                  HandleSubmit();
                }}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
