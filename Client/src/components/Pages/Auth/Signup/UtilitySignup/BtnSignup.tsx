import { Link } from "react-router-dom";
import LoadingSpinner from "../../../../../Utility/Loading/LoadingSpinner";
import ActionButton from "../../../../../Utility/ActionButton";
import { useCreateAccountForm } from "./useCreateAccountForm";
interface BtnSignupProps {
  loadingSignup: boolean;
}

const BtnSignup = ({ loadingSignup }: BtnSignupProps) => {
  const { handleSubmit } = useCreateAccountForm();

  return (
    <div className="mt-4 d-flex flex-column">
      {loadingSignup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            zIndex: 1050,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(2px)",
          }}
        >
          <div className="position-relative">
            <LoadingSpinner />
          </div>
        </div>
      )}

      <ActionButton label="Register" onClick={handleSubmit} />

      <div className="text-center mt-3 text-muted fs-5 small">
        Already have an account?
        <Link to="/authLogin" className="ms-1 text-decoration-none fs-5">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default BtnSignup;
