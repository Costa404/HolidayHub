import { useEffect, useState } from "react";
import {
  Holiday,
  UserHolidays,
} from "../../../Utility/Interface/GlobalInterface";
import useGetAllHolidays from "../../../Api/get/getHolidays";
import LoadingSpinner from "../../../Utility/Loading/LoadingSpinner";
import ListHolidayAllUsers from "./ListHolidayAllUsers";

interface UserHolidayGroup {
  id: number;
  userid: number;
  username: string;
  holidays: Holiday[];
}

const UsersHolidays = () => {
  const { holidays, isLoading } = useGetAllHolidays();
  const [usersWithHolidays, setUsersWithHolidays] = useState<
    UserHolidayGroup[]
  >([]);

  useEffect(() => {
    const holidaysByUser = holidays.reduce((acc: UserHolidays[], holiday) => {
      const userIndex = acc.findIndex((user) => user.userid === holiday.userid);

      if (userIndex === -1) {
        acc.push({
          id: holiday.id,
          userid: holiday.userid,
          username: holiday.username,
          holidays: [holiday],
        });
      } else {
        acc[userIndex].holidays.push(holiday);
      }

      return acc;
    }, []);

    setUsersWithHolidays(holidaysByUser);
  }, [holidays]);
  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="w-100 d-flex justify-content-center ">
      <div
        className="w-75 p-4 d-flex flex-column justify-content-centerd-flex backgroundMobile"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <h2 className=" mb-4"> Users Holidays</h2>
        <ListHolidayAllUsers usersWithHolidays={usersWithHolidays} />
      </div>
    </section>
  );
};

export default UsersHolidays;
