type LoadingSpinnerProps = {
  style?: React.CSSProperties;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ style }) => {
  return (
    <div className="w-100 justify-content-center d-flex">
      {" "}
      <div
        className="d-flex justify-content-center align-items-center vh-100 w-75 backgroundMobile"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "6rem", height: "6rem", zIndex: "999", ...style }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
