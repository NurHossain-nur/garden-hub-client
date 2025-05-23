import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
// import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const handleLogout = () => {
  //     logOut()
  //       .then(() => setShowLogout(false))
  //       .catch((err) => console.error(err));
  //   };
  console.log(showLogout);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your gardening account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
      background: "#1a1a1a",
      color: "#f5f5f5",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            setShowLogout(false);
            toast.success(
              "🌿 Logged out successfully. See you again in the garden!",
              {
                position: "top-center",
                theme: "dark", // use "light" if in light mode
                autoClose: 3000,
                icon: "🌱",
              }
            );
          })
          .catch((error) => {
            console.error(error);
            toast.error("⚠️ Logout failed. Try again!", {
              position: "top-center",
              theme: "dark",
            });
          });
      }
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/explore-gardeners" className="hover:text-primary">
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink to="/browse-tips" className="hover:text-primary">
          Browse Tips
        </NavLink>
      </li>
      <li>
        <NavLink to="/share-tip" className="hover:text-primary">
          Share a Garden Tip
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-tips" className="hover:text-primary">
          My Tips
        </NavLink>
      </li>
      {/* {user && (
        <>
          <li>
            <NavLink to="/share-tip" className="hover:text-primary">
              Share a Garden Tip
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-tips" className="hover:text-primary">
              My Tips
            </NavLink>
          </li>
        </>
      )} */}
    </>
  );

  // Dark and Light them handle
  //   const handleThemeToggle = () => {
  //   const html = document.documentElement;
  //   if (html.classList.contains("dark")) {
  //     html.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   } else {
  //     html.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   }
  // };

  return (
    <nav className="bg-base-200 shadow-md font-sans sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left: Logo */}
        <div className="navbar-start">
          <Link to="/" className="text-primary font-heading text-3xl font-bold">
            GardenHub
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Right: Auth or User */}
        <div className="navbar-end">
          {!user ? (
            <Link
              to="/login"
              className="btn btn-primary btn-sm rounded-full font-semibold"
            >
              Login / SignUp
            </Link>
          ) : (
            <div
              className="relative z-[9999] flex justify-center items-center gap-2"
              tabIndex={0}
              //   onBlur={() => setShowLogout(false)}
            >
              {/* Toggle Dark and Light Theme */}

              <button
                onClick={() => {
                  const html = document.documentElement;
                  const currentTheme = html.getAttribute("data-theme");
                  const newTheme = currentTheme === "dark" ? "light" : "dark";
                  html.setAttribute("data-theme", newTheme);
                  localStorage.setItem("theme", newTheme);
                }}
                className="btn btn-ghost btn-sm bg-primary rounded-full"
                title="Toggle Theme"
              >
                🌓
              </button>

              <div
                onClick={() => setShowLogout(!showLogout)}
                className="cursor-pointer flex items-center gap-2"
              >
                <img
                  src={user.photoURL || "/default-user.png"}
                  alt="User"
                  title={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  data-tip={user.displayName}
                />
              </div>

              {showLogout && (
                <button
                  onClick={handleLogout}
                  className="absolute right-0 mt-20 px-4 py-2 bg-primary text-white rounded shadow-md pointer-coarse: z-[999]"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden navbar-end ml-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              {navLinks}
              {!user ? (
                <li>
                  <Link to="/login">Login / SignUp</Link>
                </li>
              ) : (
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
