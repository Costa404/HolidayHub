import { useError } from "./useError";

const ErrorDisplay = () => {
  const { error, setError } = useError();

  return error ? (
    <div
      className="alert alert-danger alert-dismissible fade show w-100 mt-3 fs-5"
      style={{ maxWidth: "40rem" }}
    >
      {error}
      <button
        type="button"
        className="btn-close"
        onClick={() => setError(null)}
      ></button>
    </div>
  ) : null;
};

export default ErrorDisplay;
