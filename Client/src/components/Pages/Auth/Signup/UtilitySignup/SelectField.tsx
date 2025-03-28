import { FormDataRoleAndPosition } from "../../../../../Utility/Interface/GlobalInterface";

interface SelectFieldProps {
  formDataRoleAndPosition: FormDataRoleAndPosition;
  handleChange: (
    field: keyof FormDataRoleAndPosition
  ) => (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  formDataRoleAndPosition,
  handleChange,
}) => {
  return (
    <div className="d-flex justify-content-between gap-4">
      <div className="form-group" style={{ flex: 1 }}>
        <label htmlFor="jobPosition" className="form-label fs-4">
          Job Position
        </label>
        <select
          id="jobPosition"
          className="form-select form-select-lg"
          value={formDataRoleAndPosition.jobPosition}
          onChange={handleChange("jobPosition")}
        >
          <option value="" disabled selected>
            Select a job position
          </option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
        </select>
      </div>

      <div className="form-group" style={{ flex: 1 }}>
        <label htmlFor="role" className="form-label fs-4">
          Account Type
        </label>
        <select
          id="role"
          className="form-select form-select-lg"
          value={formDataRoleAndPosition.role}
          onChange={handleChange("role")}
        >
          <option value="" disabled selected>
            Select an account type
          </option>
          <option value="user">Regular User</option>
          <option value="admin">Administrator</option>
        </select>
      </div>
    </div>
  );
};

export default SelectField;
