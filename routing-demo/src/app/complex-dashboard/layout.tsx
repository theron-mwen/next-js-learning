
// USE SLOTS INSTEAD OF IMPORTING COMPONENTS
// SLOTS -> @users-analytics, @revenue, @notifications
// import UserAnalytics from "./UserAnalytics";
// import RevenueMetrics from "./RevenueMetrics";
// import Notifications from "./Notifications";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <div>{notifications}</div>
        </div>
      </div>
      {/* <UserAnalytics />
      <RevenueMetrics />
      <Notifications /> */}
    </>
  );
}
