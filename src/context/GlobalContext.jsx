"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const isLoginLocal = localStorage.getItem("isLogin");
  const [isLogin, setIsLogin] = useState(
    isLoginLocal ? JSON.parse(isLoginLocal) : false
  );

  const states = {
    isLogin,
    setIsLogin,
  };

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  return (
    <GlobalContext.Provider value={states}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
