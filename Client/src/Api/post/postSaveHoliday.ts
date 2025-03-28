import { useState } from "react";
import { useError } from "../../context/errorContext/useError";
import { apiFetch } from "../api";

const useSaveHoliday = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setError } = useError();

  const saveHoliday = async (startDate: Date, endDate: Date) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiFetch("/api/addHolidays", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        }),
      });

      console.log("response", response);
    } catch (err) {
      setError("Failed to save holiday.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { saveHoliday, isLoading };
};

export default useSaveHoliday;
