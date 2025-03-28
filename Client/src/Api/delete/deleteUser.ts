import { useState } from "react";
import { apiFetch } from "../api";

export const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteUser = async ({ userid }: { userid: number }) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");

      const response = await apiFetch(`/api/deleteUser/${userid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Delete user:", response);

      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading, error, setLoading };
};
