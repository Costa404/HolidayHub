import React, { useState, useEffect } from "react";
import TableUsers from "./TableUsers";

// Example of UserType, adjust it according to your needs

const AdminDashboard = () => {
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "user" });

  useEffect(() => {
    // Function to fetch users from the backend
    const fetchUsers = async () => {
      // Implement user fetching logic
      // setUsers(fetchedUsers); // Update state with the received data
    };
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    // Logic to add a user
    console.log("Adding new user:", newUser);
  };

  return (
    <div
      className="container py-5 w-75 vh-100"
      style={{ backgroundColor: "#f0f8ff" }}
    >
      <h1 className="text-center fs-2 mb-4">Admin Dashboard</h1>
      <div className="row">
        <div className="col-12">
          <h3 className="fs-3 mb-3">User Management</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="form-control mb-2"
              style={{ fontSize: "1rem" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              className="form-control mb-2"
              style={{ fontSize: "1rem" }}
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="form-control mb-3"
              style={{ fontSize: "1rem" }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button
              className="btn btn-primary w-100 py-2 fs-5"
              onClick={handleAddUser}
            >
              Add User
            </button>
            <TableUsers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
