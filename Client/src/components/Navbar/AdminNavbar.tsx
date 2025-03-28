import { Link } from "react-router-dom";
import { useCurrentUser } from "../../context/useCurrentUserAuth";
import { useIsOnline } from "../../Utility/useIsOnline";
import { useEffect, useState } from "react";

const AdminNavbar = () => {
  const { currentUser } = useCurrentUser();
  const { isOnline } = useIsOnline();
  const [localOnline, setLocalOnline] = useState(isOnline);
  useEffect(() => {
    setLocalOnline(isOnline);
  }, [isOnline]);

  console.log("isOnline", isOnline, "localOnline", localOnline);

  if (currentUser?.role !== "admin") {
    return null;
  }

  return (
    <>
      <li className="nav-item">
        <Link
          className={`nav-link fs-4 ${!localOnline ? "disabled" : ""}`}
          to="/adminDashboard"
        >
          Admin Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link fs-4 ${!localOnline ? "disabled" : ""}`}
          to="/UsersHolidays"
        >
          Users Holidays
        </Link>
      </li>
    </>
  );
};

export default AdminNavbar;
