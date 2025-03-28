import { useParams } from "react-router-dom";
import { useFetchUsers } from "../Users/useFetchUsers";
import { UserType } from "../../../Utility/Interface/GlobalInterface";
import LoadingSpinner from "../../../Utility/Loading/LoadingSpinner";
import UserProfile from "../ProfileCurrentUser/UserProfile";
import HolidaysList from "../ProfileCurrentUser/ManageHolidays/HolidaysList";
import { useCurrentUser } from "../../../context/useCurrentUserAuth";

const SelectedUser = () => {
  const { username } = useParams();
  const { users, loading } = useFetchUsers();
  const { currentUser } = useCurrentUser();

  if (loading) return <LoadingSpinner />;

  const selectedUser = users.find((user) => user.username === username);

  if (!selectedUser) {
    return null;
  }

  const user: UserType = {
    username: selectedUser.username,
    name: selectedUser.name,
    email: selectedUser.email,
    role: selectedUser.role,
    phone: selectedUser.phone,
    jobposition: selectedUser.jobposition,
  };

  return (
    <section className="d-flex justify-content-center w-100 vh-100">
      <div
        className="shadow-sm p-4 w-75 backgroundMobile "
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <UserProfile user={user} />

        {currentUser?.role === "admin" && (
          <HolidaysList userId={selectedUser.userid} />
        )}
      </div>
    </section>
  );
};

export default SelectedUser;
