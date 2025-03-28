import React from "react";
import ReactDOM from "react-dom";
import useAddUserModal from "./useAddUserModal";
import SignupForm from "../../Auth/Signup/CreateAccountForm";
import ActionButton from "../../../../Utility/ActionButton";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useCreateAccountForm } from "../../Auth/Signup/UtilitySignup/useCreateAccountForm";
import LoadingSpinner from "../../../../Utility/Loading/LoadingSpinner";

const AddUserModal: React.FC = () => {
  const { isAddUserModalOpen, closeAddUserModal } = useAddUserModal();
  const { handleSubmit, loading } = useCreateAccountForm();

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      {isAddUserModalOpen &&
        ReactDOM.createPortal(
          <>
            <div className="modalOverlay" onClick={closeAddUserModal}></div>

            <div className="modalContent p-5 d-flex align-items-center flex-column">
              <div className="d-flex justify-content-between align-items-center w-100">
                <IoMdArrowRoundBack
                  style={{ fontSize: "3rem" }}
                  className="hover"
                  onClick={closeAddUserModal}
                />
                <h3 className="fw-bold text-center ">Create New User</h3>
              </div>
              <SignupForm />
              <ActionButton label="Add User" onClick={handleSubmit} />
            </div>
          </>,

          document.getElementById("modal-addUser")!
        )}
    </div>
  );
};

export default AddUserModal;
