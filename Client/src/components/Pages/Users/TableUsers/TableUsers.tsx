/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import JobPositionFilter from "./JobPositionFilter";

import { useLocation } from "react-router-dom";
import { useFilteredUsers } from "./useFilteredUsers";
import { useAdminDashboard } from "../../AdminDashboard/useAdminDashboard";
import { useFetchUsers } from "../useFetchUsers";
import UserTableRender from "./UserTableRender";
const TableUsers = () => {
  const { handleDeleteUser } = useAdminDashboard();
  const { users, loading, fetchUsers } = useFetchUsers();
  const location = useLocation();

  const [filterJobPosition, setFilterJobPosition] = useState<string>("");

  const showActions = location.pathname === "/adminDashboard";

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useFilteredUsers(users, filterJobPosition);

  return (
    <section>
      <h4 className="fs-4 mb-3 fw-bold">Users</h4>

      <JobPositionFilter
        filterJobPosition={filterJobPosition}
        setFilterJobPosition={setFilterJobPosition}
      />

      <UserTableRender
        users={filteredUsers}
        showActions={showActions}
        handleDeleteUser={handleDeleteUser}
        loading={loading}
      />
    </section>
  );
};

export default TableUsers;
