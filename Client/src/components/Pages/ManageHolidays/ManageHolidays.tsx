import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ManageHolidays = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);

    // Ajustar a data de término para ser no mínimo 1 dia após a data de início
    if (endDate && date >= endDate) {
      const newEndDate = new Date(date);
      newEndDate.setDate(newEndDate.getDate() + 1); // Um dia após a data de início
      setEndDate(newEndDate);
    }
  };

  const handleEndDateChange = (date: Date) => {
    if (startDate && date < startDate) {
      setError("End date must be after the start date.");
      return;
    }

    setEndDate(date);
    setError(null); // Limpar o erro quando a data final for válida
  };

  const handleSubmit = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    // Aqui você pode enviar as datas para o backend ou fazer outro processamento
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <div
      className="container py-5 w-75 vh-100"
      style={{ backgroundColor: "#f0f8ff" }}
    >
      <div className="row">
        <div className="col-12 text-center">
          <h1>Manage Holidays</h1>
          <p className="lead">
            Select the start and end dates for your holiday.
          </p>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mt-4">
            <div>
              <label>Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                dateFormat="yyyy/MM/dd"
                className="form-control"
                minDate={new Date()}
                calendarClassName="custom-calendar"
              />
            </div>

            <div className="mt-3">
              <label>End Date</label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat="yyyy/MM/dd"
                className="form-control"
                minDate={startDate || new Date()}
                calendarClassName="custom-calendar"
              />
            </div>

            <div className="mt-4">
              <button onClick={handleSubmit} className="btn btn-primary">
                Save Holidays
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHolidays;
