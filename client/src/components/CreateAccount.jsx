import React, { useState } from "react";
import "../style/CreateAccount.css";



function CreateAccount(props) {


  let [username, setUsername] = useState("")
  let [password,setPassword] = useState("")
  let [mail, setEmail] = useState("")
  // let [admin, setAdmin] = useState(false)
  
  // async function getUser() {
  //   try {
  //     let response = await fetch("http://localhost:5500");
  //     return await response.json();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function POSTuser(data) {
    const fetchUsers = await fetch("/createAccount", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    });
    return await fetchUsers.json();
    
  }

  const handleUsernameChange = (event) =>{
    setUsername(event.target.value)
    event.preventDefault()
   
  }

  const handleMailChange = (event) => {
    setEmail(event.target.value)
    
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    
  
  }

    function handleSubmitForm(event) {
      event.preventDefault();
      console.log("You clicked submit.");
       
    }

  const HandleSubmit = (data) => {
    
    data = {
      username,
      mail,
      password,
      isAdmin: false
    };
    console.log(data)
    POSTuser(data)
  }
   
  return (
    <>
      <div className="CreateNewAccountBox">
        <div className="CreateNewAccountPlaceHolder">
          <h2>Create New Account</h2>

        <form onSubmit={handleSubmitForm}>
            <div className="InputHolder">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                defaultValue={""}
                onChange={handleUsernameChange}
              ></input>
            </div>
            <div className="InputHolder">
              <label htmlFor="mail">Mail</label>
              <input
                name="mail"
                defaultValue={""}
                onChange={handleMailChange}
              ></input>
            </div>
            <div className="InputHolder">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                defaultValue={""}
                onChange={handlePasswordChange}
              ></input>
            </div>
            <div className="CreateAccountButtonPlaceHolder">
              <button onClick={HandleSubmit}>create account</button>
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