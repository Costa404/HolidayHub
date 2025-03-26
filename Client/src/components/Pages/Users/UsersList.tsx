import { Table, Alert, Container } from "react-bootstrap";
import { useFetchUsers } from "./useFetchUsers";
import LoadingSpinner from "../../../Utility/Loading/LoadingSpinner";

export default function UsersList() {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <LoadingSpinner />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Lista de Usuários</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Username</th>
            <th>Job Position</th>
            <th>Role</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userid}>
              <td>{user.userid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.jobPosition}</td>
              <td>{user.role}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
