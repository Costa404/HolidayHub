import { useState, useEffect } from "react";
import { apiFetch } from "../api";
import { useError } from "../../context/errorContext/useError";
import { Holiday } from "../../Utility/Interface/GlobalInterface";

const useGetAllHolidays = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { setError } = useError();

  const fetchHolidays = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiFetch("/api/getAllHolidays", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const fetchedHolidays = response.holidays || [];
      setHolidays(fetchedHolidays);
    } catch (err) {
      setError("Failed to fetch holidays.");
      console.error(err);
      setHolidays([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHolidays();
  }, []);
  return { holidays, isLoading };
};

export default useGetAllHolidays;
