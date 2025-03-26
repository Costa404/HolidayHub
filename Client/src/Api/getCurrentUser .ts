import { useState, useEffect } from "react";

export const useGetCurrentUser = () => {
  const [getUser, setGetUser] = useState<any>(null); //

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) return;

    const getUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/currentUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("data", data);

          setGetUser(data);
        } else {
          console.error("Failed to fetch current user");
        }
      } catch (error) {
        console.error("Error when fetching current user:", error);
      }
    };

    getUser();
  }, []);

  return getUser;
};
