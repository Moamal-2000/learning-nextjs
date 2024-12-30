const DashboardLayout = ({ children, notifications, user_profile }) => {
  return (
    <div>
      <div className="parallel-card">{children}</div>
      <h2 className="parallel-card">{notifications}</h2>
      <h2 className="parallel-card">{user_profile}</h2>
    </div>
  );
};

export default DashboardLayout;
