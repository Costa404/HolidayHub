import { Link } from "react-router-dom";

const Navbar = ({ userType }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary px-3 shadow w-100 d-flex justify-content-center "
      style={{
        fontSize: "1.4rem", // Ajustando a font-size para 14px (1.4rem)
      }}
    >
      <div className="w-75 d-flex p-3 ">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: "2rem", // Logo maior (20px)
          }}
        >
          Holiday Hub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/users"
                style={{ fontSize: "1.4rem" }}
              >
                Users
              </Link>
            </li>

            {userType === "user" && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/calendar"
                  style={{ fontSize: "1.4rem" }}
                >
                  My Holidays
                </Link>
              </li>
            )}

            {/* {userType === "admin" && ( */}
            <>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/adminDashBoard"
                  style={{ fontSize: "1.4rem" }}
                >
                  Admin Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/admin/users"
                  style={{ fontSize: "1.4rem" }}
                >
                  User Management
                </Link>
              </li>
            </>
            {/* )} */}

            {/* New Authentication Link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/authLogin"
                style={{ fontSize: "1.4rem" }}
              >
                Authentication
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "1.4rem" }}
              >
                Account
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/myProfile"
                    style={{ fontSize: "1.4rem" }}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-danger"
                    to="/logout"
                    style={{ fontSize: "1.4rem" }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
