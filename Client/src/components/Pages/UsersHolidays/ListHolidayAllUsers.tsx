import UserProfileButton from "./UserProfileButton";
import UserHolidayCard from "./UserHolidayCard";
import { UserHolidays } from "../../../Utility/Interface/GlobalInterface";

interface ListHolidayAllUsersProps {
  usersWithHolidays: UserHolidays[];
}

const ListHolidayAllUsers = ({
  usersWithHolidays,
}: ListHolidayAllUsersProps) => (
  <div
    style={{ maxHeight: "100vh", overflowY: "auto", paddingBottom: "12rem" }}
  >
    {usersWithHolidays.length === 0 ? (
      <p className="text-center text-muted">
        No holidays registered for any user.
      </p>
    ) : (
      usersWithHolidays.map((user) => (
        <div
          key={user.id}
          className="mb-4 d-flex flex-column justify-content-center"
        >
          <UserProfileButton username={user.username} />
          <div className="row d-flex justify-content-center">
            {user.holidays.map((holiday) => (
              <UserHolidayCard key={holiday.id} holiday={holiday} />
            ))}
          </div>
        </div>
      ))
    )}
  </div>
);

export default ListHolidayAllUsers;
