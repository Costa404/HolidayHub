import { useEffect, useState } from "react";
import { apiFetch } from "../api";
import { useError } from "../../context/errorContext/useError";
import { Holiday } from "../../Utility/Interface/GlobalInterface";

const useGetUserHolidays = (userId: number | undefined) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setError } = useError();

  useEffect(() => {
    if (!userId) return;

    const fetchUserHolidays = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await apiFetch(`/api/getHolidays/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const fetchedHolidays = response.holidays || [];
        setHolidays(fetchedHolidays);
      } catch (err) {
        setError("Failed to fetch user holidays.");
        console.error(err);
        setHolidays([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserHolidays();
  }, [userId, setError]);

  return { holidays, isLoading };
};

export default useGetUserHolidays;
