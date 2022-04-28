import { createContext, useState } from "react";

export const LogInContext = createContext();

const LogInContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();

  const login = async (user) => {
    try {
      let status = await fetch("users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      let result = await status.json();
      setLoggedInUser(result);
      return true;
    } catch (err) {
      return false;
    }
  };

  console.log(loggedInUser);
  return (
    <LogInContext.Provider
      value={{
        loggedInUser,
        login,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInContextProvider;
