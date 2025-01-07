"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const states = {
    isLogin,
    setIsLogin,
  };

  return (
    <GlobalContext.Provider value={states}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
