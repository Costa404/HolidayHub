import { useError } from "../../context/errorContext/useError";
import { apiFetch } from "../api";

export const useAuthSignup = () => {
  const { setError } = useError();

  const authSignup = async (
    email: string,
    password: string,
    username: string,
    name: string,
    phone: string,
    role: string,
    jobPosition: string,
    setLoading: (loading: boolean) => void
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          phone,
          role,
          jobPosition,
          username,
        }),
      });

      const { token } = response;

      localStorage.setItem("authToken", token);

      return response;
    } catch (error: any) {
      console.error("Signup error:", error);
      setError(error.message || "An unexpected error occurred.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { authSignup };
};
