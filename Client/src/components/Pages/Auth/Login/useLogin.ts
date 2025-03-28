import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from "../../../../context/errorContext/useError";
import { authLogin } from "../../../../Api/post/postLogin";
import { useCurrentUser } from "../../../../context/useCurrentUserAuth";

export const useLogin = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);
  const [forceUpdate, setForceUpdate] = useState(Boolean);

  const navigate = useNavigate();
  const { setError } = useError();
  const { refetchCurrentUser } = useCurrentUser();

  const handleEmailChangeLogin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailLogin(event.target.value);
    if (errorEmail) setErrorEmail(null);
  };

  const handlePasswordChangeLogin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordLogin(event.target.value);
    if (errorPassword) setErrorPassword(null);
  };

  const validateForm = (): boolean => {
    let isValid = true;

    if (!emailLogin.trim()) {
      setErrorEmail("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLogin)) {
      setErrorEmail("Please enter a valid email address");
      isValid = false;
    }

    if (!passwordLogin) {
      setErrorPassword("Password is required");
      isValid = false;
    } else if (passwordLogin.length < 6) {
      setErrorPassword("Password must be at least 6 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmitLogin = async (event: React.FormEvent) => {
    setLoadingLogin(true);
    event.preventDefault();

    if (!validateForm()) {
      setLoadingLogin(false);
      return;
    }

    try {
      const result = await authLogin(emailLogin, passwordLogin);

      if (!result.success) {
        setError(result.error || "Login failed. Please try again.");
        return;
      }

      await refetchCurrentUser();
      setEmailLogin("");
      setPasswordLogin("");
      navigate("/");
      setForceUpdate(true);
    } catch (error) {
      console.error("Login process error:", error);
      setError("An unexpected error occurred during login");
    } finally {
      setLoadingLogin(false);
    }
  };

  return {
    emailLogin,
    passwordLogin,
    loadingLogin,
    errorEmail,
    errorPassword,
    handleEmailChangeLogin,
    handlePasswordChangeLogin,
    handleSubmitLogin,
    forceUpdate,
  };
};
