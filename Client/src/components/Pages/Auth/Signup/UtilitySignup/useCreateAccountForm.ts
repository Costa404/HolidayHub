import { useState } from "react";
import { useSignupForm } from "../../../../../context/FormSignupContext/FormSignupContext";
import { useNavigate } from "react-router-dom";
import { useError } from "../../../../../context/errorContext/useError";
import { useAuthSignup } from "../../../../../Api/post/postSignup";

export const useCreateAccountForm = () => {
  const { formData, handleChange, setIsFormSubmitted } = useSignupForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setError } = useError();
  const { authSignup } = useAuthSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setIsFormSubmitted(true);

    try {
      setError(null);

      await authSignup(
        formData.email,
        formData.password,
        formData.name,
        formData.phone,
        formData.username,
        formData.role,
        formData.jobPosition,
        setLoading
      );

      console.log(" Account created successfully!");
      navigate("/");
    } catch (err: any) {
      console.error("❌ Error during signup:", err);

      if (err.error === "email_taken") {
        setError(
          "This email is already in use. Please use a different email address."
        );
      } else if (err.error === "username_taken") {
        setError(
          "This username is already taken. Please choose a different username."
        );
      } else if (err.error === "server_error") {
        setError("Server error. Please try again later.");
      } else if (
        err.message
          ?.toLowerCase()
          .includes("password must be at least 6 characters")
      ) {
        setError("Password must be at least 6 characters long.");
      } else if (
        err.message?.toLowerCase().includes("all fields must be filled")
      ) {
        setError("Please fill in all required fields.");
      } else {
        setError("Failed to create account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
  };
};
