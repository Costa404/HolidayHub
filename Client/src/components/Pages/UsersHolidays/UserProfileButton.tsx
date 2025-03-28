import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface UserProfileButtonProps {
  username: string;
}

const UserProfileButton = ({ username }: UserProfileButtonProps) => {
  const navigate = useNavigate();

  const goToUserProfile = () => {
    navigate(`/profile/${username}`);
  };

  return (
    <span className="d-flex justify-content-center pb-4">
      <Button className="btn btn-primary" onClick={goToUserProfile}>
        <h3 className="text-center hover">{username}</h3>
      </Button>
    </span>
  );
};

export default UserProfileButton;
