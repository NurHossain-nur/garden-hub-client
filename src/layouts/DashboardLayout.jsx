import { Link, NavLink, Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {
  FaHome,
  FaPlus,
  FaUser,
  FaThList,
  FaLeaf,
  FaSignOutAlt,
  FaRegListAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Log out?",
      text: "You will be logged out of your dashboard.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
      }
    });
  };

  const sidebarContent = (
    <>
      <h2 className="text-3xl font-heading text-primary mb-6 text-center">
        Garden<span className="text-secondary">Hub</span> 🌿
      </h2>

      {/* User Info */}
      {user && (
        <div className="flex flex-col items-center gap-2 mb-6">
          <img
            src={user.photoURL || "/default-user.png"}
            alt="User"
            className="w-16 h-16 rounded-full border-2 border-primary"
          />
          <p className="text-sm font-semibold text-base-content">
            {user.displayName}
          </p>
          <p className="text-xs text-muted">{user.email}</p>
        </div>
      )}

      {/* Links */}
      <ul className="space-y-3 font-medium text-base-content">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-primary ${
                isActive ? "text-primary font-semibold" : ""
              }`
            }
          >
            <FaLeaf /> Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/all-tips"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-primary ${
                isActive ? "text-primary font-semibold" : ""
              }`
            }
          >
            <FaRegListAlt /> All Tips
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-tips"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-primary ${
                isActive ? "text-primary font-semibold" : ""
              }`
            }
          >
            <FaThList /> My Tips
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-tip"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-primary ${
                isActive ? "text-primary font-semibold" : ""
              }`
            }
          >
            <FaPlus /> Add Tip
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-primary ${
                isActive ? "text-primary font-semibold" : ""
              }`
            }
          >
            <FaUser /> Profile
          </NavLink>
        </li>
        <li>
          <Link to="/" className="flex items-center gap-2 hover:text-primary">
            <FaHome /> Back to Home
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-600"
          >
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer Toggle Button (for mobile) */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col p-4">
        {/* Toggle button (hamburger) */}
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden mb-4 w-max"
        >
          ☰ Menu
        </label>

        {/* Outlet/Page Content */}
        <Outlet />
      </div>

      {/* Sidebar Drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="w-64 min-h-full bg-white/30 backdrop-blur-lg p-4 border-r border-border shadow-lg">
          {sidebarContent}
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
