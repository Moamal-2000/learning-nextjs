"use client";

import { useGlobalContext } from "@/src/context/GlobalContext";

const Login = () => {
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

export default Login;
