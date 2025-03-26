import { useFetchUsers } from "../Users/useFetchUsers";

const TableUsers = () => {
  const handleDeleteUser = (id: string) => {
    console.log("Removing user with ID:", id);
  };

  const { users, loading, error } = useFetchUsers();
  return (
    <section>
      {" "}
      <h4 className="fs-4 mb-3">User List</h4>
      <table className="table table-bordered" style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "calc(100% / 6)" }}>UserName</th>
            <th style={{ width: "calc(100% / 6)" }}>Name</th>
            <th style={{ width: "calc(100% / 6)" }}>Email</th>
            <th style={{ width: "calc(100% / 6)" }}>Phone</th>
            <th style={{ width: "calc(100% / 6)" }}>Role</th>
            <th style={{ width: "calc(100% / 6)" }}>Job Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userid}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.phone}</td>
              <td>{user.jobPosition}</td>
              <td>
                <button
                  className="btn btn-danger fs-6"
                  onClick={() => handleDeleteUser(user.userid)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableUsers;
