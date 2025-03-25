export const authSignup = async (
  email: string,
  password: string,
  username: string,
  name: string,
  phone: string,
  role: string,
  jobPosition: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void
) => {
  setLoading(true);
  setError(null);

  try {
    const response = await fetch("http://localhost:3000/api/signup", {
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

    if (!response.ok) {
      throw new Error("Failed to create account. Please try again.");
    }

    const data = await response.json();
    const { token } = data;

    // Armazenar o token no localStorage
    localStorage.setItem("authToken", token);

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Signup error:", error);
    setError(error.message || "An unexpected error occurred.");
    throw error;
  } finally {
    setLoading(false);
  }
};
