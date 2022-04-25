import React from "react";
import "../style/Login.css";

function Login() {
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
          <div class="CreateAccountPlaceHolder">
            <h2>Create Account</h2>
            <p>
              If you don’t have an account, create one by pressing the button
              below:
            </p>
            <a href={"/createaccount"}>
              <button>Create Account</button>
            </a>
          </div>

          <div className="loginPlaceHolder">
            <h2>Login or Continue Offline</h2>
            <form method="POST" action="/post-feedback">
              <div className="InputHolder">
                <label for="userName">Username</label>
                <input name="userName" required></input>
              </div>
              <div className="InputHolder">
                <label for="passWord">Password</label>
                <input name="passWord" required></input>
              </div>
              <div className="logInButtonPlaceHolder">
                <p>
                  Forgot Login details?
                  <p style={{ color: "red" }}>click here</p>
                </p>
                <button type="submit" value="Submit">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
