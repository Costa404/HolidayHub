import { useState } from "react";
import { authLogin } from "../../../../Api/post/postLogin";

export const useLogin = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState<string | null>(null);
  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);

  const handleEmailChangeLogin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailLogin(event.target.value);
    setErrorEmail(null);
  };

  const handlePasswordChangeLogin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordLogin(event.target.value);
    setErrorPassword(null);
  };

  const handleSubmitLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    setErrorLogin(null);
    setErrorEmail(null);
    setErrorPassword(null);

    let isValid = true;
    if (!emailLogin) {
      setErrorEmail("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailLogin)) {
      setErrorEmail("Please enter a valid email address.");
      isValid = false;
    }

    if (!passwordLogin) {
      setErrorPassword("Password is required.");
      isValid = false;
    } else if (passwordLogin.length < 6) {
      setErrorPassword("Password must be at least 6 characters.");
      isValid = false;
    }

    if (!isValid) return;

    setLoadingLogin(true);

    try {
      await authLogin(
        emailLogin,
        passwordLogin,
        setLoadingLogin,
        setErrorLogin
      );

      setEmailLogin("");
      setPasswordLogin("");
    } catch (err: any) {
      if (err.response?.data?.error) {
        setErrorLogin(err.response.data.error);
      } else if (err.message.includes("Network Error")) {
        setErrorLogin("Network error. Please check your connection.");
      } else {
        setErrorLogin("Invalid credentials. Please try again.");
      }
      console.error("Login failed:", err);
    } finally {
      setLoadingLogin(false);
    }
  };

  return {
    emailLogin,
    passwordLogin,
    loadingLogin,
    errorLogin,
    errorEmail,
    errorPassword,
    setEmailLogin,
    setPasswordLogin,
    handleEmailChangeLogin,
    handlePasswordChangeLogin,
    handleSubmitLogin,
    setErrorLogin,
  };
};
