"use client";

import { createContext, useContext, useState } from "react";

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

export const useGlobalContext = () => useContext(GlobalContext);
