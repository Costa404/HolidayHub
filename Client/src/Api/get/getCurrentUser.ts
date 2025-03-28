import { useState, useEffect } from "react";
import { apiFetch } from "../api";
import { UserType } from "../../Utility/Interface/GlobalInterface";

export const useGetCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return;

    setLoading(true);
    try {
      const response = await apiFetch("/api/currentUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurrentUser(response);
    } catch (error) {
      console.error("Error when fetching current user:", error);
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { currentUser, loading, refetch: fetchUser };
};
