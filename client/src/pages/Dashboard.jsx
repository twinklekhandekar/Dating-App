import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const menuItems = [
    { name: "Discover", path: "/discover" },
    { name: "Matches", path: "/matches" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 text-2xl font-bold text-purple-600 border-b">
          Dating App
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2">
          {menuItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium hover:bg-purple-100 transition ${
                  isActive ? "bg-purple-200 text-purple-700" : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
