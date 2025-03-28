import { apiFetch } from "../api";

export const authLogin = async (email: string, password: string) => {
  try {
    const response = await apiFetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.token) {
      throw new Error("No token received in response");
    }

    localStorage.setItem("authToken", response.token);

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    console.error("Login error:", error);

    return {
      success: false,
      error: error.message || "An unexpected error occurred",
      status: error.response?.status,
    };
  }
};
