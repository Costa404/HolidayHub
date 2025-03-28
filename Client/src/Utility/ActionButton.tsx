import { ActionButtonProps } from "./Interface/GlobalInterface";

const ActionButton = ({
  label,
  onClick,
  style,
  type,
  disabled,
}: ActionButtonProps) => {
  return (
    <button
      type={type}
      className="p-2 fw-bold btn btn-primary fs-4 px-4 rounded-5 btnTransform"
      onClick={onClick}
      style={{ minWidth: "20rem", maxWidth: "20rem", ...style }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ActionButton;
