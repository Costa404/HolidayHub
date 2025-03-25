// useFormData.ts
import { useState } from "react";
import {
  FormData,
  FormDataRoleAndPosition,
} from "../../../../../Utility/Interface/GlabalInterface";

export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    phone: "",
    confirmPassword: "",
    username: "",
  });

  const [formDataRoleAndPosition, setFormDataRoleAndPosition] =
    useState<FormDataRoleAndPosition>({
      role: "user",
      jobPosition: "frontend  ",
    });

  const handleChange =
    (field: keyof FormData | keyof FormDataRoleAndPosition) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.value;

      if (field in formData) {
        setFormData({ ...formData, [field]: value });
      } else {
        setFormDataRoleAndPosition({
          ...formDataRoleAndPosition,
          [field]: value,
        });
      }
    };

  return {
    formData,
    formDataRoleAndPosition,

    handleChange,
  };
};
