export const authLogin = async (
  email: string,
  password: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void
) => {
  setLoading(true);
  setError(null);

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials. Please try again.");
    }

    const data = await response.json();
    const { token } = data;

    localStorage.setItem("authToken", token);

    return data;
  } catch (error: any) {
    console.error("Login error:", error);
    setError(error.message || "An unexpected error occurred.");
    throw error;
  } finally {
    setLoading(false);
  }
};
