import { Table } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../Utility/Loading/LoadingSpinner";

interface UserTableRenderProps {
  users: any[];
  showActions: boolean;
  handleDeleteUser: (userid: number) => void;
  loading: boolean;
}

const UserTableRender: React.FC<UserTableRenderProps> = ({
  users,
  showActions,
  handleDeleteUser,
  loading,
}) => {
  const navigate = useNavigate();

  const goToUserProfile = (username: string) => {
    navigate(`/profile/${username}`);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div style={{ maxHeight: "65vh", overflowY: "auto" }} className="pb-5">
      <Table hover bordered responsive style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "calc(100% / 7)" }}>UserName</th>
            <th style={{ width: "calc(100% / 7)" }}>Name</th>
            <th style={{ width: "calc(100% / 7)" }}>Email</th>
            <th style={{ width: "calc(100% / 7)" }}>Role</th>
            <th style={{ width: "calc(100% / 7)" }}>Phone</th>
            <th style={{ width: "calc(100% / 7)" }}>Job Position</th>
            {showActions && (
              <th style={{ width: "calc(100% / 7)" }}>Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.userid}
              onClick={() => goToUserProfile(user.username)}
              style={{ cursor: "pointer" }}
            >
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td
                style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
              >
                {user.email}
              </td>
              <td>{user.role}</td>
              <td>{user.phone}</td>
              <td>{user.jobposition}</td>
              {showActions && (
                <td className="text-center">
                  <button
                    className="btn text-danger hover fs-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteUser(user.userid);
                    }}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTableRender;
