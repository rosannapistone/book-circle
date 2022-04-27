import { createContext, useState } from "react";

export const LogInContext = createContext();

const LogInContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn)
  return (
    <LogInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInContextProvider;