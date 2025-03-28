import ErrorDisplay from "../../../../context/errorContext/ErrorDisplay";
import { useError } from "../../../../context/errorContext/useError";
import ActionButton from "../../../../Utility/ActionButton";
import LoadingSpinner from "../../../../Utility/Loading/LoadingSpinner";
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
  } = useLogin();

  const { error } = useError();

  if (loadingLogin) return <LoadingSpinner />;

  return (
    <section>
      <form
        onSubmit={handleSubmitLogin}
        className="container py-5 p-2 d-flex flex-column  align-items-center w-75 backgroundMobile vh-100"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <div className="text-center mb-4 mt-5 ">
          <h3 className="fw-bold">Ready to Plan Your Next Holiday?</h3>
          <p className="text-muted fs-5">
            Sign in to manage your holiday plans and mark your next vacation
            dates.
          </p>
        </div>

        <div className="mb-3 w-100" style={{ maxWidth: "40rem" }}>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
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

        <div className="mb-4 w-100" style={{ maxWidth: "40rem" }}>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
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

        <ActionButton label="Login" type="submit" />

        <BtnLogin />

        {error && <ErrorDisplay />}
      </form>
    </section>
  );
};

export default LoginForm;
