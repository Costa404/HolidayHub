import React from "react";
import { useSignupForm } from "./Utility/Hooks/useSignupForm";
import InputField from "./Utility/InputField";
import SelectField from "./Utility/SelectField";

import BtnSignup from "./Utility/BtnSignup";

const SignupForm: React.FC = () => {
  const {
    formData,
    loading,
    isFormSubmitted,
    handleChange,
    handleSubmit,
    formDataRoleAndPosition,
  } = useSignupForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="container py-3"
      style={{
        maxWidth: "40rem", // 400px (4rem) de largura máxima

        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="text-center mb-4">
        <h3 className="h4" style={{ fontSize: "2rem" }}>
          Create Account
        </h3>
      </div>

      {/* Campos com rolagem */}
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column", // Aqui é flex-col para a estrutura principal
          gap: "1.6rem", // 16px de espaçamento entre os campos
        }}
      >
        {/* Primeira linha com dois campos */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1.6rem", // 16px de espaçamento entre os campos
          }}
        >
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
            style={{ fontSize: "1.4rem", flex: "1 1 48%" }}
          />
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
            style={{ fontSize: "1.4rem", flex: "1 1 48%" }}
          />
        </div>
        {/* Terceira linha com dois campos */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1.6rem", // 16px de espaçamento entre os campos
          }}
        >
          <InputField
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange("confirmPassword")}
            label="Confirm Password"
            required
            style={{ fontSize: "1.4rem", flex: "1 1 48%" }}
          />
          <InputField
            type="text"
            id="username"
            placeholder="Your username"
            value={formData.username}
            onChange={handleChange("username")}
            label="username"
            required
            style={{ fontSize: "1.4rem", flex: "1 1 48%" }}
          />
        </div>
        {/* Segunda linha com dois campos */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1.6rem", // 16px de espaçamento entre os campos
          }}
        >
          <InputField
            type="text"
            id="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange("name")}
            label="Full Name"
            required
            style={{ fontSize: "1.4rem", flex: "1 1 48%" }}
          />
          <InputField
            type="phone"
            id="phone"
            placeholder="Phone number (optional)"
            value={formData.phone}
            onChange={handleChange("phone")}
            label="Phone"
            style={{ fontSize: "1.4rem", flex: "1 1 48%" }}
          />
        </div>

        <SelectField
          formDataRoleAndPosition={formDataRoleAndPosition}
          handleChange={handleChange}
        />
      </div>
      <BtnSignup loadingSignup={loading} />
    </form>
  );
};

export default SignupForm;
