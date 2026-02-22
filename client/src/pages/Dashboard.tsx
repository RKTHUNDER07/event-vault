import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  //   console.log(user);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p>{user?.email}</p>
      <button
        onClick={logout}
        className="px-6 py-2 bg-red-600 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
