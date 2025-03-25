import { Link } from "react-router-dom";
import LoadingSpinner from "../../../../../Utility/Loading/LoadingSpinner";

interface BtnSignupProps {
  loadingSignup: boolean;
}

const BtnSignup = ({ loadingSignup }: BtnSignupProps) => {
  return (
    <div className="mt-4">
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

      <button
        type="submit"
        className="btn btn-primary w-100 py-2 mt-2"
        style={{ fontSize: "1.6rem" }}
      >
        Register
      </button>

      <div className="text-center mt-3 text-muted small">
        Already have an account?
        <Link
          to="/authLogin"
          className="ms-1 text-decoration-none"
          style={{ fontSize: "1.4rem" }}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default BtnSignup;
