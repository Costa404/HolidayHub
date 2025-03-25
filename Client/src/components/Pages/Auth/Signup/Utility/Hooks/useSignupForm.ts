import { useState } from "react";

import { useFormData } from "./useFormData";
import { authSignup } from "../../../../../../Api/post/postSignup";
import { useNavigate } from "react-router-dom";

export const useSignupForm = () => {
  const { formData, formDataRoleAndPosition, handleChange } = useFormData();
  console.log("FormData", formData);
  console.log("formDataRoleAndPosition", formDataRoleAndPosition);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    try {
      setLoading(true);
      setError(null);

      await authSignup(
        formData.email,
        formData.password,
        formData.name,
        formData.phone,
        formData.username,
        formDataRoleAndPosition.role,
        formDataRoleAndPosition.jobPosition,
        setLoading,
        setError
      );

      console.log("Account created successfully!");
    } catch (err) {
      console.error("Error during signup:", err);
      setError("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return {
    formData,
    formDataRoleAndPosition,

    isFormSubmitted,
    handleChange,
    handleSubmit,
    loading,
    error,
  };
};
