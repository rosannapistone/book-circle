import React from "react";
import "../style/CreateAccount.css";

function CreateAccount() {
  return (
    <>
      <div className="CreateNewAccountBox">
        <div className="CreateNewAccountPlaceHolder">
          <h2>Create New Account</h2>

          <form>
            <div className="InputHolder">
              <label for="userName">Username</label>
              <input name="userName"></input>
            </div>
            <div className="InputHolder">
              <label for="Mail">Mail</label>
              <input name="Mail"></input>
            </div>
            <div className="InputHolder">
              <label for="passWord">Password</label>
              <input name="passWord"></input>
            </div>
            <div className="CreateAccountButtonPlaceHolder">
              <button>create account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
