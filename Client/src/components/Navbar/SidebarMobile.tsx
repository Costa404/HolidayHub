import { Link } from "react-router-dom";
import "./Navbar.css";
import AdminNavbar from "./AdminNavbar";
import { SidebarMobileProps } from "../../Utility/Interface/GlobalInterface";

const SidebarMobile = ({
  isOpen,
  onClose,
  isOnline,
  handleLogout,
}: SidebarMobileProps) => {
  return (
    <>
      <div
        className={`p-5 sidebar ${isOpen ? "active" : ""}`}
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <button className="btn btn-danger px-5 fs-5" onClick={onClose}>
          close
        </button>

        <ul className="navbar-nav gap-3">
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

      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
};

export default SidebarMobile;
