import React from "react";
import { InputFieldProps } from "../../../../../Utility/Interface/GlobalInterface";

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  isValid,
  isSubmitted,
  required = false,
  feedbackMessage,
  label,
  style,
}) => {
  const inputClass =
    isSubmitted && isValid === false ? "is-invalid" : isValid ? "is-valid" : "";

  return (
    <div className="form-floating" style={style}>
      <input
        type={type}
        className={`form-control ${inputClass} `}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          ...style,
          height: "4rem",
          width: "100%",

          borderColor: isValid
            ? "green"
            : isSubmitted && isValid === false
            ? "red"
            : "",
        }}
      />
      <label htmlFor={id}>{label}</label>
      {isSubmitted && isValid === false && value && feedbackMessage && (
        <div className="invalid-feedback">{feedbackMessage}</div>
      )}
    </div>
  );
};

export default InputField;
