import { Link } from "react-router-dom";
import LoadingSpinner from "../../../../Utility/Loading/LoadingSpinner";

interface BtnLoginProps {
  loadingLogin: boolean;
}

const BtnLogin = ({ loadingLogin }: BtnLoginProps) => {
  return (
    <>
      {loadingLogin && (
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

      <div
        className="d-flex justify-content-between mt-3 w-100"
        style={{ maxWidth: "40rem" }}
      >
        <div className="text-muted small" style={{ fontSize: "1.1rem" }}>
          Don't have an account?
          <Link
            to="/authSignup"
            className="ms-1 text-decoration-none"
            style={{ fontSize: "1.1rem" }}
          >
            Sign Up
          </Link>
        </div>
        <div className="text-muted small" style={{ fontSize: "1.1rem" }}>
          <a href="#" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
};

export default BtnLogin;
