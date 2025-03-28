import { Link } from "react-router-dom";
import { useIsOnline } from "../../Utility/useIsOnline";
import { useLogin } from "../Pages/Auth/Login/useLogin";
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

import "./Navbar.css";
import SidebarMobile from "./SidebarMobile";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { isOnline, handleLogout } = useIsOnline();

  const { forceUpdate } = useLogin();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {}, [forceUpdate]);

  return (
    <>
      <nav className="navbar navbar-dark bg-primary py-3 shadow w-100 d-flex justify-content-center navbarMobile">
        <div className="w-75 backgroundMobile d-flex justify-content-between align-items-center">
          <Link className="navbar-brand fw-bold fs-2" to="/">
            Holiday Hub
          </Link>

          <button
            className="navbar-toggler faBarsMobile "
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars className="faBarsMobile" />
          </button>

          <ul
            className="navbar-nav navbarRightDesktop gap-3 ms-auto d-none mobileRightNavbar"
            id="mobileRightNavbar"
          >
            <AdminNavbar />

            <li className="nav-item">
              <Link
                className={`nav-link fs-4 ${!isOnline ? "disabled" : ""}`}
                to="/users"
              >
                Users
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link fs-4 ${!isOnline ? "disabled" : ""}`}
                to="/myProfile"
              >
                Profile
              </Link>
            </li>

            {isOnline ? (
              <li className="nav-item fw-bold">
                <Link
                  className="nav-link text-danger fs-4"
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/authLogin">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <SidebarMobile
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isOnline={isOnline}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Navbar;
