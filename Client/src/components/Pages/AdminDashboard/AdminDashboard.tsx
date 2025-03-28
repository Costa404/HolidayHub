import { useEffect } from "react";
import TableUsers from "../Users/TableUsers/TableUsers";

import useAddUserModal from "./AddUserAdmin/useAddUserModal";
import ActionButton from "../../../Utility/ActionButton";
import AddUserModal from "./AddUserAdmin/AddUserModal";

const AdminDashboard = () => {
  const { openAddUserModal, isAddUserModalOpen } = useAddUserModal();
  console.log("isAddUserModalOpen", isAddUserModalOpen);

  useEffect(() => {
    const fetchUsers = async () => {};
    fetchUsers();
  }, []);

  return (
    <section className="d-flex justify-content-center ">
      <div
        className="  w-75 backgroundMobile vh-100 p-5"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <h1 className="text-center fs-2 mb-4 fw-bold">Admin Dashboard</h1>
        <div className="row">
          <div className="col-12 w-100 ">
            <div className="w-100 d-flex justify-content-end">
              {" "}
              <ActionButton onClick={openAddUserModal} label="Add User" />
            </div>
            <TableUsers />
          </div>
        </div>
      </div>
      <AddUserModal />
    </section>
  );
};

export default AdminDashboard;
