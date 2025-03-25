import BtnLogin from "./BtnLogin";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const {
    emailLogin,
    passwordLogin,
    handleEmailChangeLogin,
    handlePasswordChangeLogin,
    handleSubmitLogin,
    errorEmail,
    errorPassword,
    loadingLogin,
    errorLogin,
    setErrorLogin,
  } = useLogin();

  return (
    <form
      onSubmit={handleSubmitLogin}
      className="container py-5 p-2 d-flex flex-column  align-items-center w-75 vh-100"
      style={{
        backgroundColor: "#f0f8ff",
      }}
    >
      {/* Image or Illustration for Holiday Theme */}
      <div className="text-center mb-4 mt-5 ">
        <h3 className="h4" style={{ fontSize: "2rem" }}>
          Ready to Plan Your Next Holiday?
        </h3>
        <p className="text-muted" style={{ fontSize: "1.2rem" }}>
          Sign in to manage your holiday plans and mark your next vacation
          dates.
        </p>
      </div>

      {/* Email Field */}
      <div className="mb-3 w-100" style={{ maxWidth: "400px" }}>
        <div className="form-floating">
          <input
            type="email"
            className={`form-control ${
              errorEmail ? "is-invalid" : emailLogin ? "is-valid" : ""
            }`}
            id="email"
            placeholder="Email"
            value={emailLogin}
            onChange={handleEmailChangeLogin}
            required
          />
          <label htmlFor="email" style={{ fontSize: "1.2rem" }}>
            Email
          </label>
          {errorEmail && <div className="invalid-feedback">{errorEmail}</div>}
        </div>
      </div>

      {/* Password Field */}
      <div className="mb-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="form-floating">
          <input
            type="password"
            className={`form-control ${
              errorPassword ? "is-invalid" : passwordLogin ? "is-valid" : ""
            }`}
            id="password"
            placeholder="Password"
            value={passwordLogin}
            onChange={handlePasswordChangeLogin}
            required
          />
          <label htmlFor="password" style={{ fontSize: "1.2rem" }}>
            Password
          </label>
          {errorPassword && (
            <div className="invalid-feedback">{errorPassword}</div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-100 py-2"
        style={{ fontSize: "1.2rem", maxWidth: "400px" }}
        disabled={loadingLogin}
      >
        {loadingLogin ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </button>

      <BtnLogin loadingLogin={loadingLogin} />

      {errorLogin && (
        <div
          className="alert alert-danger alert-dismissible fade show w-100 mt-3"
          style={{ maxWidth: "40rem" }}
        >
          {errorLogin}
          <button
            type="button"
            className="btn-close"
            onClick={() => setErrorLogin(null)}
          ></button>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
