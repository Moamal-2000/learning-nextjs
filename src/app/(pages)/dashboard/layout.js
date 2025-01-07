"use client";

import { useGlobalContext } from "@/src/context/GlobalContext";

const DashboardLayout = ({ children, notifications, user_profile, login }) => {
  const { isLogin } = useGlobalContext();

  return isLogin ? (
    <div>
      <div className="parallel-card">{children}</div>
      <h2 className="parallel-card">{notifications}</h2>
      <h2 className="parallel-card">{user_profile}</h2>
    </div>
  ) : (
    login
  );
};

export default DashboardLayout;
