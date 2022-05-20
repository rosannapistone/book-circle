import { createContext, useState } from "react";

export const LogInContext = createContext();

const LogInContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [role, setRole] = useState();


  async function login(user) {
    console.log(user)
    try {
      const response = await fetch("users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setLoggedInUser(result);
      setRole(result.isAdmin)
      return result;
    } catch (err) {
      return null;
    }
  };
  

  const logout = async () => {
    const response = await fetch("/users/logout/", {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    setLoggedInUser();
  };

  console.log(loggedInUser);
  return (
    <LogInContext.Provider
      value={{
        loggedInUser,
        role,
        login,
        logout,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInContextProvider;
