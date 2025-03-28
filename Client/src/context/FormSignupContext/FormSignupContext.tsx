import { createContext, useContext, useState } from "react";
import { BothFormDataSignup } from "../../Utility/Interface/GlobalInterface";
import { useError } from "../errorContext/useError";

interface SignupFormContextType {
  formData: BothFormDataSignup;
  handleChange: (
    field: keyof BothFormDataSignup
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: () => void;
  isFormSubmitted: boolean;
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupFormContext = createContext<SignupFormContextType | undefined>(
  undefined
);

export const useSignupForm = () => {
  const context = useContext(SignupFormContext);
  if (!context) {
    throw new Error(
      "useSignupForm deve ser usado dentro de um SignupFormProvider"
    );
  }
  return context;
};

export const SignupFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<BothFormDataSignup>({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    name: "",
    phone: "",
    role: "",
    jobPosition: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { setError } = useError();

  const handleChange =
    (field: keyof BothFormDataSignup) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const submitForm = () => {
    console.log("Formulário enviado!", formData);
    setIsFormSubmitted(true);

    setError("Erro ao tentar criar a conta!");
  };

  return (
    <SignupFormContext.Provider
      value={{
        formData,
        handleChange,
        submitForm,
        isFormSubmitted,
        setIsFormSubmitted,
      }}
    >
      {children}
    </SignupFormContext.Provider>
  );
};
