import { useState } from "react";
import useSaveHoliday from "../../../../Api/post/postSaveHoliday";
import { useError } from "../../../../context/errorContext/useError";

const useHolidayManager = () => {
  const { setError } = useError();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [reRenderHolidays, setReRenderHolidays] = useState<boolean>(false);

  const { saveHoliday, isLoading } = useSaveHoliday();

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);

    if (endDate && date >= endDate) {
      const newEndDate = new Date(date);
      newEndDate.setDate(newEndDate.getDate() + 1);
      setEndDate(newEndDate);
    }
  };

  const handleEndDateChange = (date: Date) => {
    if (startDate && date < startDate) {
      setError("End date must be after the start date.");
      return;
    }

    setEndDate(date);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }

    try {
      await saveHoliday(startDate, endDate);
      setError(null);
      alert("Holiday saved successfully!");
      setReRenderHolidays(true);
      // eslint-disable-next-line no-self-assign
      window.location.href = window.location.href;
    } catch (err) {
      console.error("Failed to save holiday", err);
      setError("Failed to save holiday.");
    }
  };

  return {
    startDate,
    endDate,
    isLoading,
    handleStartDateChange,
    handleEndDateChange,
    handleSubmit,
    reRenderHolidays,
  };
};

export default useHolidayManager;
