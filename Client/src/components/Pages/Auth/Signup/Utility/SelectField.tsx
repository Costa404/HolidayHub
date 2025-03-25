import { FormDataRoleAndPosition } from "../../../../Utility/Interface/GlabalInterface";

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1.6rem",
      }}
    >
      <div>
        <label htmlFor="jobPosition">Job Position</label>
        <select
          id="jobPosition"
          value={formDataRoleAndPosition.jobPosition}
          onChange={handleChange("jobPosition")}
        >
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
        </select>
      </div>

      <div>
        <label htmlFor="role">Account Type</label>
        <select
          id="role"
          value={formDataRoleAndPosition.role}
          onChange={handleChange("role")}
        >
          <option value="user">Regular User</option>
          <option value="admin">Administrator</option>
        </select>
      </div>
    </div>
  );
};

export default SelectField;
