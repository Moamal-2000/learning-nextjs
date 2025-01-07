"use client";

import { useGlobalContext } from "@/src/context/GlobalContext";

const DefaultLogin = () => {
  const { setIsLogin } = useGlobalContext();

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <h2>Please login first to continue</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default DefaultLogin;
