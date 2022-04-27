import { createContext, useState } from "react";

export const LogInContext = createContext(false);

const LogInContextProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <LogInContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInContextProvider;