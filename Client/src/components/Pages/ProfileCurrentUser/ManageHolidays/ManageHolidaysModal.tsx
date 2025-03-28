import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from "react-dom";

import { useError } from "../../../../context/errorContext/useError";
import useHolidayManager from "./useHolidayManager";
import useManageHolidaysModal from "./useManageHolidaysStore";
import ActionButton from "../../../../Utility/ActionButton";

const ManageHolidaysModal = () => {
  const {
    startDate,
    endDate,
    isLoading,
    handleStartDateChange,
    handleEndDateChange,
    handleSubmit,
  } = useHolidayManager();

  const { error } = useError();
  const {
    isManageHolidaysModalOpen,

    closeManageHolidaysModal,
  } = useManageHolidaysModal();

  return (
    <>
      {isManageHolidaysModalOpen &&
        ReactDOM.createPortal(
          <div>
            <div
              className="modalOverlay"
              onClick={closeManageHolidaysModal}
            ></div>

            <div className="modalContent p-5 d-flex flex-column align-items-center justify-content-center text-center">
              <h1 className="">Manage Holidays</h1>
              <p className="fs-6">
                Select the start and end dates for your holiday.
              </p>

              {error && <div className="alert alert-danger">{error}</div>}

              <div className=" w-100">
                <div className=" d-flex flex-column justify-content-center align-items-center">
                  <label className="fs-4">Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    dateFormat="yyyy/MM/dd"
                    className="form-control inputWidthModalHolidays"
                    minDate={new Date()}
                    calendarClassName="custom-calendar"
                  />
                </div>

                <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                  <label className="fs-4">End Date</label>
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    dateFormat="yyyy/MM/dd"
                    className="form-control inputWidthModalHolidays"
                    minDate={startDate || new Date()}
                    calendarClassName="custom-calendar"
                  />
                </div>

                <div className="mt-4 mb-2">
                  <ActionButton
                    onClick={handleSubmit}
                    disabled={isLoading}
                    label={isLoading ? "Saving..." : "Save Holidays"}
                  />
                </div>
              </div>
              <ActionButton
                onClick={closeManageHolidaysModal}
                className="btn btn-danger mt-4"
                label="Close"
                style={{ backgroundColor: "red", border: "none" }}
              />
            </div>
          </div>,
          document.getElementById("modal-ManageHolidays")!
        )}
    </>
  );
};

export default ManageHolidaysModal;
