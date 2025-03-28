import { useSignupForm } from "../../../../context/FormSignupContext/FormSignupContext";
import InputField from "./UtilitySignup/InputField";
import SelectField from "./UtilitySignup/SelectField";

const CreateAccountForm: React.FC = () => {
  const { formData, handleChange, submitForm, isFormSubmitted } =
    useSignupForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
      className="container py-3"
      style={{ maxWidth: "40rem" }}
    >
      <div className="d-flex flex-column gap-4">
        <div className="row g-4">
          <div className="col-md-6 fs-5">
            <InputField
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange("email")}
              isSubmitted={isFormSubmitted}
              required
              feedbackMessage="Please enter a valid email address."
              label="Email"
              className="form-control form-control-lg w-100 fw-bold fs-5"
            />
          </div>
          <div className="col-md-6 fs-5">
            <InputField
              type="password"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange("password")}
              isSubmitted={isFormSubmitted}
              required
              feedbackMessage="Password must be at least 6 characters."
              label="Password"
              className="form-control form-control-lg w-100 fw-bold fs-5"
            />
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 fs-5">
            <InputField
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              label="Confirm Password"
              required
              isSubmitted={isFormSubmitted}
              className="form-control form-control-lg w-100 fw-bold fs-5"
            />
          </div>
          <div className="col-md-6 fs-5">
            <InputField
              type="text"
              id="username"
              placeholder="Your username"
              value={formData.username}
              onChange={handleChange("username")}
              label="Username"
              required
              isSubmitted={isFormSubmitted}
              className="form-control form-control-lg w-100 fw-bold fs-5"
            />
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 fs-5">
            <InputField
              type="text"
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange("name")}
              label="Full Name"
              required
              isSubmitted={isFormSubmitted}
              className="form-control form-control-lg w-100 fw-bold fs-5"
            />
          </div>
          <div className="col-md-6 fs-5">
            <InputField
              type="phone"
              id="phone"
              placeholder="Phone number (optional)"
              value={formData.phone}
              onChange={handleChange("phone")}
              label="Phone"
              className="form-control form-control-lg w-100 fw-bold fs-5"
              isSubmitted={isFormSubmitted}
            />
          </div>
        </div>

        <SelectField
          formDataRoleAndPosition={formData}
          handleChange={handleChange}
        />
      </div>
    </form>
  );
};

export default CreateAccountForm;
