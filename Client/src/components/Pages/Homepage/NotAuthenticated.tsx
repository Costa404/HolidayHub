import { useNavigate } from "react-router-dom";

import ActionButton from "../../../Utility/ActionButton";
import { useIsOnline } from "../../../Utility/useIsOnline";

const NotAuthenticated = () => {
  const { isOnline } = useIsOnline();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/authLogin");
  };

  if (isOnline) return null;

  return (
    <div className="d-flex justify-content-center align-items-center w-100 ">
      <div className=" text-center">
        <p className="fs-4">
          Log in and enjoy full access to the platform's features.
        </p>
        <div className="mt-3">
          <ActionButton label="Login" onClick={handleNavigate} />
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default NotAuthenticated;
