import NotAuthenticated from "./NotAuthenticated";
import { useIsOnline } from "../../../Utility/useIsOnline";
import ActionButton from "../../../Utility/ActionButton";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { isOnline } = useIsOnline();
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/myProfile");
  };

  return (
    <div className="justify-content-center d-flex w-100 vh-100 ">
      <div
        className="row w-75 backgroundMobile backgroundMobile"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <div className="col-12 text-center mt-5">
          <h6 className="display-4 fw-semibold">Welcome to Holiday Hub</h6>
          <p className=" fs-4">
            Here, you can manage your holidays and view all users.
          </p>
          <NotAuthenticated />
          <div className="mt-4">
            {!isOnline ? null : (
              <ActionButton
                label="Manage My Holidays"
                onClick={navigateToProfile}
              />
            )}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
