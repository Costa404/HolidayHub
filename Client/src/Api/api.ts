interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
  isPublicRoute?: boolean;
}
export const apiFetch = async (
  endpoint: string,
  options: FetchOptions = { isPublicRoute: false }
) => {
  const API_URL = "http://localhost:3000";
  const token = localStorage.getItem("authToken");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (!options.isPublicRoute && token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      console.warn("User not authenticated. Removing token and redirecting.");
      localStorage.removeItem("authToken");
      throw new Error("Unauthorized - Invalid token or not authenticated.");
    }

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      throw new Error(
        "Expected JSON response, but received a different content type."
      );
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
