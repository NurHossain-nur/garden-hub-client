import { Link, NavLink } from "react-router";
import {  useState } from "react";
// import { AuthContext } from "@/providers/AuthProvider"; // update path if needed
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setDarkMode(!darkMode);
  };

//   const handleLogout = () => {
//     // logOut().catch(console.error);
//   };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/explore-gardeners">Explore Gardeners</NavLink></li>
      <li><NavLink to="/browse-tips">Browse Tips</NavLink></li>
      {/* {user && (
        <>
          <li><NavLink to="/share-tip">Share a Garden Tip</NavLink></li>
          <li><NavLink to="/my-tips">My Tips</NavLink></li>
        </>
      )} */}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sm:px-6 lg:px-12 font-sans">
      <div className="navbar-start">
        {/* Mobile Hamburger */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-heading text-primary">
          🌿 GardenConnect
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-base">
          {navLinks}
        </ul>
      </div>

      {/* User Info + Theme Toggle */}
      <div className="navbar-end gap-3">
        {/* Dark/Light Toggle */}
        <button className="btn btn-sm btn-circle text-xl" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Auth Section */}
        {/* {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-primary">
                <img src={user.photoURL || "/default-profile.png"} alt="profile" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
              <li><span className="text-center">{user.displayName}</span></li>
              <li><button onClick={handleLogout} className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary font-medium">Login</Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
