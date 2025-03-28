import { useState, useEffect } from "react";
import { UserType } from "../../../../Utility/Interface/GlobalInterface";

export const useFilteredUsers = (
  users: UserType[],
  filterJobPosition: string
) => {
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const filterUsers = () => {
      if (filterJobPosition === "frontend") {
        return users.filter((user) =>
          user.jobposition.toLowerCase().includes("frontend")
        );
      }
      if (filterJobPosition === "backend") {
        return users.filter((user) =>
          user.jobposition.toLowerCase().includes("backend")
        );
      }
      return users;
    };

    setFilteredUsers(filterUsers());
  }, [filterJobPosition, users]);

  return filteredUsers;
};
