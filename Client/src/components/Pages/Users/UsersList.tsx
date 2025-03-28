import { Table, Alert } from "react-bootstrap";
import { useFetchUsers } from "./useFetchUsers";
import LoadingSpinner from "../../../Utility/Loading/LoadingSpinner";

export default function UsersList() {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <LoadingSpinner />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <section
      className=" w-75 backgroundMobile vh-100"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <h2 className="text-center mb-4">User List</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Username</th>
            <th>Job Position</th>
            <th>Role</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userid}>
              <td>{user.userid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.jobposition}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}
