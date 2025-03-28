import { Link } from "react-router-dom";

const BtnLogin = () => {
  return (
    <>
      <div
        className="d-flex  justify-content-between mt-3 w-100"
        style={{ maxWidth: "40rem" }}
      >
        <div className="text-muted small fs-5 ">
          Don't have an account?
          <Link to="/authSignup" className="ms-1 text-decoration-none fs-5">
            Sign Up
          </Link>
        </div>
        <div className="text-muted small" style={{ fontSize: "1.1rem" }}>
          <a href="#" className="text-decoration-none fs-5">
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
};

export default BtnLogin;
