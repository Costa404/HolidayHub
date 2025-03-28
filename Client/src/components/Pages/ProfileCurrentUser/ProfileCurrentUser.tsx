import { useCurrentUser } from "../../../context/useCurrentUserAuth";
import { useFetchUsers } from "../Users/useFetchUsers";

import LoadingSpinner from "../../../Utility/Loading/LoadingSpinner";
import { UserType } from "../../../Utility/Interface/GlobalInterface";
import HolidaysList from "./ManageHolidays/HolidaysList";

import UserProfile from "./UserProfile";
import useManageHolidaysModal from "./ManageHolidays/useManageHolidaysStore";
import ManageHolidaysModal from "./ManageHolidays/ManageHolidaysModal";
import ActionButton from "../../../Utility/ActionButton";

const ProfileCurrentUser = () => {
  const { currentUser } = useCurrentUser();
  const { loading } = useFetchUsers();
  const { openManageHolidaysModal, isManageHolidaysModalOpen } =
    useManageHolidaysModal();

  console.log("isManageHolidaysModalOpen", isManageHolidaysModalOpen);

  if (!currentUser || loading) return <LoadingSpinner />;

  const user: UserType = {
    username: currentUser.username,
    name: currentUser.name,
    email: currentUser.email,
    role: currentUser.role,
    phone: currentUser.phone,
    jobposition: currentUser.jobPosition,
  };

  return (
    <section className="d-flex justify-content-center w-100 vh-100">
      <div
        className="shadow-sm p-4 w-75 backgroundMobile "
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        {" "}
        <UserProfile user={user} />
        <div className="w-100 d-flex justify-content-end">
          <ActionButton
            label="Schedule Holidays"
            onClick={openManageHolidaysModal}
          />
        </div>
        <ManageHolidaysModal />
        <HolidaysList userId={currentUser.userid} />
      </div>
    </section>
  );
};

export default ProfileCurrentUser;
