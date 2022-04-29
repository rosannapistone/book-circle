import React, { useState } from "react";
import "../style/CreateAccount.css";
//import { useNavigate } from "react-router-dom";

function CreateAccount() {
  //const navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [mail, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleSubmitForm(event) {
    event.preventDefault();
    console.log("You clicked submit.");
  }

  async function POSTuser(data) {
    const getUsers = await fetch("users/createAccount", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // navigate("/myposts");
    return (
      getUsers
        .json()
        // .then(alert("account created! return to homepage to sign in"))
        .then((getUsers) => {
          alert("account created, return to homepage to log in");
        })
        // .then(response => {this._router.navigate(['/mainpage'])})
        // .catch((err)=>{alert(err)})
        .catch((error) => {
          if (error = 409 || 404 || 11000) {
            alert("USERNAME ALREADY EXIST");
          } else {
            alert(error);
          }
        })
    );
  }

  const HandleSubmit = () => {
    let user = {
      username,
      mail,
      password,
      isAdmin: false,
    };
    console.log(user);
    POSTuser(user);
  };

  return (
    <>
      <div className="CreateNewAccountBox">
        <div className="CreateNewAccountPlaceHolder">
          <h2>Create New Account</h2>

          <form method="POST" onSubmit={handleSubmitForm}>
            <div className="InputHolder">
              <label htmlFor="username">Username</label>
              <input name="username" onChange={handleUsernameChange}></input>
            </div>
            <div className="InputHolder">
              <label htmlFor="mail">Mail</label>
              <input name="mail" onChange={handleMailChange}></input>
            </div>
            <div className="InputHolder">
              <label htmlFor="password">Password</label>
              <input name="password" onChange={handlePasswordChange}></input>
            </div>
            <div className="CreateAccountButtonPlaceHolder">
              <button onClick={HandleSubmit}>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;

// function HandleSubmit (e){
//   e.preventDefault();
//   let inputFields = document.getElementsByTagName("input");

//   let username = inputFields[0].value
//   let mail = inputFields[1].value
//   let password = inputFields[2].value
//   let isAdmin = false

//   let newuser = {
//     username,
//     mail,
//     password,
//     isAdmin
//   }
//   console.log(newuser)
//   POSTuser(newuser);
//   setTimeout(()=>{
//     getUser();
//   },1500)
// }
